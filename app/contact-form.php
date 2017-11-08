<?php
require_once '../PHPMailer-master/PHPMailerAutoload.php';

if (isset($_POST['name']) && isset($_POST['companyName']) && isset($_POST['emailAddress']) && isset($_POST['customerPhoneNumber']) && isset($_POST['enquiryText'])) {

    //check if any of the inputs are empty
    if (empty($_POST['name']) || empty($_POST['companyName']) || empty($_POST['emailAddress']) || empty($_POST['customerPhoneNumber']) || empty($_POST['enquiryText'])) {
        $data = array('success' => false, 'message' => 'Please fill out the form completely.');
        echo json_encode($data);
        exit;
    }

    //create an instance of PHPMailer
    $mail = new PHPMailer();

    $mail->From = $_POST['emailAddress'];
    $mail->FromName = $_POST['name'];
    $mail->AddAddress('calin@labourforceconstruction.com'); //recipient 
    $mail->Subject = "Message from the Website";
    $mail->Body = "Name: " . $_POST['name'] ."\r\n\r\nCompany: " . $_POST['companyName'] . "\r\n\r\nMessage: " . stripslashes($_POST['enquiryText']);

    if (isset($_POST['ref'])) {
        $mail->Body .= "\r\n\r\nRef: " . $_POST['ref'];
    }

    if(!$mail->send()) {
        $data = array('success' => false, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
        echo json_encode($data);
        exit;
    }

    $data = array('success' => true, 'message' => 'Thanks! We have received your message.');
    echo json_encode($data);

} else {

    $data = array('success' => false, 'message' => 'Please fill out the form completely.');
    echo json_encode($data);

}