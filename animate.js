/**
 * Created by jack on 2017/11/21.
 */

//1.确定函数的名称
//2.确定哪些是可以变的量
//3.确定是否有返回值
function animate(element,target,step){
    clearInterval(element.timer)
    element.timer = setInterval(function(){
       var currentLeft = element.offsetLeft;
        currentLeft += target<=currentLeft?-step:step;
       element.style.left = currentLeft + "px";
       if(Math.abs(target-currentLeft)<=step){
           clearInterval(element.timer);
           element.style.left = target + "px";
       }
   },20)
}