# Lab5设计文档

在第一个url时，与Java十分类似，本无多大困难。主要运用到了indexof来判断是否有name参数的存在，若没有则输出Math.random，如果有则再运用substring把name参数提取出来，在这过程中需要再次用到indexof来判断指定字符的位置。  
在第二个中，遇到了很多问题，例如：怎样在加载网页后自动执行函数；怎样规定相隔一定时间反复执行相同函数；怎样在下一分钟或运行10次以后就停止函数的运行。对此，一开始使用了addeventlistener，不过发现函数执行的时间间隔出现了错误，后改成了window.onload，保证了在网页加载完毕后立刻执行此函数。对于第二个问题，我使用了setInterval。并且在它执行的函数中，加入了clearInterval，使得当条件到时可以立即停止。  
在第三个中，运用循环函数遍历出，出现最多字符以及它所对应的次数。使用了object类型的数组，每次循环来记录字符的出现次数。  

![截图](https://github.com/yyfyang/SOFT130002_lab/blob/master/lab5/lab5需求文档.assets/截图.jpg)
![github](https://github.com/yyfyang/SOFT130002_lab/blob/master/lab5/lab5需求文档.assets/github.jpg)
