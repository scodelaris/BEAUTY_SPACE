<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception; 

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail ->CharSet = 'UTF-8';
$mail ->setLanguage('ru', 'phpmailer/language/');
$mail ->IsHTML(true);

$mail ->setFrom('');
$mail ->addAddress('');
$mail ->Subject = 'Заявка на сайте';

$body = '<h1>Идентификационные данные клиента:</h1>';

if(trim(!empty($_POST['client-name']))) {
    $body.='<p><strong>Имя:</strong> '.$_POST['client-name'].'</p>';
}
if(trim(!empty($_POST['client-phone']))) {
    $body.='<p><strong>Имя:</strong> '.$_POST['client-phone'].'</p>';
}
if(trim(!empty($_POST['client-email']))) {
    $body.='<p><strong>Имя:</strong> '.$_POST['client-email'].'</p>';
}

$mail->Body = $body;

if (!$mail->send()) {
    $message = 'Ups, wystąpił błąd. Przeładuj stronę lub spróbuj ponownie później.';
}else {
    $message = 'Dane wysłane pomyślnie!';
    header('Location: confirm.html');
}

$response = ['message' => $message];
header('Content-type: application/json');
echo json_encode($response);
?>
