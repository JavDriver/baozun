<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 16/8/10
 * Time: 下午2:51
 */
header("Content-type:text/html;charset=utf-8");
print_r($_FILES);
$img = $_FILES["img"];
// 如果error为0时,表示上传成功
if ($img["error"] == 0){
    // 判断文件是否为上传得到的文件
    if (is_uploaded_file($img["tmp_name"])){
        date_default_timezone_set("PRC");
        $time = time();
        // 获取到文件的类型 image/jpeg
        $type = $img["type"];
        // 根据/截取为数组,文件名以jpeg为后缀
        $arr = explode("/",$type);
        $type = $arr[1];
        // 图片名:14xxxxxxx.jpeg
        $name = $time.".".$type;
        if (move_uploaded_file($img["tmp_name"],"./{$name}")){
            echo "文件保存成功!";
        };
    }
}else{
    echo "上传失败!";
}