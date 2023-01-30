(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{474:function(t,e,s){"use strict";s.r(e);var a=s(20),n=function(t){t.options.__data__block__={flowchart_382ee14a:"stage1=>operation: palette.styl\nstage2=>operation: 默认 app 样式\nstage3=>operation: index.styl\n\nstage1->stage2->stage3"}},r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"faq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),s("h2",{attrs:{id:"为什么不能把-palette-styl-和-index-styl-合并到一个-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么不能把-palette-styl-和-index-styl-合并到一个-api"}},[t._v("#")]),t._v(" 为什么不能把 "),s("code",[t._v("palette.styl")]),t._v(" 和 "),s("code",[t._v("index.styl")]),t._v(" 合并到一个 API?")]),t._v(" "),s("p",[s("code",[t._v("palete.styl")]),t._v(" 负责全局颜色设置。在编译期间，主题颜色常量应该首先由预处理器解析，然后应用于全局上下文。")]),t._v(" "),s("p",[t._v("但对于 "),s("code",[t._v("index.styl")]),t._v("，它的工作是重写应用的默认样式。根据 CSS 的优先级原则，后一种样式具有更高的优先级，因此应该在 CSS 文件的末尾生成。")]),t._v(" "),s("p",[t._v("描述 stylus 编译器编译顺序的简单图表如下：")]),t._v(" "),s("FlowChart",{attrs:{id:"flowchart_382ee14a",code:t.$dataBlock.flowchart_382ee14a,preset:"vue"}}),s("br"),t._v(" "),s("h2",{attrs:{id:"clientdynamicmodules-和-enhanceappfiles-的区别是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clientdynamicmodules-和-enhanceappfiles-的区别是什么"}},[t._v("#")]),t._v(" "),s("code",[t._v("clientDynamicModules")]),t._v(" 和 "),s("code",[t._v("enhanceAppFiles")]),t._v(" 的区别是什么?")]),t._v(" "),s("p",[t._v("让我们先来回顾一下，"),s("code",[t._v("clientDynamicModules")]),t._v(" 和 "),s("code",[t._v("enhanceAppFiles")]),t._v(" 都可以在编译期间通过动态 JavaScript 代码生成模块。")]),t._v(" "),s("p",[t._v("不同之处在于，当应用在客户端初始化时，"),s("code",[t._v("enhanceAppFiles")]),t._v(" 生成的文件会自动加载和使用；而 "),s("code",[t._v("clientDynamicModules")]),t._v(" 生成的文件则需要用户自己引入 "),s("code",[t._v("@dynamic/xxx")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 被入口文件自动引入")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("enhanceAppFiles")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'constans-a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要引入 '@dynamic/constans-b' 后使用")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clientDynamicModules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'constans-b'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"什么时候需要使用-enhanceappfiles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么时候需要使用-enhanceappfiles"}},[t._v("#")]),t._v(" 什么时候需要使用 "),s("code",[t._v("enhanceAppFiles")]),t._v("?")]),t._v(" "),s("ol",[s("li",[t._v("当你需要在客户端自动执行一些代码时；")]),t._v(" "),s("li",[t._v("当你不需要复用这个模块时。")])]),t._v(" "),s("p",[s("strong",[t._v("比如：")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-register-components/index.js#L24",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-register-components"),s("OutboundLink")],1),t._v("：在客户端自动注册组件")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/packages/@vuepress/plugin-google-analytics/enhanceAppFile.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-google-analytics"),s("OutboundLink")],1),t._v("：自动配置 Google Analytics")])]),t._v(" "),s("h2",{attrs:{id:"什么时候需要使用-clientdynamicmodules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么时候需要使用-clientdynamicmodules"}},[t._v("#")]),t._v(" 什么时候需要使用 "),s("code",[t._v("clientDynamicModules")]),t._v("?")]),t._v(" "),s("ol",[s("li",[t._v("当你需要生成一个在特定时间被调用的动态模块时；")]),t._v(" "),s("li",[t._v("当你需要复用这个模块。")])]),t._v(" "),s("p",[s("strong",[t._v("比如：")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vuepressjs/vuepress-plugin-blog/blob/master/src/node/index.ts#L208",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-blog"),s("OutboundLink")],1),t._v("：使用编译期元数据生成一些博客相关的动态模块并通过 "),s("code",[t._v("enhanceAppFiles")]),t._v(" 将他们在客户端初始化")])])],1)}),[],!1,null,null,null);"function"==typeof n&&n(r);e.default=r.exports}}]);