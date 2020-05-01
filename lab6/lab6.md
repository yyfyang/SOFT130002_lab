# Lab6设计文档  
正则表达式理解
-------------
在判断邮箱的正确时，我运用了^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$。其中^用来匹配邮箱的开始部分，\w+([-+.]\w+)则是表示邮箱的名称等价于 A- Z a - z 0-9 和 _ 的字符 [-+.] 字符集合，+ 表示匹配前面的子表达式至少一次，*表示匹配前面的子表达式零次或多次，$ 表示匹配输入字符串的结尾位置。  
在第三个中，主要运用了正则表达式中的search来匹配相邻两项是否相等，我先运用条件语句限制了相邻两项必须字符串长度相等，才能进行正则字符的匹配。如果匹配下来位置是0的话，说明这两项相等（不限制大小写）


继承的理解
-------------
原型链可以让子类继承父类的构造函数、原型，但是它继承较为单一，而且所有实列都会共享父类实例的属性，无法单独修改一个的实例属性，局限性比较大。而借用构造函数虽然解决了原型链的一些问题，如：继承单一，无法单独改变实力属性，但是它每次都要重新调用，比较繁琐，而且只能继承父类构造函数的属性。object.create继承较为强大，它可以创建一个新的对象继承原来对象的属性，并且可以自行添加属性。虽然说它可以免去创造了一个构造函数，但是引用类型属性是共享的。


Map、Set、Array之间的区别和使用
-------------
Map有key和与之对应的value，使用它的时候可以较为便利的获得对象数组中的特定属性值。Set是没有重复元素的，但筛选未重复元素时，尤为便利。Array就是常规的数组，相比于Map和Set它可以直接获取指定位置的元素。三种数组类型各有各的特点。

![1](https://github.com/yyfyang/SOFT130002_lab/blob/master/lab6/图片/1.jpg)  
![2](https://github.com/yyfyang/SOFT130002_lab/blob/master/lab6/图片/2.jpg)  
![3](https://github.com/yyfyang/SOFT130002_lab/blob/master/lab6/图片/3.jpg)  
![4](https://github.com/yyfyang/SOFT130002_lab/blob/master/lab6/图片/4.jpg)  
![5](https://github.com/yyfyang/SOFT130002_lab/blob/master/lab6/图片/5.jpg)  
![6](https://github.com/yyfyang/SOFT130002_lab/blob/master/lab6/图片/6.jpg)  
![7](https://github.com/yyfyang/SOFT130002_lab/blob/master/lab6/图片/7.jpg)  
![8](https://github.com/yyfyang/SOFT130002_lab/blob/master/lab6/图片/8.jpg)  
![截图](https://github.com/yyfyang/SOFT130002_lab/blob/master/lab6/图片/截图.jpg)



