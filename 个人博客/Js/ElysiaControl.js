let aili;	    
//Create a Pixi Application 创建一个应用  对象
var Elysia = new PIXI.Application({
    //backgroundColor:0xFFFFFF,   //背景色
    transparent: true,
    autoDensity: true,
    antialias: false,
    width:250,
    height:250
});

//将对象显示到窗口
//document.body.appendChild(app.view);
document.getElementById('Elysia').appendChild(Elysia.view);

//加载Json数据
//let loader1 = PIXI.loader.add('aili','../images/爱莉.json')

//初始化数据
loader1.load((loader,res)=>{
    aili = new PIXI.spine.Spine(res.aili.spineData),
    options = [''];
    aili.state.setAnimation(0,'idel',true);//loop你的动画名字 true 为循环播放
    //原点偏移
    aili.x = 130;
    aili.y = 250;
    //比例缩放
    aili.scale.x = 0.5;
    aili.scale.y = 0.5;
    //动画混合比例
    aili.stateData.setMix('idel', '拿起', 0.2);
    aili.stateData.setMix('拿起','idel' , 0.2);
    //角色显示到舞台
    Elysia.stage.addChild(aili);
        
    //皮肤初始化
    // create new empty skin  创建新的空皮肤
    const newSkin = new PIXI.spine.core.Skin("Myskin");
        
    // add base skin  加入基础皮肤
    newSkin.addSkin(aili.spineData.findSkin("Base—戴头盔"));
        
    // add parital skins over base     加入其余皮肤
    newSkin.addSkin(aili.spineData.findSkin("皮肤/工作服"));
    newSkin.addSkin(aili.spineData.findSkin("头饰/发饰1"));

    //设置皮肤
    aili.skeleton.setSkin(newSkin); 
    
    //Reset slots to remove not used attachments  刷新
    aili.skeleton.setSlotsToSetupPose();
}); 

//拖动事件
let t = document.querySelector('#Elysia')
t.addEventListener('mousedown',function(e){
    //元素原点
    let x = e.pageX - t.offsetLeft
    let y = e.pageY - t.offsetTop
        
    if(e.button==0){
        //alert("鼠标左键点击了")
        aili.state.setAnimation(0,'拿起',true); 
        t.addEventListener('mousemove',moveTo)
            function moveTo(el)
            {
            //console.log('移动');
            let x1 = el.pageX-x+'px'
            let y1 = el.pageY-y+'px'
            t.style.left = x1
            t.style.top = y1
            }
    }
    t.addEventListener('mouseup',()=>{
        //console.log('停止');
        aili.state.setAnimation(0,'idel',true); 
        t.removeEventListener('mousemove',moveTo)
    })
})
