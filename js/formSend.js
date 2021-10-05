$("#sendData").on("click", function() {
  var name = $("#name").val().trim();
  var surname = $("#surname").val().trim();
  var email = $("#email").val().trim();
  var password = $("#password").val().trim();
  var passwordRepeat = $("#passwordRepeat").val().trim();

  var reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var form = document.getElementById("form");

  $("#errorName").text("");
  $("#errorSurName").text("");
  $("#errorEmail").text("");
  $("#errorPassword").text("");
  $("#errorPasswordRepeat").text("");

  if(name == "") {
    $("#errorName").text("Введите имя");
    return false;
  } else if(surname == "") {
    $("#errorSurName").text("Введите фамилию");
    return false;
  } else if(email == "") {
    $("#errorEmail").text("Введите Email");
    return false;
  } else if(password == "") {
    $("#errorPassword").text("Введите пароль");
    return false;
  } else if(passwordRepeat == "") {
    $("#errorPasswordRepeat").text("Введите пароль еще раз");
    return false;
  }

  if(reg.test(email.toLowerCase()) == false) {                                  
    $("#errorEmail").text("Введите корректный Email");
    return false;
  }

  if(password != passwordRepeat) {
    $("#errorPasswordRepeat").text("Пароли не совпадают");
    return false;
  }

  $("#errorName").text("");
  $("#errorSurName").text("");
  $("#errorEmail").text("");
  $("#errorPassword").text("");
  $("#errorPasswordRepeat").text("");

  $.ajax({
    url: 'ajax/form.php',
    type: 'POST',
    cache: false,
    data: { 'name': name, 'surname': surname, 'email': email, 'password': password, 'passwordRepeat': passwordRepeat },
    dataType: 'html',
    success: function(data) {
        if(!data) {
          form.style.display = 'none';
          alert("Отправка формы прошла успешно");
        } else {
          alert(data)
          //$("#errorFromServer").text(data);

        }
    }
  });

});
