window.onload = () => {
    const menu = document.querySelector('.menu')
    const menu_second = document.querySelector('.menu-second')
    const menu_second_clothes = document.querySelector('.menu-second-clothes')
    const menu_second_decoration = document.querySelector('.menu-second-decoration')

    const menuHeight = menu.offsetHeight - parseInt(getComputedStyle(menu)['paddingTop']) - parseInt(getComputedStyle(menu)['paddingBottom'])
    const menu_second_clothes_height = menu_second_clothes.offsetHeight - parseInt(getComputedStyle(menu_second_clothes)['paddingTop']) - parseInt(getComputedStyle(menu_second_clothes)['paddingBottom'])
    menu.style.height = '0'
    menu_second_clothes.style.height = '0'

    openMenu = e => {
        e.preventDefault()

        menu.style.left = `${e.clientX}px`
        menu.style.top = `${e.clientY + 5}px`
        menu.style.height = `${menuHeight}px`
        menu.classList.add('is-active')

        return false
    }

    colseMenu = () => {
        menu.style.height = '0'
        menu.classList.remove('is-active')
    }

    window.onclick = () => colseMenu()

    // 点击非角色区时，隐藏
    document.addEventListener('mouseup',function(e2){
        if(e2.button == 2){
            //console.log('右键点击了')
            colseMenu() 
        }
    })
    let isleave = 0
    //利用事件委托
    //let clothesList = document.querySelector('.menu-second-clothes')
    //判断是哪个列表
    menu.addEventListener('mouseover',function(e){
        if(e.target.dataset.id === '衣服')
        {
            // console.log(1);
            e.preventDefault()

            //隐藏活动的二级列表
            let active_nenu = document.querySelector('.menu-second .is-active')
            if(active_nenu != null)
            {
                active_nenu.classList.remove('is-active')
            }

            // 显示二级列表
            menu_second_clothes.style.left = `${e.clientX + 10}px`
            menu_second_clothes.style.top = `${e.clientY - 5}px`
            menu_second_clothes.style.height = `${menu_second_clothes_height}px`
            menu_second_clothes.classList.add('is-active')
        }
        if(e.target.dataset.id === '发饰')
        {

            e.preventDefault()

            //隐藏活动的二级列表
            let active_nenu = document.querySelector('.menu-second .is-active')
            if(active_nenu != null)
            {
                active_nenu.classList.remove('is-active')
            }

            //显示二级列表
            menu_second_decoration.style.left = `${e.clientX + 10}px`
            menu_second_decoration.style.top = `${e.clientY - 5}px`
            menu_second_decoration.style.height = `${menu_second_clothes_height}px`
            menu_second_decoration.classList.add('is-active')
        }
    })
    //鼠标进入二级菜单，此时已经离开一级菜单，但是不能隐藏一级
    // menu_second_clothes.addEventListener('mouseenter',()=>{
    //     isleave = 1
    // })

    //鼠标离开衣服二级列表时隐藏衣服二级列表
    menu_second_clothes.addEventListener('mouseleave', function(){
        // console.log('离开');
        menu_second_clothes.style.height = '0'
        menu_second_clothes.classList.remove('is-active')
        isleave = 0
    })

    //鼠标离开头饰二级列表时隐藏头饰二级列表
    menu_second_decoration.addEventListener('mouseleave', function(){
        // console.log('离开');
        menu_second_decoration.style.height = '0'
        menu_second_decoration.classList.remove('is-active')
        isleave = 0
    })

    //鼠标离开对应的一级列表时隐藏对应二级列表
    // menu.addEventListener('mouseout', function(){
    //     if(isleave >= 0){
    //         //隐藏二级列表
    //         menu_second_clothes.style.height = '0'
    //         menu_second_clothes.classList.remove('is-active')
    //     }
        
    // })

    let clothesitem = ["工作服","女仆服","学生服","摩托服","泳装1","泳装2","礼服","旗袍"]
    let decoratitem = ["发饰1","墨镜","花发饰","遮阳帽","右猫耳","左猫耳-1","左猫耳-2","摩托头盔","礼服帽子","女仆发饰"]
    
    menu_second_clothes.addEventListener('click', function(e){
        if(e.target.dataset.id == "1")
        {
            console.log('点击了工作服');
            menu_second_clothes.style.height = '0'
            menu_second_clothes.classList.remove('is-active')
            isleave = 0
        }
    })

    menu_second_decoration.addEventListener('click', function(e){
        if(e.target.dataset.id == "1")
        {
            console.log('点击了发饰1');
            menu_second_decoration.style.height = '0'
            menu_second_decoration.classList.remove('is-active')
            isleave = 0
        }
    })
}