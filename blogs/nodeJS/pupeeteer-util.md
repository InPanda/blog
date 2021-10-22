---
title: puppeteer-util
date: 2021-06-28
tags:
 - puppeteer 
categories: 
 - Node.js
sidebar: auto
---
---

# puppeteer 封装常用api

```js
module.exports = class CommonPage {
  constructor(page) {
    this.page = page;
  }

  /**
   * 获取页面标题
   * @returns {Promise<*>}
   */
  async getPageTitle() {
    return this.page.title();
  }

  /**
   * 转到URL
   * @param url
   * @returns {Promise<void>}
   */
  async goTo(url) {
    await this.page.goto(url);
  }

  /**
   * 获取当前的URL.
   * @returns {Promise<string>}
   */
  async getCurrentURL() {
    return decodeURIComponent(this.page.url());
  }

  /**
   * 等待选择器可见
   * @param selector
   * @param timeout
   * @return {Promise<void>}
   */
  async waitForVisibleSelector(selector, timeout = 10000) {
    await this.page.waitForSelector(selector, {visible: true, timeout});
  }

  /**
   * 从元素获取文本
   * @param selector, 从哪里获取文本
   * @param waitForSelector
   * @return {Promise<string>}
   */
  async getTextContent(selector, waitForSelector = true) {
    if (waitForSelector) {
      await this.waitForVisibleSelector(selector);
    }
    const textContent = await this.page.$eval(selector, el => el.textContent);
    return textContent.replace(/\s+/g, ' ').trim();
  }

  /**
   * 从元素获取属性
   * @param selector
   * @param attribute
   * @returns {Promise<string>}
   */
  async getAttributeContent(selector, attribute) {
    await this.page.waitForSelector(selector);
    return this.page.$eval(selector, (el, attr) => el
      .getAttribute(attr), attribute);
  }

  /**
   * 复选框已检查状态
   * @param selector, 复选框检查
   * @return boolean, 如果checked，则为真，如果没有，则为false
   */
  async elementChecked(selector) {
    return this.page.$eval(selector, el => el.checked);
  }

  /**
   * 更新复选框值
   * @param selector
   * @param expectedValue
   * @return {Promise<void>}
   */
  async updateCheckboxValue(selector, expectedValue) {
    const actualValue = await this.elementChecked(selector);
    if (actualValue !== expectedValue) {
      await this.page.click(selector);
    }
  }

  /**
   * 元素是可见的
   * @param selector, element to check
   * @param timeout, 
   * @return boolean, true if visible, false if not
   */
  async elementVisible(selector, timeout = 10) {
    try {
      await this.waitForVisibleSelector(selector, timeout);
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * 是元素不可见
   * @param selector, 
   * @param timeout, 
   * @return boolean, true if visible, false if not
   */
  async elementNotVisible(selector, timeout = 10) {
    try {
      await this.page.waitForSelector(selector, {hidden: true, timeout});
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * 在新选项卡中打开链接并获取已打开的页面
   * @param currentPage, 当前页面在哪里可以单击选择器
   * @param selector, where to click
   * @param waitForNavigation, 如果我们应该等待导航
   * @return newPage, what was opened by the browser
   */
  async openLinkWithTargetBlank(currentPage, selector, waitForNavigation = true) {
    const [newPage] = await Promise.all([
      new Promise(resolve => this.page.once('popup', resolve)),
      currentPage.click(selector),
    ]);
    if (waitForNavigation) await newPage.waitForNavigation({waitUntil: 'networkidle0'});
    await newPage.waitForSelector('body', {visible: true});
    return newPage;
  }

  /**
   * 等待选择器，然后单击
   * @param selector, element to check
   * @param timeout, wait timeout
   * @return {Promise<void>}
   */
  async waitForSelectorAndClick(selector, timeout = 5000) {
    await this.waitForVisibleSelector(selector, timeout);
    await this.page.click(selector);
  }

  /**
   * 重新加载实际浏览器页面
   * @return {Promise<void>}
   */
  async reloadPage() {
    await this.page.reload({waitUntil: 'networkidle0'});
  }

  /**
   * 从输入中删除现有文本然后设置一个值
   * @param selector, input
   * @param value, value to set in the input
   * @return {Promise<void>}
   */
  async setValue(selector, value) {
    await this.waitForSelectorAndClick(selector);
    await this.page.click(selector, {clickCount: 3});
    // Delete text from input before typing
    await this.page.keyboard.press('Delete');
    await this.page.type(selector, value);
  }

  /**
   * 接受或解除导航器对话框
   * @param accept
   * @return {Promise<void>}
   */
  async dialogListener(accept = true) {
    this.page.once('dialog', (dialog) => {
      if (accept) dialog.accept();
      else dialog.dismiss();
    });
  }

  /**
   * 关闭实际标签并转到另一个选项卡（如果需要）
   * @param browser
   * @param tabId
   * @return {Promise<void>}
   */
  async closePage(browser, tabId = -1) {
    await this.page.close();
    if (tabId !== -1) {
      this.page = (await browser.pages())[tabId];
      await this.page.bringToFront();
    }
    return this.page;
  }

  /**
   * 滚动到元素
   * @param selector
   * @return {Promise<void>}
   */
  async scrollTo(selector) {
    await this.page.$eval(selector, el => el.scrollIntoView());
  }


  /**
   * 通过可见文本选择选择选项
   * @param selector, id选择器
   * @param textValue, text in option to select
   */
  async selectByVisibleText(selector, textValue) {
    let found = false;
    let options = await this.page.$$eval(
      `${selector} option`,
      all => all.map(
        option => ({
          textContent: option.textContent,
          value: option.value,
        })),
    );
    options = await options.filter(option => textValue === option.textContent);
    if (options.length !== 0) {
      const elementValue = await options[0].value;
      await this.page.select(selector, elementValue);
      found = true;
    }
    if (!found) throw new Error(`${textValue} 没有找到选择的元素`);
  }

  /**
   * 从文本获取一个数字
   * @param selector
   * @param timeout
   * @return integer
   */
  async getNumberFromText(selector, timeout = 0) {
    await this.page.waitFor(timeout);
    const text = await this.getTextContent(selector);
    const number = /\d+/g.exec(text).toString();
    return parseInt(number, 10);
  }

  /**
   * 转到页面并等待导航
   * @param selector
   * @return {Promise<void>}
   */
  async clickAndWaitForNavigation(selector) {
    await Promise.all([
      this.page.click(selector),
      this.page.waitForNavigation({waitUntil: 'networkidle0'}),
    ]);
  }

  /**
   * 替换字符串中的所有出现
   * @param str, 字符串更新
   * @param find, what to replace
   * @param replace, value to replace with
   * @return {Promise<*>}
   */
  async replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  /**
   * 导航到历史上的上一页
   * @param waitUntil
   * @return {Promise<void>}
   */
  async goToPreviousPage(waitUntil = 'networkidle0') {
    await this.page.goBack({waitUntil});
  }

  /**
   * 检查是否选择了复选框
   * @param selector
   * @return {Promise<boolean>}
   */
  async isCheckboxSelected(selector) {
    return this.page.$eval(selector, el => el.checked);
  }

  /**
   * 选择，取消选择复选框
   * @param checkboxSelector, selector of checkbox
   * @param valueWanted, true if we want to select checkBox, else otherwise
   * @return {Promise<void>}
   */
  async changeCheckboxValue(checkboxSelector, valueWanted = true) {
    if (valueWanted !== (await this.isCheckboxSelected(checkboxSelector))) {
      await this.page.click(checkboxSelector);
    }
  }

  /**
   * 排序字符串或数字数组
   * @param arrayToSort
   * @param isFloat
   * @return {Promise<*>}
   */
  async sortArray(arrayToSort, isFloat = false) {
    if (isFloat) {
      return arrayToSort.sort((a, b) => a - b);
    }
    return arrayToSort.sort((a, b) => a.localeCompare(b));
  }

  /**
   * 拖放元素
   * @param selectorToDrag
   * @param selectorWhereToDrop
   * @return {Promise<void>}
   */
  async dragAndDrop(selectorToDrag, selectorWhereToDrop) {
    await this.page.hover(selectorToDrag);
    await this.page.mouse.down();
    await this.page.hover(selectorWhereToDrop);
    await this.page.mouse.up();
  }

  /**
   * 大写单词的第一个字符
   * @param word
   * @returns {string}
   */
  uppercaseFirstCharacter(word) {
    return `${word[0].toUpperCase()}${word.slice(1)}`;
  }
};
```