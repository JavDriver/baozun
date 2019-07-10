<?php 
error_reporting(0);
$oldName = $_FILES['pics']['name'];  //form表单中的上传图片的name值(pics)
$tmp = explode(".",$oldName);
var_dump($tmp);
//$newName = time().".".$tmp[1];
$newName = $_POST['code'];
$name=$_POST['code'].".".$tmp[1];//文件名
$uploadfile = "upload/".$newName.".".$tmp[1]; //图片存放的路径
if(is_uploaded_file($_FILES['pics']['tmp_name'])){
move_uploaded_file($_FILES['pics']['tmp_name'],$uploadfile); 
}
if(isset($_POST['submit'])&&$_POST['submit']!=""){
include 'conn.php';
$sql="INSERT INTO `wenjian` (`id`,`qid`,`name`,`lujing`,`date`) VALUES (NULL,'".$_POST['idcode']."','".$name."','".$uploadfile."',now())";
$result=mysql_query($sql);
if(mysql_affected_rows()){
    echo '插入成功，插入ID为：',mysql_insert_id();
}else{
    echo '插入失败：',mysql_error();
}
}
//$sql = "insert into `product` (path) values ('".$newName."')";
//$query = mysql_query($sql);
?>
 
<html>
<head>
<title>文件上传</title>
</head>
<body>
 <form  enctype="multipart/form-data" action="upload.php" method="post">
 请您选择文件：
 <input name="pics" type="file" value=""><br>
保存文件名称：
<input name="code" type="text" style="background-color: #E6E6E6;"><br>
输入查抄ID：  
<input name="idcode" type="text" style="background-color: #E6E6E6;"><br>
<input type="submit" name="submit" value="上传">   
<input type="reset" name="reset" value="取消">
<!-- form 表单中必须包含 enctype="multipart/form-data" -->
 </form>
</body>
</html>
