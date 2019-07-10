<?php
    // 要返回的图像链接数组
    $response = array();

    // 图像类型.
    $image_types = array(
                      "image/gif",
                      "image/jpeg",
                      "image/pjpeg",
                      "image/jpeg",
                      "image/pjpeg",
                      "image/png",
                      "image/x-png"
                  );

    // uploads文件夹中的文件名.
    $fnames = scandir("../uploads");
    // 检查文件夹是否存在.
    if ($fnames) {
        // 浏览文件夹中的所有文件名.
        foreach ($fnames as $name) {
            // 文件名不能是文件夹.
            if (!is_dir($name)) {
                // 检查文件是否是图像.
                if (in_array(mime_content_type("../uploads/" . $name), $image_types)) {
                    // 添加到链接数组.
                    array_push($response, "../../uploads/" . $name);
                }
            }
        }
    }

    // Folder does not exist, respond with a JSON to throw error.
    else {
        $response = new StdClass;
        $response->error = "Images folder does not exist!";
    }

    $response = json_encode($response);

    // Send response.
    echo stripslashes($response);
?>