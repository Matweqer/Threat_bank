<template>
  <div class="auth">
    <div class="img-container">
      <img src="@/assets/images/auth-page/auth-bg.png" alt="background">
    </div>
    <div class="form-container">
      <h1>Вход в систему</h1>
      <form action="">
        <label><input type="text" placeholder="Логин или почта"></label>
        <label class="password"><input type="password" placeholder="Пароль"> <img src="@/assets/images/auth-page/password-eye.png" alt="eye" class="eye"></label>
        <a class="forgot-pass" href="">Забыли пароль?</a>
        <button>Войти</button>
        <p>Вы еще не зарегистрированы?</p>
        <a class="registration" href="">Зарегистрироваться</a>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthPage"
}
</script>

<style lang="scss" scoped>

.auth {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #E5E5E5;;
}
.img-container {
  width: 60%;
}
img {
  width: 100%
}
.form-container {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1{
  margin-top: 130px;
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 87px;
}
input {
  width: 335px;
  height: 45px;
  border: 1px solid #646464;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin-top: 21px;
  padding-left: 21px;
  font-family: 'Inter',serif;
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 27px;
  color: #AAAAAA;
}
.password {
  position: relative;
}
.eye {
  display: inline-block;
  top: 34px;
  right: 13px;
  position: absolute;
  width: 18px;
  height: 18px;
  z-index: 10;
}
.eye:hover {
  cursor: pointer;
}
button {
  width: 136px;
  height: 45px;
  background: rgba(41, 145, 53, 0.87);
  border-radius: 10px;
  margin-top: 47px;
  font-size: 22px;
  line-height: 27px;
  color: #FFFFFF;
}
p {
  font-family: 'Inter',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-top: 47px;
}
a {
  font-family: 'Inter',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-top: 47px;
}
.forgot-pass {
  margin-top: 20px;
  color: #000000;
}
.registration {
  margin-top: 20px;
  color: #00126D;
}

</style>