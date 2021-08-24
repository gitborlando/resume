var f

(f = (option, prefix = '', index = 0) => {
    Object.entries(option).forEach((each) => {
        const e0 = each[0]
        const e1 = each[1]
        const settedPrefix = `${prefix}${prefix ? '-' : ''}${e0}`
        if(Array.isArray(e1)){
            for(let i = 0; i < e1.length; i++){
                if(i === 0) continue
                f(e1[i], `${settedPrefix}-${e1[0]}`, i)
            }
        }else if (typeof e1 === 'object') {
            f(e1, settedPrefix, index)
        } else {
            document.querySelectorAll(`.${prefix}-${e0}`)[index - 1].innerHTML = e1
        }
    })
})({
    // basicInfo: {
    //     container: [
    //         'item',
    //         {
    //             name: '联系方式 :',
    //             value: '13516550686'
    //         }, {
    //             name: '院校 :',
    //             value: '江西财经大学'
    //         }
    //     ]
    // }
})