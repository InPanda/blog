---
title: Vue组件
date: 2021-06-21
tags:
 - Vue组件
categories: 
 - Vue
---
---

### 1.动态侧边栏
```vue
<template>
  <div class="menu-left" :class="{'menu-left1':isCollapse}">
    <div class="menu-list">
      <el-menu :collapse="isCollapse"
      v-model="activePath"
       router @select="handleSelect" :unique-opened="true"
       :default-active="activePath">
        <template v-for="(item,index) in routerList">
          <el-menu-item
            v-if="!item.children||item.children.length===0"
            :index="item.gndz"
            :key="index"
          >
            <img class="mr_icon" :src="item.icon" alt style="float:left;margin:17px 10px 0 0" />
            <img
              class="hover_icon"
              :src="item.iconHover"
              alt
              style="float:left;margin:17px 10px 0 0"
            />
            <span slot="title">{{item.gnxsmc}}</span>
          </el-menu-item>
          <el-submenu v-if="item.children&&item.children.length>0" :index="item.gndz" :key="index">
            <template slot="title">
              <img class="mr_icon" :src="item.icon" alt style="float:left;margin:17px 10px 0 0" />
              <img
                class="hover_icon"
                :src="item.iconHover"
                alt
                style="float:left;margin:17px 10px 0 0"
              />
              <span slot="title">{{item.gnxsmc}}</span>
            </template>
            <el-menu-item
              v-for="(el,tindex) in item.children"
              :key="tindex"
              :index="el.gndz"
            ><span slot="title">{{el.gnxsmc}}</span></el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </div>
    <div class="menu-bottom">
      <span @click="handleClick" class="meau-btn" :class="{'meau-btn1':isCollapse}"
      style="color: #fff;font-size: 28px;float: right;margin: 13px 22px;" ></span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "leftmenu",
  data() {
    return {
      routerList: [],
      isCollapse: false,
      activePath:''
    };
  },
  mounted() {
    this.routerList = this.$setTree(this.gnqx,null,'fgnbm','gnbm')
    this.activePath = this.$route.path;
    // console.log(this.routerList)
    for(let item of this.routerList){
      item.icon = require(`../pages/img/${item.gnbm}.png`)
      item.iconHover = require(`../pages/img/${item.gnbm}-.png`)
    }
  },
  components: {},
  computed: {
    ...mapState(['gnqx'])
  },
  methods: {
    handleSelect() {},
    handleClick() {
      this.isCollapse = !this.isCollapse;
      this.$emit("handleClick", this.isCollapse);
    }
  }
};
</script>
<style lang="scss">
.el-menu--vertical{
  left: 66px!important;
}
.el-menu--collapse{
    width: 70px!important;
  }
.el-menu {
  background-color: #b2d6f8!important;
  border-right: none;

  .el-submenu__title:focus, .el-submenu__title:hover{
    background-color:#9fcbf4!important
  }
  .mr_icon {
    display: block;
  }
  .hover_icon {
    display: none;
  }
  .el-menu-item {
    font-size: 16px;
    color: #1d5c97;
    text-align: left;
    // border-bottom: 1px dashed #178cf3;
  }
  .el-submenu__title {
    font-size: 16px;
    color: #1d5c97;
    text-align: left;
    // border-bottom: 1px dashed #178cf3;
  }
  .el-submenu {
    .el-menu-item {
      font-size: 15px;
      background-color: #b2d6f8;
      border-bottom: none;
      padding-left: 56px!important;
    }
  }
  .el-submenu__icon-arrow {
    color: #1d5c97;
    font-size: 14px;
  }
  .el-menu-item:focus,
  .el-menu-item:hover {
    background-color: #9fcbf4!important;
    color: #1d5c97;
    // .mr_icon {
    //   display: none;
    // }
    // .hover_icon {
    //   display: block;
    // }
  }
  .el-menu-item.is-active {
    background-color: #3f9cf4!important;
    color: #fff!important;
    .mr_icon {
      display: none;
    }
    .hover_icon {
      display: block;
    }
  }
  .el-submenu__title:hover {
    background-color: #9fcbf4!important;
    color: #1d5c97;
    // .mr_icon {
    //   display: none;
    // }
    // .hover_icon {
    //   display: block;
    // }
  }

}
.el-menu--popup{
    background-color: #9fcbf4!important;
    .el-menu-item{
      width: calc(100% - 20px);
      margin: 10px;
      color: #1d5c97!important;
      height: 50px!important;
      line-height: 50px!important;
      text-align: center!important;
    }
    .el-menu-item:hover{
      background-color: #76b3e6!important;
      color: #fff!important;
    }
  }
</style>
<style scoped lang="scss">
.menu-left {
  width: 220px;
  height: 100%;
  float: left;
  background: #b2d6f8;
  .menu-list {
    width: 100%;
    height: calc(100% - 50px);
    float: left;
    // border-top: 1px solid #b2d6f8;
    overflow: auto;
  }
  .menu-list1 {
    height: calc(100% - 127px);
  }
  .menu-bottom {
    width: 100%;
    height: 50px;
    float: left;
    background: #9ccbf8;
    text-align: right;
    .meau-btn {
      cursor: pointer;
      width: 25px;
      height: 25px;
      background: url('/static/images/caidan/dhyc_1.png');
    }
    .meau-btn:hover{
      background: url('/static/images/caidan/dhyc_2.png');
    }
    .meau-btn1 {
      background: url('/static/images/caidan/dhzk_1.png');
    }
    .meau-btn1:hover{
      background: url('/static/images/caidan/dhzk_2.png');
    }
  }
}
.menu-left1 {
  width: 70px;
}
</style>
```
### 2.下拉树
```vue
<template>
  <div
    class="treeSelect_div"
    :style="{ width: width }"
    :class="multiple ? 'treeSelect_div_multiple' : 'treeSelect_div_radio'"
  >
    <el-popover
      v-model="isShowSelect"
      placement="bottom"
      trigger="manual"
      :width="popoverWidth"
      :popper-class="popperClass"
     >
      <a-input-search
        v-if="remoteSearch && !bFilterResult && filterText"
        v-model="filterText"
        class="min_width150"
        placeholder="输入关键字进行过滤"
        :style="{ width: selectWidth }"
        @search="onSearch"
      >
        <a-button
          slot="enterButton"
          class="searchBtn"
          type="primary"
          icon="search"
          style="height: 34px"
        >
        </a-button>
      </a-input-search>
      <div v-else>
        <el-checkbox
          v-if="multiple && showAllSelection"
          v-model="allSelection"
          :disabled="!data || data.length == 0"
          style="margin: 0 10px;"
          @change="allSelectionFun"
          >全选</el-checkbox
        >
        <a-input
          v-model="filterText"
          class="min_width150"
          :style="{
            width:
              multiple && showAllSelection
                ? `calc(${selectWidth} - 90px)`
                : popoverWidth?popoverWidth-2+'px':selectWidth
          }"
          placeholder="输入关键字进行过滤"
        ></a-input>
      </div>
      <div
        :style="style"
        :class="{
          min_width150: true,
          min_width228: multiple && showAllSelection
        }"
      >
        <el-tree
          v-if="
            suggestKeys &&
              suggestKeys.length > 0 &&
              suggestTree &&
              suggestTree.length > 0 &&
              !filterText
          "
          ref="suggest_tree"
          class="suggest_tree"
          :data="suggestTree"
          :props="suggestProps"
          :show-checkbox="multiple"
          :node-key="nodeKey"
          :check-strictly="true"
          :default-expand-all="true"
          :expand-on-click-node="expandOnClickNode"
          :check-on-click-node="multiple"
          :highlight-current="false"
          @node-click="handleNodeClick1"
          @check-change="handleCheckChange1"
        ></el-tree>
        <el-tree
          ref="treeSelect_tree"
          class="treeSelect_tree"
          :data="data"
          :props="defaultProps"
          :show-checkbox="multiple"
          :node-key="nodeKey"
          :check-strictly="checkStrictly"
          :default-expand-all="defaultExpandAll"
          :default-expanded-keys="defaultExpandedKeys"
          :expand-on-click-node="expandOnClickNode"
          :check-on-click-node="multiple"
          :filter-node-method="treeFilterNode"
          :render-content="renderContentFun"
          :highlight-current="true"
          @node-click="handleNodeClick"
          @check-change="handleCheckChange"
        ></el-tree>
      </div>
      <el-select
        slot="reference"
        ref="treeSelect_select"
        v-model="selectValue"
        :placeholder="placeholder"
        :size="size"
        :disabled="readonly || disabled"
        :multiple="multiple"
        clearable
        :collapse-tags="collapseTags"
        class="treeSelect_select"
        :class="{
          treeSelect_select_expand: isShowSelect,
          tags__collapse_tags: collapseTags,
          treeSelect_select_disabled: disabled,
          treeSelect_select_readonly: !disabled && readonly
        }"
        @click.native="selectClick"
        @remove-tag="removeSelectedNodes"
        @clear="treeClear"
        @change="changeSelectedNodes"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: 'TreeSelect',
  model: {
    prop: 'treeSelectValue',
    event: 'returnBack'
  },
  props: {
    popperClass:{
      type:String,
      default(){
        return 'treeSelect_popover'
      }
    },
    // 树结构数据
    data: {
      type: Array,
      default() {
        return []
      }
    },
    defaultProps: {
      type: Object,
      default() {
        return {}
      }
    },
    // 配置是否可多选
    multiple: {
      type: Boolean,
      default() {
        return false
      }
    },
    // 配置是否可清空选择
    clearable: {
      type: Boolean,
      default() {
        return true
      }
    },
    // 配置多选时是否将选中值按文字的形式展示
    collapseTags: {
      type: Boolean,
      default() {
        return true
      }
    },
    // 配置多选并且遵循父子不互相关联时是否打开批量反选
    batchReverseElection: {
      type: Boolean,
      default() {
        return false
      }
    },
    nodeKey: {
      type: String,
      default() {
        return 'id'
      }
    },
    // 显示复选框情况下，是否严格遵循父子不互相关联
    checkStrictly: {
      type: Boolean,
      default() {
        return false
      }
    },
    expandOnClickNode: {
      type: Boolean,
      default() {
        return true
      }
    },
    // 建议数据key数组
    suggestKeys: {
      type: Array,
      default() {
        return []
      }
    },
    size: {
      type: String,
      default() {
        return 'small'
      }
    },
    width: {
      default() {
        return '195px'
      }
    },
    popoverWidth:{
      default(){
        return ""
      }
    },
    height: {
      default() {
        return '240px'
      }
    },
    // 禁用组件
    disabled: {
      type: Boolean,
      default() {
        return false
      }
    },
    // 组件只读
    readonly: {
      type: Boolean,
      default() {
        return false
      }
    },
    // 是否默认展开所有节点
    defaultExpandAll: {
      type: Boolean,
      default() {
        return false
      }
    },
    // 默认展开的节点的 key 的数组
    defaultExpandedKeys: {
      type: Array,
      default() {
        return []
      }
    },
    // 是否支持远程检索
    remoteSearch: {
      type: Boolean,
      default() {
        return false
      }
    },
    // 远程检索按钮文字
    remoteSearchText: {
      type: String,
      default() {
        return '检索更多'
      }
    },
    // 自定义节点
    renderContent: {
      type: Function
    },
    // 远程数据源
    remoteData: {
      type: Array,
      default() {
        return []
      }
    },
    // 请选择
    placeholder: {
      type: String,
      default() {
        return '请选择'
      }
    },
    // 展示全选按钮
    showAllSelection: {
      type: Boolean,
      default() {
        return false
      }
    },
    treeSelectValue: {
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      isShowSelect: false, // 是否显示树状选择器
      options: [],
      selectValue: '', // 选中的节点
      selectClientWidth: '',
      checkedIds: [],
      checkedData: [],
      filterText: '',
      suggestTree: [],
      suggestProps: {},
      bFilterResult: true, // 检索是否取到值
      allSelection: false // 是否全选
    }
  },
  computed: {
    style() {
      return (
        'width: ' +
        (this.popoverWidth ?this.popoverWidth+'px':this.selectWidth) +
        ';height:' +
        this.height +
        ';overflow: auto;padding: 10px;'
      )
    },
    selectWidth() {
      return typeof this.width == 'string'
        ? this.width.indexOf('%') && this.selectClientWidth
          ? this.selectClientWidth
          : this.width
        : this.width + 'px'
    }
  },
  watch: {
    isShowSelect(val) {
      if (this.multiple) {
        this.checkedIds = this.$refs.treeSelect_tree.getCheckedKeys() // 所有被选中的节点的 key 所组成的数组数据
        this.checkedData = this.$refs.treeSelect_tree.getCheckedNodes() // 所有被选中的节点所组成的数组数据
      } else {
        this.checkedIds = this.$refs.treeSelect_tree.getCurrentKey()
        this.checkedData = this.$refs.treeSelect_tree.getCurrentNode()
      }
      if (val) {
        this.$emit('popoverShow', this.checkedIds, this.checkedData)
      } else {
        this.$emit('popoverHide', this.checkedIds, this.checkedData)
      }
      // 隐藏select自带的下拉框
      const popover = document.getElementsByClassName('treeSelect_popover')
      for (let i = 0; i < popover.length; i++) {
        if (!popover[i].style.display) {
          popover[i].style.display = 'none'
        }
      }
      this.selectClientWidth =
        this.$refs.treeSelect_select.$el.clientWidth - 2 + 'px'
      this.$refs.treeSelect_select.blur()
      this.filterText = ''
    },
    // 双向绑定值发生改变
    treeSelectValue(val, oldValue) {
      if (
        JSON.stringify(val) === JSON.stringify(oldValue) ||
        this.data.length == 0
      ) {
        return
      }
      this.init()
    },
    data(data) {
      this.init()
    },
    filterText(val) {
      this.bFilterResult = false
      this.$refs.treeSelect_tree.filter(val)
    },
    selectValue(val, oldValue) {
      if (oldValue === val) {
        return
      }
      if (!oldValue || !val) {
        // 抛出change
        this.emitChange()
        return
      }
      if (val instanceof Array) {
        if (oldValue.length === val.length) {
          for (let i = 0; i < oldValue.length; i++) {
            const tmp = oldValue[i]
            if (val.indexOf(tmp) < 0) {
              // 抛出change
              this.emitChange()
              break
            }
          }
        } else {
          this.emitChange()
        }
      } else {
        this.emitChange()
      }
    },
    suggestKeys(val) {
      if (!val) return
      this.initCheckedData()
    },
    // 监听远程数据源
    remoteData(arr) {}
  },
  mounted() {
    if (this.data.length > 0) {
      this.init()
    }
    // this.initCheckedData()
    window.addEventListener('click', this.popoverHideAction, false)
  },
  beforeDestroy() {
    window.removeEventListener('click', this.popoverHideAction, false)
  },
  methods: {
    // 收起下拉框
    popoverHideAction(e) {
      if (e.path[0].className !== 'treeSelect_div') {
        this.$emit('blurSelectedNodes',e)
        this.isShowSelect = false
      }
    },
    // 展开与收起
    selectClick() {
      if (!this.disabled && !this.readonly) {
        this.isShowSelect = !this.isShowSelect
      }
    },
    init() {
      // 多选
      this.$nextTick(() => {
        // 常用数据源初始化
        this.suggestInit()
        if (this.multiple) {
          if (
            this.treeSelectValue &&
            Array.isArray(this.treeSelectValue) &&
            this.treeSelectValue.length > 0
          ) {
            // 设置树当前勾选
            this.checkCurrentNodes(this.treeSelectValue)
          } else {
            // 清空勾选
            this.clear()
          }
        } else {
          // 单选
          if (this.treeSelectValue && typeof this.treeSelectValue == 'string') {
            // 设置树当前选中
            this.checkCurrentNode(this.treeSelectValue)
          } else {
            // 清空选中
            this.clear()
          }
        }
      })
    },
    // 常用数据源初始化
    suggestInit() {
      const suggestArr = []
      if (this.suggestKeys && this.suggestKeys.length > 0) {
        this.suggestProps = { ...this.defaultProps }
        this.suggestProps.disabled = this.disabledFn
        this.suggestKeys.forEach(e => {
          const node = this.$refs.treeSelect_tree.getNode(e)
          if (node) {
            const newNode = JSON.parse(JSON.stringify(node.data))
            newNode[this.defaultProps.children] = []
            newNode[this.defaultProps.pid] = '000'
            suggestArr.push(newNode)
          }
        })
        // 如果找到了建议数据就添加一个'常用'父节点
        if (suggestArr.length !== 0) {
          const obj = {}
          obj[this.defaultProps.id] = '000'
          obj[this.defaultProps.pid] = null
          obj[this.defaultProps.label] = '常用'
          obj.common = true
          suggestArr.push(obj)
        }
        if (suggestArr && suggestArr.length > 0) {
          this.suggestTree = this.$listToTree(
            suggestArr,
            this.defaultProps.id,
            this.defaultProps.pid
          )
        }
      }
    },
    // 设置树当前选中  单选
    checkCurrentNode(value) {
      // 获取当前选中节点的node
      const node = this.$refs.treeSelect_tree.getNode(value)
      if (node) {
        if (!node.disabled) {
          this.$refs.treeSelect_tree.setCurrentKey(value)
          // 设置下拉框的option
          this.setSelectOption(node)
        } else {
          this.$emit('returnBack', this.selectValue)
        }
      }
    },
    // 设置树当前勾选  多选
    checkCurrentNodes(checkedKeys) {
      // 获取当前选中节点的node
      this.$refs.treeSelect_tree.setCheckedKeys([])
      checkedKeys.forEach(e => {
        const node = this.$refs.treeSelect_tree.getNode(e)
        if (node) {
          if (!node.disabled) {
            this.$refs.treeSelect_tree.setChecked(e, true, !this.checkStrictly)
          }
        }
      })
      if (this.$refs.suggest_tree)
        this.$refs.suggest_tree.setCheckedKeys(checkedKeys)
      this.$nextTick(() => {
        this.handleCheckChange()
        this.handleCheckChange1()
      })
    },
    // 单选时点击tree节点，设置select选项
    setSelectOption(node) {
      if (node) {
        const tmpMap = {}
        tmpMap.value = node.key
        tmpMap.label = node.label ? node.label : ''
        this.options = []
        this.options.push(tmpMap)
        // 设置下拉框的值
        this.$nextTick(() => {
          this.selectValue = node.key
          this.$emit('returnBack', this.selectValue)
        })
      }
    },
    // 单选,清空select输入框的回调
    treeClear() {
      // 单选，清空选中
      this.clear()
      // 抛出clear
      this.$emit('clear')
    },
    // 选中值变化时抛出change事件，返回选中id值和选中节点数据
    emitChange() {
      const checkedData = this.multiple
        ? this.$refs.treeSelect_tree.getCheckedNodes()
        : this.$refs.treeSelect_tree.getCurrentNode()
        ? this.$refs.treeSelect_tree.getCurrentNode()
        : ''
      this.$emit('change', this.selectValue, checkedData)
    },
    // 设置选中节点数据
    setCurrentNode(data) {
      this.$refs.treeSelect_tree.setCurrentNode(data)
    },
    // 单选，节点被点击时的回调,返回被点击的节点数据
    handleNodeClick(data, node) {
      if (!node.disabled) {
        if (!this.multiple) {
          this.setSelectOption(node)
          this.isShowSelect = !this.isShowSelect
        }
        this.$emit('node-click', data, node)
      }
    },
    // 单选，节点被点击时的回调,返回被点击的节点数据(建议数据树)
    handleNodeClick1(data, node, event) {
      if (this.$refs.suggest_tree && !data.common) {
        const suggestNode = this.$refs.suggest_tree.getCurrentNode() // 所有被选中的节点的 key 所组成的数组数据
        this.$refs.treeSelect_tree.setCurrentNode(suggestNode)
        this.handleNodeClick(data, node, event, suggestNode)
      }
    },
    // 多选，节点勾选状态发生变化时的回调
    handleCheckChange(data, checked, indeterminate) {
      const checkedKeys = this.$refs.treeSelect_tree.getCheckedKeys() // 所有被选中的节点的 key 所组成的数组数据
      if (this.$refs.suggest_tree)
        this.$refs.suggest_tree.setCheckedKeys(checkedKeys) // 所有被选中的节点对应的node
      this.options = []
      checkedKeys.forEach(item => {
        const node = this.$refs.treeSelect_tree.getNode(item) // 所有被选中的节点对应的node
        if (node && !node.disabled) {
          const tmpMap = {}
          tmpMap.value = node.key
          tmpMap.label = node.label
          this.options.push(tmpMap)
        }
      })
      this.$nextTick(() => {
        this.selectValue = this.options.map(item => {
          return item.value
        })
        this.$emit('returnBack', this.selectValue)
      })
      // this.$emit('change', this.selectValue)
    },
    // 多选，节点勾选状态发生变化时的回调
    handleCheckChange1() {
      if (this.$refs.suggest_tree) {
        const checkedKeys = this.$refs.suggest_tree.getCheckedKeys() // 所有被选中的节点的 key 所组成的数组数据
        checkedKeys.forEach(e => {
          const node = this.$refs.treeSelect_tree.getNode(e)
          if (node) {
            if (!node.disabled) {
              this.$refs.treeSelect_tree.setChecked(
                e,
                true,
                !this.checkStrictly
              )
            }
          }
        })
      }
      // this.$emit('change', this.selectValue)
    },
    // 获取当前下拉树的节点node数据（传数据源data||key值）
    getNode(data) {
      return this.$refs.treeSelect_tree.getNode(data)
    },
    // 获取当前选中节点（单选{}多选[]）
    getCurrentNode() {
      let checkedData
      if (this.multiple) {
        // 所有被选中的节点所组成的数组数据
        checkedData = this.$refs.treeSelect_tree
          .getCheckedNodes()
          .filter(item => {
            const node = this.$refs.treeSelect_tree.getNode(item)
            if (node && !node.disabled) {
              return item
            }
          })
      } else {
        checkedData = this.$refs.treeSelect_tree.getCurrentNode()
      }
      return checkedData
    },
    // 若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点所组成的数组
    getHalfCheckedNodes() {
      return this.$refs.treeSelect_tree.getHalfCheckedNodes()
    },
    // 若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点的 key 所组成的数组
    getHalfCheckedKeys() {
      return this.$refs.treeSelect_tree.getHalfCheckedKeys()
    },
    // 清空选中
    clear() {
      if (this.multiple) {
        this.$refs.treeSelect_tree.setCheckedKeys([])
        this.$nextTick(() => {
          this.handleCheckChange()
          this.handleCheckChange1()
        })
      } else {
        if (this.$refs.treeSelect_tree.getCurrentNode()) {
          this.selectValue = this.multiple ? [] : ''
          this.$emit('returnBack', this.selectValue)
          this.$refs.treeSelect_tree.setCurrentKey(null)
        }
      }
    },
    // 设置选中节点key值
    setCurrentKey(key) {
      if (Array.isArray(key) && key.length > 0) {
        this.checkCurrentNodes(key)
      } else {
        this.checkCurrentNode(key)
      }
    },
    // 全选按钮方法
    allSelectionFun() {
      // 递归
      const recursion = (data, arr) => {
        data.forEach(item => {
          const node = this.$refs.treeSelect_tree.getNode(item)
          if (node && !node.disabled) {
            arr.push(node.key)
          }
          if (item.children && item.children.length)
            recursion(item.children, arr)
        })
      }
      if (this.allSelection) {
        // 全选
        if (this.checkStrictly) {
          // 父子不关联
          const arr = []
          recursion(this.data, arr)
          this.setCurrentKey(arr)
        } else {
          // 父子相关联
          this.$refs.treeSelect_tree.setCheckedNodes(this.data)
        }
      } else {
        // 反选
        this.clear()
      }
    },
    // 自定义节点
    renderContentFun(h, { node, data, store }) {
      if (this.renderContent) {
        return this.renderContent(h, { node, data, store })
      } else if (
        this.batchReverseElection &&
        this.multiple &&
        this.checkStrictly
      ) {
        // 批量反选功能
        return (
          <span class="el-tree-node__label" title={node.label}>
            <span>{node.label}</span>
            {node.childNodes && node.childNodes.length ? (
              <button
                class="btn_mini primary plfx_btn"
                on-click={event => {
                  this.batchReverseElectionFun(event, data, node)
                }}
              >
                批量反选
              </button>
            ) : (
              ''
            )}
          </span>
        )
      } else {
        return (
          <span class="el-tree-node__label" title={node.label} on-dblclick={()=>this.nodeDbclick(data, node)}>
            {node.label}
          </span>
        )
      }
    },
    nodeDbclick(data, node){
      this.$emit('node-dbclick',data, node)
    },
    // 批量反选按钮功能
    batchReverseElectionFun(event, data, node) {
      event.stopPropagation()
      const recursion = (arr, checked) => {
        if (arr && arr.length > 0) {
          arr.forEach(item => {
            this.$refs.treeSelect_tree.setChecked(item.data, checked)
            recursion(item.childNodes, checked)
          })
        }
      }
      if (node.checked) {
        this.$refs.treeSelect_tree.setChecked(data, false)
        // 取消勾选
        recursion(node.childNodes, false)
      } else {
        this.$refs.treeSelect_tree.setChecked(data, true)
        // 全部勾选
        recursion(node.childNodes, true)
      }
    }
    </script>
<style scoped lang="scss">
@import "../assets/variable.scss";
@mixin bgImage($url) {
  background-image: url('~static/images/'+ $url);
  [data-theme="red"] & {
    background-image: url('~static/images/'+ $url);
  }
}
/* 色值 */
@mixin css($attribute, $color) {
  #{$attribute}: $color;
  [data-theme="red"] & {
    @if ($color==$essential_color){
      #{$attribute}: $essential_color1;
    }
  }
}
.suggestP {
  line-height: 30px;
  @include css(font-size, $fontsize_default);
  text-indent: 20px;
}
.min_width150 {
  min-width: 148px;
}
.min_width228 {
  min-width: 228px;
}
</style>

<style lang="scss">
@import "../assets/variable.scss";
@mixin bgImage($url) {
  background-image: url('~static/images/'+ $url);
  [data-theme="red"] & {
    background-image: url('~static/images/'+ $url);
  }
}
/* 色值 */
@mixin css($attribute, $color) {
  #{$attribute}: $color;
  [data-theme="red"] & {
    @if ($color==$essential_color){
      #{$attribute}: $essential_color1;
    }
  }
}
.treeSelect_div {
  .treeSelect_mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    z-index: 11;
  }
  .treeSelect_select {
    width: 100%;
    z-index: 111;
  }
  // .el-input.is-disabled .el-input__inner {
  //   @include css(border-color, $readonly_color);
  // }
}
.treeSelect_popover {
  @include css(border, 1px solid $border_color);
  padding: 0;
  .treeSelect_tree {
    width: 100%;
    border-radius: 3px;
    padding: 0 !important;
    .el-tree-node {
      .el-tree-node__content {
        position: relative;
        .plfx_btn {
          font-size: 12px;
          position: absolute;
          top: 3px;
          right: 3px;
          display: none;
        }
        &:hover {
          > .el-tree-node__label > .plfx_btn {
            display: block;
          }
        }
      }
    }
  }
  .suggest_tree {
    padding: 0px;
    overflow: auto;
    // @include css(border-bottom, 1px solid $border_color);
  }
  .ant-input {
    border: none;
    @include css(border-bottom, 1px solid $border_color);
    &:hover,
    &:focus {
      border: none;
      @include css(border-bottom, 1px solid $border_color);
    }
  }
  .searchBtn {
    height: 25px !important;
    line-height: 25px;
    min-width: 70px !important;
    padding: 0 5px;
    @include css(background, $default_border_color!important);
    @include css(border, 1px solid $border_color!important);
    border-radius: 3px !important;
    box-shadow: none;
    text-shadow: none;
    color: #5e7bad;
    margin-right: 5px;
  }
}
.treeSelect_popover[x-placement^='bottom'] {
  margin-top: 6px;
  .popper__arrow {
    display: none;
  }
}
</style>
```
####  How to use 'tree-select':

```vue
<tree-select
 ref="tree1"
 height="260px"                // 下拉框中树形高度
 width="195px"                 // 下拉框中树形宽度 (可以给百分比，也可以写calc)
 disabled                      // 禁用组件
 placeholder="请输入"          // 输入框占位文本（默认为"请输入"）
 size="small"                  // 输入框的尺寸: medium/small/mini 默认small
 :data="treeData"              // 树结构的数据 (和element树用法一样)
 :default-props="treeProps"    // 树结构的props (和element树用法一样)
 :default-expand-all="false"   // 是否默认展开所有节点 (默认false)
 :default-expanded-keys="[]"   // 默认展开的节点的 key 的数组
 multiple                      // 多选 (默认为false)
 expand-on-click-node          // 是否在点击节点的时候展开或者收缩节点 (默认为false)
 :clearable="true"             // 可清空选择 (默认为true)
 :collapse-tags="true"         // 多选时将选中值按文字的形式展示 (默认为false)
 :check-strictly="false"       // 多选时，严格遵循父子不互相关联 (默认为false)
 node-key="NodeId"             // -node-key-id-
 :checked-keys="defaultCheckedKeys"  // 传递默认选中的节点key组成的数组
 remoteSearch                  // 远程检索 (默认为false)
 @clear="clear"                      // 清空事件回调
 @remoteSearch="searchComplete"    // 适用于远程检索
 @change="change"                    // 事件有两个参数：第一个是所有选中的节点ID，第二个是所有选中的节点数据
 @popoverHide="popoverHide">         // 事件有两个参数：第一个是所有选中的节点ID，第二个是所有选中的节点数据
</tree-select>

this.$refs.tree1.getNode(key||data)   // 获取当前选中节点数据
this.$refs.tree1.getCurrentNode()   // 获取当前选中节点数据
this.$refs.tree1.setCheckedNodes(arr)   // 设置勾选节点数据的数组
this.$refs.tree1.setCheckedKeys(arr)   // 设置勾选节点key值的数组
```

### 3、折叠面板递归组件

``` vue
<template>
  <div style="width: 100%;height: 100%;float: left">


    <el-collapse v-model="activeNames" v-if="arrayList[0]&&arrayList[0].Flag==='1'" accordion>
      <el-collapse-item v-for="(item,index) in arrayList[0].children" :key="index" :name="index" class="grandfather">
        <template slot="title">
          <i style="
          content:'';
          height: 16px;
          width: 5px;
          background: #4084f0;
          margin:0 10px;
"></i>
          <span  @click.stop="recieve(item)" style="font-weight: bold;color:#303133">{{item.NodeText}}</span>
        </template>
        <template v-if="item.children&&item.children.length>0">
          <person-item @recieve="recieve" :arrayList="item.children"></person-item>
        </template>
      </el-collapse-item>
    </el-collapse>

    <div v-else v-for="(item,index) in arrayList" >
      <div v-if="item.Flag==='3'" style="width: 100%;height: 30px;float: left;margin:0 10px 0 0;padding:5px 15px;">
        <span style="padding: 5px 10px;background-color: #82a6df;color: #fff;float: left;cursor:pointer" @click="recieve(item)">
          {{item.NodeText}}
        </span>
        </div>
      <div v-if="item.Flag==='4'" style="float: left;margin:18px 20px 10px 20px;"  @click="recieve(item)">
       <span style="background-color: #ebf4fe;color: #4f5e7b;float: left;padding: 7px 16px;border:1px solid #c4dcf4;cursor:pointer">
          {{item.NodeText}}
       </span>
      </div>
      <template v-if="item.children&&item.children.length>0">
        <person-item @recieve="recieve" :arrayList="item.children"></person-item>
      </template>
    </div>
  </div>

</template>

<script>
    export default {
      name: "personItem",
      data(){
          return {
            activeNames:''
          }
      },
      props:['arrayList'],
      mounted() {
      },
      methods:{
        recieve(data){
          this.$emit('recieve',data)
        }
      }
    }
</script>

<style scoped>
/*.el-collapse-item__header::after{
  content: " ";
  height: 16px;
  width: 5px;
  background: #4084f0;
}*/
  .grandfather{
    font-size: 20px;
    color: #000000;
    font-weight: bolder;
  }
</style>

```
