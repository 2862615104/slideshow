/**
 * Created by jack on 2017/11/21.
 */

//1.ȷ������������
//2.ȷ����Щ�ǿ��Ա����
//3.ȷ���Ƿ��з���ֵ
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