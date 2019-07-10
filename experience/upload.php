<?php 
sleep(2); 
$fileTypes = array('csv'); 
$result = null; 
$uploadDir = 'D:\experience/csv'; 
$maxSize = 1 * pow(2,20); 
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['sub'])) { 
$myfile = $_FILES['myfile']; 
$myfileType = substr($myfile['name'], strrpos($myfile['name'], ".") + 1); 
if ($myfile['size'] > $maxSize) { 
$result = 1; 
} else if (!in_array($myfileType, $fileTypes)) { 
$result = 2; 
} elseif (is_uploaded_file($myfile['tmp_name'])) { 
$toFile = $uploadDir . '/' . $myfile['name']; 
if (@move_uploaded_file($myfile['tmp_name'], $toFile)) { 
$result = 0; 
} else { 
$result = -1; 
} 
} else { 
$result = 1; 
} 
} 
?> 
<script type="text/javascript"> 
window.top.window.stopUpload(<?php echo $result; ?>); 
</script> 