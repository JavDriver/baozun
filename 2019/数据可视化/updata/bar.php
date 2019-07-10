<?php
//这部分的功能是读表数据并且转为json格式，便于js处理。
  require("sql_config.php");
  $conn = mysqli_connect($mysql_server_name,$mysql_username,$mysql_password) or die("error connecting");
  mysqli_query($conn,"set names 'utf8'"); //数据库输出编码
  mysqli_select_db($conn,$mysql_database); //打开数据库
  $result = mysqli_query($conn,"select * from study");//打开你的表
  $data="";
  $array= array();
  class User{
    public $name;
    public $age;
    public $kg;//字段添加处1
  }
  while($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
    $user=new User();
    $user->name = $row['name'];
    $user->age = $row['age'];
    $user->kg = $row['kg'];//字段添加处2
    $array[]=$user;
  }
  $data=json_encode($array);
  // echo "{".'"user"'.":".$data."}";
  echo $data;
?>