<?php

    $dbhost = "localhost";
    $dbusername = "root";
    $dbpassword = "root";
    $dbname = "t2_assessment_one";

    $conn = new mysqli($dbhost, $dbusername, $dbpassword, $dbname);

    if ($mysqli -> connect_error){
        echo ('Failed to connect to database: ' . $mysqli -> connect_error);
        exit(); 
    }


?>