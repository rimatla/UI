<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Invisible reCaptcha</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">

     <!--api link-->
    <script type="text/javascript" src='https://www.google.com/recaptcha/api.js' async defer></script>
    <script type="text/javascript">
        //call back
        function onSubmit(token) {
            document.getElementById('submit-form').submit();
        }
    </script>
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-lg-6">
            <h3>Sign up</h3>
            <hr>
            <form id="submit-form" action="invisibleServer.php" method="post">
                <div class="form-group">
                    <label for="email">Text</label>
                    <input type="text" name="email" class="form-control" id="email" placeholder="type anything">
                </div>
                <button class="g-recaptcha btn btn-primary" data-sitekey="<site-key>" data-callback='onSubmit'>Submit</button>
            </form>
        </div>
    </div>
</div>
</body>
</html>