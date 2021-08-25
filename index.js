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
            { value: '熟悉 React, TypeScript' },
            { value: '熟悉 Html, JavaScript, CSS' },
            { value: '熟悉 计算机网络等知识' },
            { value: '熟悉 XXXX' },
        ]
    },
    internShip: {
        container: [
            'item',
            {
                name: '实习公司 :',
                value: '腾讯科技'
            }, {
                name: '实习岗位 :',
                value: '前端工程师'
            }, {
                name: '实习时长 :',
                value: '2021.7.18 ~ 至今'
            }, {
                name: '项目介绍 :',
                value: '可视化搭建引擎'
            }, {
                name: '项目技术栈 :',
                value: 'React hooks + TypeScript + Mobx + InversifyJs'
            }, {
                name: '个人工作 :',
                value: '画布渲染与操作, 主要是组件的渲染以及标尺,参考线等附加功能'
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
                value: '一个微型前端框架'
            }, {
                name: '项目技术栈 :',
                value: 'TypeScript + InversifyJs'
            }, {
                name: '优点 :',
                value: ''
            }, {
                name: '项目介绍 :',
                value: '可视化搭建引擎'
            }
        ]
    },

})