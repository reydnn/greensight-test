<?php
  $name = $_POST['name'];
  $surname = $_POST['surname'];
  $email = $_POST['email'];
  $password = $_POST['password'];
  $passwordRepeat = $_POST['passwordRepeat'];

  $logFileName = "log.txt";

  $errorEmail = '';
  $errorPassword = '';

  $users = array(
    array(
      'id' => '1',
      'name' => 'Иван',
      'email' => 'ivan@go.ru'
    ),
    array(
      'id' => '2',
      'name' => 'Саша',
      'email' => 'sasha@go.ru'
    ),
    array(
      'id' => '3',
      'name' => 'Алекс',
      'email' => 'alex@go.ru'
    ),
    array(
      'id' => '4',
      'name' => 'Ира',
      'email' => 'ira@go.ru'
    ),
  );

  if(filter_var($email, FILTER_VALIDATE_EMAIL) == false) {
    $errorEmail = 'Введите корректный Email';
  }

  if($password != $passwordRepeat) {
    $errorPassword = 'Пароли не совпадают';
  }

  $checkEmail = array_column($users, 'email');

  if(empty($errorEmail)) {
    foreach ($checkEmail as $i => $value) {
      if ($checkEmail[$i] == $email) {
        $errorEmail = 'Пользователь с таким Email уже существует';
        $log = date('Y-m-d H:i:s') . ' Попытка отправки формы пользователем '. $email;
        file_put_contents($logFileName, $log . PHP_EOL, FILE_APPEND);
      } else {
        $log = date('Y-m-d H:i:s') . ' Отправка формы пользователем ' . $email;
        file_put_contents($logFileName, $log . PHP_EOL, FILE_APPEND);
      }
    }
  }

  if($errorEmail == '' && $errorPassword == '') {
    $success = true;
  } else {
    echo $errorEmail;
    echo "\n";
    echo $errorPassword;
  }

?>
