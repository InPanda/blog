module.exports = {
  "title": "wangtao\'s blog",
  "description": "记录一些前端知识",
  "dest": "./dist",
  "base": '/blog/',
  "repo":"https://github.com/InPanda/blog.git",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      },
    ],
    ["meta", { "name": "keywords", "content": "前端,js,css,puppeteer接口识别,Node.js" }],
    ['meta', { name: 'author', content: '王涛' }],
  ],
  "theme": "reco",
  "themeConfig": {
    '/zh/': {
      sidebar: 'auto'
    },
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "联系我",
        "icon": "reco-message",
        "items": [
          {
            "text": "Github",
            "link": "https://github.com/InPanda",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "边城乌苏",
        "desc": "人间有味是清欢",
        "link": "https://github.com/InPanda"
      },
      {
        "title": "my gitee",
        "desc": "人间有味是清欢",
        "link": "https://gitee.com/borderWusu"
      },
      {
        "title": "CSS-idea",
        "desc": "一些CSS特效及思路",
        "link": "https://inpanda.github.io/CSS-IDEA/"
      },
      {
        "title": "ByteDance-panjiachen",
        "desc": "字节跳动Front-end",
        "link": "https://panjiachen.github.io/awesome-bookmarks/repository/"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "wangtao",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  }
}