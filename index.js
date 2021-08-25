var f

(f = (option, prefix = '', index = 0) => {
    Object.entries(option).forEach((each) => {
        const e0 = each[0]
        const e1 = each[1]
        const settedPrefix = `${prefix}${prefix ? '-' : ''}${e0}`
        if (Array.isArray(e1)) {
            for (let i = 0; i < e1.length; i++) {
                if (typeof e1[i] === 'string') continue
                f(e1[i], `${settedPrefix}-${e1[0]}`, i)
            }
        } else if (typeof e1 === 'object') {
            f(e1, settedPrefix, index)
        } else {
            document.querySelectorAll(`.${prefix}-${e0}`)[index - 1].innerHTML = e1
        }
    })
})({
    basicInfo: {
        container: [
            'item',
            {
                name: '姓名 :',
                value: '潘扬'
            }, {
                name: '求职意向 :',
                value: 'Web前端开发'
            }, {
                name: 'Github :',
                value: '<a href="https://github.com/gitborlando">github.com/gitborlando</a>'
            }, {
                name: '个人网站 :',
                value: '<a href="https://gitborlando.cn">gitborlando.cn</a>'
            }, {
                name: '院校 :',
                value: '江西财经大学'
            }, {
                name: '专业 :',
                value: '金融学'
            }, {
                name: '联系方式 :',
                value: `<div class="columnByColumn">
                            <div class="marginBotton10">15770549945</div>
                            <div>2629888564@qq.com</div>
                        </div>`
            }
        ]
    },
    skillInfo: {
        container: [
            'item',
            { value: '熟悉 Html, JavaScript, CSS 基础' },
            { value: '熟悉 React, TypeScript, Mobx' },  
            { value: '掌握计算机网络等基础, 及几种常见设计模式' },
            { value: '了解 git XXX' },
        ]
    },
    internShip: {
        container: [
            'item',
            {
                name: '实习公司 :',
                value: '腾讯科技(深圳)有限公司'
            }, {
                name: '实习类型 :',
                value: '校招实习生'
            }, {
                name: '实习时长 :',
                value: '2021.7.8 ~ 至今'
            }, {
                name: '实习证明 :',
                value: 'http://XXXX'
            }, {
                name: '项目介绍 :',
                value: '可视化搭建引擎, 通过拖拽操作可生成 h5 活动页'
            }, {
                name: '项目技术栈 :',
                value: 'React hooks + TypeScript + Mobx + InversifyJs'
            }, {
                name: '个人工作 :',
                value: '画布渲染与操作, 主要是: 点击页面后生成组件的选区, 以及标尺、参考线等附加功能'
            }, {
                name: '难点1 :',
                value: 'XXXXXXX'
            },
        ]
    },
    selfProject: {
        container: [
            'item',
            {
                name: '项目介绍 :',
                value: '个人学习前端过程中出于兴趣自制的一个微型前端框架'
            }, {
                name: '项目技术栈 :',
                value: 'TypeScript + InversifyJs'
            }, {
                name: '项目地址 :',
                value: '<a href="https://github.com/gitborlando">github.com/gitborlando</a>'
            }, {
                name: '具体特性如下 :',
                value: ''
            }, {
                name: '响应式UI :',
                value: '基于 Proxy 劫持数据源的 getter 和 setter 实现响应式更新视图'
            }, {
                name: '模板引擎 :',
                value: '基于正则匹配的一个简化 Html 书写的模板解析模块'
            },{
                name: '命令行工具 frame-cli :',
                value: '可通过 npm i frame-cli && frame <项目名> 迅速构建该框架的应用'
            }, {
                name: '依赖注入 :',
                value: '使用 Ioc 依赖注入的设计模式实现各模块的解耦, 提高项目可维护性'
            }, 
        ]
    },

})