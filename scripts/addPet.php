<?php 

include '$db_connection.php';

    // ini_set('display_errors', 1);
    // ini_set('display_startup_errors', 1);
    // error_reporting(E_ALL);

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    $result_body = file_get_contents('php://getPets');
    $data = json_decode($result_body);

    $pet_name = $data -> pet_name;
    $pet_species = $data -> pet_species;
    $pet_sex = $data -> pet_sex;
    $pet_age = $data -> pet_age;
    $pet_micro_id = $data -> pet_micro_id;
    $owner_name = $data -> owner_name;
    $owner_id = $data -> owner_id;
    $origin = $data -> origin
    $destination = $data -> destination;

    $sql = "INSERT INTO pets(id, pet_name, pet_species, pet_sex, pet_age, pet_microchip_id, owner_name, owner_id, origin, destination) VALUES (NULL,'$pet_name','$pet_species','$pet_sex','$pet_age','$pet_micro_id','$owner_name','$owner_id','$origin','$destination');";
    $result = mysqli_query($conn, $sql);

    if(!$result){
        echo ("Error:" . mysqli_error($conn));
    } else {
        echo ("Pet added successfully!")
    }

?>