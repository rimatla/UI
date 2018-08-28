<?php
//only run when form is submitted
if(isset($_POST['g-recaptcha-response'])) {
    $secretKey = 'secret-key';
    $response = $_POST['g-recaptcha-response'];
    $remoteIp = $_SERVER['REMOTE_ADDR'];

    $reCaptchaValidationUrl = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$response&remoteip=$remoteIp");
    $result = json_decode($reCaptchaValidationUrl, TRUE);

    if($result['success'] == 1) {
        //True - What happens when user is verified
        $userMessage = '<div class="jumbotron success">Success: you\'ve made it :)</div>';
    } else {
        //False - What happens when user is not verified
        $userMessage = '<div class="jumbotron fail">Fail: please try again :(</div>';
    }
    print_r($result);

}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>reCAPTCHA Invisible Response</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<?php
if(!empty($userMessage)) {
    echo $userMessage;
}
?>
</body>
</html>