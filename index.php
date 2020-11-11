<?php
    # lokasi file
    $baseurl = 'http://localhost/Botika/botikaguide/';
    # untuk mengupdate cache browser
    $version = '9';
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <base href="<?= $baseurl; ?>">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />  
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <link rel="icon" href="assets/img/botika.webp" type="image/x-icon"/>
        <title>Documentation - Botika</title>
        <link rel="stylesheet" type="text/css" href="assets/vendor/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/vendor/prismjs/prism.css"/>
        <link rel="stylesheet" type="text/css" href="assets/css/dashboard.css">
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
        <script src="assets/js/jquery-3.5.1.min.js"></script>
        <script src="assets/js/popper.min.js"></script>
        <script src="assets/vendor/bootstrap/js/bootstrap.min.js"></script>
        <script src="assets/vendor/prismjs/prism.js"></script>
        <script src="assets/vendor/prismjs/vue-prism-component.min.js"></script>
        <script type="module" src="assets/js/main.js?v=<?= $version; ?>"></script>
    </body>
</html>