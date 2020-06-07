lab11    
-----------
session可以用来记录用户登陆信息，并全局使用；制作验证码，验证对比操作；将session保存到数据库可以实现控制一个帐号只能一个人登录。session的优点：唯一性、方便调用、不会过多占用资源，是存储在服务器的一组临时数据。一般情况下，我们在做用户登录时，会将用户数据存入session。这样，在任何页面都可以方便调用，而且 每个客户端会产生唯一的session_id，不会混肴。并且在关闭浏览器后，服务器会有session回收机制，自动删除过期session。缺点：在客户端是以cookie方式保存的，禁用cookie就没用了。  
cookie可以用来记住用户名密码。优点：不需要服务器资源空间 ；持久时间更长。缺点：客户端大小受限制 ；用户禁用Cookie那么就废用了；不安全。  
Cookie机制采用的是在客户端(浏览器)保持状态的方案，而session机制采用的是在服务器端保持状态的方案。Session在客户端也需要保存一个标识，所以就要借助Cookie,session是通过cookie来工作的session和cookie之间是通过$_COOKIE['PHPSESSID']来联系的，通过$_COOKIE['PHPSESSID']可以知道session的id，从而获取到其他的信息。