Lab4设计文档
-----------------
####在这一次的作业中，我的导航栏采取了反色和始终固定在屏幕上方，用了navbar navbar-inverse navbar-fixed-top 。对于我的主页这一栏目，由于点击它会出现下拉菜单，我选择了让它靠右，即nav navbar-nav  navbar-right。对于单按钮下拉菜单，要运用到dropdown-menu。在导航栏中最左边有一个品牌图标，运用了navbar-brand，但是图标的高度宽度我设计成了40px40px，呈现一个正方形的模式。在脚注中，每一列都使用了col-md-3。对于三张头图的轮播，运用了bootstrap中的carousel插件。运用carousel-inner添加了三张要切换的图片，而carousel-item指定了每个图片的内容，即图片的名称；使用了carousel-control-prev，carousel-control-prev-icon，carousel-control-next，carousel-control-next-icon分别添加了左侧和右侧用来切换的按钮；carousel-indicators展示了这是轮播过程中的第几张图。
主页截图：
![主页](主页.png)
