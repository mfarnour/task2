<?php
session_start();

$users = array(
  'user1' => 'password1',
  'user2' => 'password2',
  'user3' => 'password3'
);

if($_SERVER["REQUEST_METHOD"]== "POST"){
 

  $username=$_POST['username'];
  $password=$_POST['password'];

  if(isset($users[$username]) && $users[$username] == $password){
    $_SESSION['username'] = $username;
    header("Location: home.html");
  } 
  else {
    echo "Your Login Name or Password is invalid!";
  }
}
?>