<?php
    # lokasi file
    $baseurl = 'http://localhost/botikaguide/';
    # untuk mengupdate cache browser
    $version = '5';
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <base href="<?= $baseurl; ?>">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />  
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <link rel="icon" href="assets/img/botika.webp" type="image/x-icon"/>
        <title>Documentation - Botika</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="assets/vendor/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="assets/css/dashboard.css">
        <link rel="stylesheet" href="https://unpkg.com/prismjs/themes/prism.css"/>
    </head>
    <body>
        <noscript>
            <strong>We're sorry, this website does not work properly without JavaScript enabled. Please enable it to continue.</strong>
        </noscript>
        <div id="app">

        </div>
        <script type="text/javascript">
            const version = '<?= $version; ?>';
            const baseurl = '<?= $baseurl; ?>';
        </script>
        <script src="assets/js/vue.js"></script>
        <script src="assets/js/vue-router.js"></script>
        <script src="assets/js/jquery-3.5.1.slim.min.js"></script>
        <script src="assets/js/popper.min.js"></script>
        <script src="assets/vendor/bootstrap/js/bootstrap.min.js"></script>
        <script type="module" src="assets/js/main.js?v=<?= $version; ?>"></script>
        <script src="https://unpkg.com/prismjs"></script>
    </body>
</html>