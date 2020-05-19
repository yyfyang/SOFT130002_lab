lab8设计文档
--------------------
一开头我先设置了bt1、bt2（分别对应前后按钮）、s1、s2、s3、s4、s5（五个数字按钮）、index（数组下标）、img（对应放映的图片）、imgarr（图片数组）、mytime（轮播）这些全局变量。    
在任务1中，我对bt1、bt2设置了事件监听。规定了两个function分别是pre和next与它们相连接。两个function大同小异，主要是靠index的加减，来改变img的src（src等于imgarr数组中的元素）。再把原来的数字class删除，新增目前对应的数字class。当index小于0或大于4时，用if语句将他们改变成0或4。  
在任务2中，相对简单。就是用window.onload规定一个function一开始就相隔2000毫秒执行next函数，这个语句赋值给mytime。当鼠标划入div时，把mytime停止（即clearInterval）   
在任务3中，我分别给s1s2s3s4s5设置了相对应的function。虽然它们的functions只差个数字可以归结为一个function但是我试了一下，这个方法不可行。无奈之下，只好分为5个。以s1具体说明，把index设为0，在把img的src赋值为imgarr的第一个元素。在用一个循环语句把所有数字的class都删除。最后给当前数字新增一个class属性。  
任务4，我认为是最难的。说起来感觉不是很难，就是把td里的东西清除，放入input。但是我的光标老是在最后。在网上查了多种定位光标的方法都不管用。还是询问了助教才解决了问题。