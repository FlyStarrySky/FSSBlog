//动画数据
let Serika;
//骨骼数据
let Serikaskeleton;
//眼位置
let relative = {x: 0, y: 0};  
//眼睛和头骨骼对象
let controlEye
let controlHead 
//窗体宽度
let viewWidth

//Create a Pixi Application 创建一个应用  对象
var banner = new PIXI.Application({
	//backgroundColor:0xFFFFFF,   //背景色
	antialias:true,             //抗锯齿
	transparent: true,
	//width:document.documentElement.clientWidth,
	height:200
    });

//将对象显示到窗口
//document.body.appendChild(app.view);
document.getElementById('header-anim').appendChild(banner.view);

//加载Json数据
let loader2 = PIXI.loader.add('Serika','../images/Serika_home.json')

//初始化数据
loader2.load((loader,res)=>{
    Serika = new PIXI.spine.Spine(res.Serika.spineData),
    options = [''];
    Serikaskeleton = Serika.skeleton;
    //获取相关骨骼
    controlEye = Serikaskeleton.findBone('Touch_Eye')
    controlHead = Serikaskeleton.findBone('Head')

    //眼骨骼初始位置
    relative.x = controlEye.x
    relative.y = controlEye.y
    //动画
    Serika.state.setAnimation(0,'Idle_02',true);//loop你的动画名字 true 为循环播放
    //原点偏移
    Serika.x = 1020;
    Serika.y = 830;
    //缩放
    Serika.scale.x = 0.6;
    Serika.scale.y = 0.6;
    //添加到舞台显示
    banner.stage.addChild(Serika);
}); 

let bannerAnim = document.querySelector("#header-banner")
	//鼠标进入动画过渡    
	//text1.addEventListener('mouseenter',function(e){
    //let j = 1
    //let timer2 = setInterval( function(){
        //controlEye.y = controlEye.y + (-(e.clientX)/3 - controlEye.y)*(j/10)
        //controlEye.x = controlEye.x + (-(e.clientY)/3 -controlEye.x)*(j/10)
        //j++
        //if(j===10){
            //j=1
            //clearInterval(timer2)
        //}
    //}, 40);
//})

//鼠标移动动画
bannerAnim.addEventListener('mousemove',function(e){
    //console.log('123');
    //console.log('眼初始位置x' + relative.x);
    //console.log('眼初始位置y' + relative.y);
    //console.log('眼当前位置x' + controlEye.x);
    //console.log('眼当前位置y' + controlEye.y);
    //basePos.x = e.clientX
    //basePos.y = e.clientY
    //console.log(basePos.x);
    controlEye.y = -(e.clientX - 1000)/3
    controlEye.x = -(e.clientY - 100)/3
})
	    
//function move(){
    //移动
    //text1.addEventListener('mousemove',function(e){
    //console.log('123');
    //console.log('眼初始位置x' + relative.x);
    //console.log('眼初始位置y' + relative.y);
    //console.log('眼当前位置x' + controlEye.x);
    //console.log('眼当前位置y' + controlEye.y);
    //basePos.x = e.clientX
    //basePos.y = e.clientY
    //console.log(basePos.x);
    //controlEye.y = -(e.clientX - 1000)/3
    //controlEye.x = -(e.clientY - 100)/3
    //})
//}

//setTimeout(move,3000)  
	
//鼠标移出动画过渡
bannerAnim.addEventListener('mouseleave',function(e){
    //console.log('离开眼初始位置x' + relative.x);
    //console.log('离开眼初始位置y' + relative.y);
    //controlEye.x = relative.x
    //controlEye.y = relative.y
    let i = 1
    let timer = setInterval( function(){
        controlEye.y = controlEye.y - (controlEye.y - relative.y)*(i/10)
        controlEye.x = controlEye.x - (controlEye.x - relative.x)*(i/10)
        i++
        if(i===10){
            i=1
            clearInterval(timer)
        }
    }, 40);
})

//窗体宽度变换时变换舞台宽度
viewWidth = document.getElementById('header').clientWidth;
	    
//banner.renderer.view.style.position = "absolute";
//banner.renderer.view.style.display = "block";
banner.renderer.autoResize = true;
banner.renderer.resize(viewWidth, 200);
    
//窗体变换事件，变化时触发
window.addEventListener('resize', function(){
    //console.log('1');
    //输出当前窗口的宽
    let windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
    //console.log(windowWidth);
    //banner.width = windowWidth;
    banner.renderer.resize(windowWidth, 200);
});