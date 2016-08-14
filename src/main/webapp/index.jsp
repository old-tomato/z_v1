<%@ page contentType="text/html;charset=utf-8"%>

<link type="text/css" rel="stylesheet" href="/static/css/web_sb_v1.css"/>
<html>
<head>
  <title>Hello</title>
</head>
<body class="test-background">
<h1 class="test">欢迎！</h1>
<form action="/login/loginCheck.do" method="post">
  用户名：<input type="text" name="username">
  <br>
  密码：<input type="password" name="password">
  <br>
  <input type="submit" value="登陆">
</form>
</body>
</html>