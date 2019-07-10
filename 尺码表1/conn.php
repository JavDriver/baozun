<?php
$dbhost='localhost';//数据库服务器名称
$dbuser='root';// 连接数据库用户名
$dbpass='';// 连接数据库密码
$dbname='online';// 数据库的名字
// 连接到数据库
error_reporting(E_ALL ^ E_DEPRECATED);//解决报错问题
$connect=mysql_connect($dbhost,$dbuser,$dbpass);
if(!$connect) exit('数据库连接失败！');
mysql_select_db($dbname,$connect);
mysql_query('set names gbk');//设置编码
?>
