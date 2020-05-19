
/*请在该区域内声明或者获取所要使用的全局变量*/
/********************************************begin************************************/

var bt1=document.getElementsByTagName("a")[0];
var bt2=document.getElementsByTagName("a")[1];
var s1=document.getElementsByTagName("span")[0];
var s2=document.getElementsByTagName("span")[1];
var s3=document.getElementsByTagName("span")[2];
var s4=document.getElementsByTagName("span")[3];
var s5=document.getElementsByTagName("span")[4];
var index=0;
var img=document.getElementsByTagName("img")[1];
var imgarr=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
var mytime;
/*********************************************end*************************************/



/* 任务一
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击左箭头prev和右箭头next的时候，可以切换到前一张图片和下一张图片。（左右箭头为html中的a标签）
 * ②每切换一张图片，右下角的数字标记对应变化。
 *      如：一开始，第1张图片显示出来，右下角的1-5的数值中，数值1位红色，2-4为绿色，表示当前显示第1张图片。
 *      点击next箭头，图片切换到第2张，同时，右下角红色数值从1切换为2，数值1,3,4,5为绿色。
 * ③当当前图片为第1张时，点击prev箭头，切换到第5张图片，且数值5置为红色。
 * 当当前图片为第5张时，点击next箭头，切换到第1张图片，且数值1置为红色。
 * ④切换图片的过程不要求，可直接切换，也可动画切换，但要求保证一定的切换动画合理性，不能出去明显的衔接不当。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/
bt1.addEventListener('click',pre);
bt2.addEventListener('click',next);
function pre() {
    document.getElementsByTagName("span")[0].removeAttribute("class");
    index--;
    if(index<0)
    {
        index=imgarr.length-1;
    }
    document.getElementsByTagName("img")[1].src=imgarr[index];
    document.getElementsByTagName("span")[index].setAttribute("class","on");
    document.getElementsByTagName("span")[index+1].removeAttribute("class");
};
function next() {
    document.getElementsByTagName("span")[4].removeAttribute("class");
    index++;
    if(index>4)
    {
        index=0;
    }
    document.getElementsByTagName("img")[1].src=imgarr[index];
    document.getElementsByTagName("span")[index].setAttribute("class","on");
    document.getElementsByTagName("span")[index-1].removeAttribute("class");
};

/*********************************************end*************************************/



/* 任务二
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①轮播可以自动播放，切换图片间隔为2s，每一次切换的效果与点击next箭头的效果一致。
 * ②当鼠标移入轮播区域内时，停止自动播放。
 * ③当鼠标不在轮播区域内时，开始自动播放。
 * ④页面刚加载完成时，如果鼠标不在轮播区域内，自动开始自动播放；否则，等待直到鼠标移出轮播区域，再进行自动播放。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/
window.onload=function () {
    document.getElementsByTagName("div")[1].onmouseout=function(){
        mytime=window.setInterval("next()",2000);
    }
    document.getElementsByTagName("div")[1].onmouseover=function(){
        window.clearInterval(mytime);
    }
}
/*********************************************end*************************************/



/* 任务三
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击右下角的任意一个数值，能够切换到对应图片，且相应数值变为红色。
 * ②进行①操作过后，是否自动播放，其规则与上一个任务一致。
 * ③本部分只能使用原生JS。
 */
/********************************************begin************************************/
s1.onclick=function () {
    index=0;
    document.getElementsByTagName("img")[1].src=imgarr[0];
    for (var j=0;j<5;j++){
        document.getElementsByTagName("span")[j].removeAttribute("class");
    }
    document.getElementsByTagName("span")[0].setAttribute("class","on");
}
s2.onclick=function () {
    index=1;
    document.getElementsByTagName("img")[1].src=imgarr[1];
    for (var j=0;j<5;j++){
        document.getElementsByTagName("span")[j].removeAttribute("class");
    }
    document.getElementsByTagName("span")[1].setAttribute("class","on");
}
s3.onclick=function () {
    index=2;
    document.getElementsByTagName("img")[1].src=imgarr[2];
    for (var j=0;j<5;j++){
        document.getElementsByTagName("span")[j].removeAttribute("class");
    }
    document.getElementsByTagName("span")[2].setAttribute("class","on");

}
s4.onclick=function () {
    index=3;
    document.getElementsByTagName("img")[1].src=imgarr[3];
    for (var j=0;j<5;j++){
        document.getElementsByTagName("span")[j].removeAttribute("class");
    }
    document.getElementsByTagName("span")[3].setAttribute("class","on");

}
s5.onclick=function () {
    index=4;
    document.getElementsByTagName("img")[1].src=imgarr[4];
    for (var j=0;j<5;j++){
        document.getElementsByTagName("span")[j].removeAttribute("class");
    }
    document.getElementsByTagName("span")[4].setAttribute("class","on");

}

/*********************************************end*************************************/


/*任务四
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击某一非表头的单元格，可以编辑其内容，编辑完毕后点击其他部位，可以在界面上显示修改后的内容。
 * ②点击单元格后，光标自动定位于单元格的首个字符或者汉字前。
 * ③本部分可以使用jQuery，也可以使用原生JS。
 */
/********************************************begin************************************/
var t=document.getElementsByTagName("table")[0];
t.style.position="absolute";
t.style.left="12px";
t.style.top="470px";
for (var j=0;j<3;j++){
    var th=document.getElementsByTagName("th")[j];
    th.style.width="194px";
}
for (var j=0;j<12;j++){
    $("table").on("click", "td:not(.active)", function () {
        if ( $(this).find('input').length ) {
            return ;
        }
        $(this).addClass('input').html('<input type="text" value="'+ $(this).text() +'" />').find('input').focus();
    });
    $("table").on("blur", "input:text", function () {
        var $this = $(this);
        $this.parent().removeClass("active").text($this.val());
    });
}
/*********************************************end*************************************/