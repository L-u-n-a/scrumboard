<?php
include_once 'db-connection.php';

$name = "";

if($_REQUEST["name"]) {
  $name = $_REQUEST["name"];
  addProject($name);
}
else {
  echo $name . " : If the name isn't displayed the value was empty.";
}

function addProject($name) {
  $query = "INSERT INTO project(name) VALUES (:name);";
  $statement = connect()->prepare($query);

  try {
      $statement->execute(['name' => $name]);
  }
  catch(Exception $e) {
      echo "crud-project.php error in ---> addProject(). Error message + " . $e->getMessage();
  }
}


function getAllProjects() {
  $query = "SELECT * FROM project;";
  $statement = connect()->prepare($query);

  try {
    $statement->execute();
    $projects = $statement->fetchAll(PDO::FETCH_CLASS);

    return $projects;
  }
  catch(Exception $e) {
    echo "crud-project.php error in ---> getAllProjects(). Error message + " . $e->getMessage();
  }
}
