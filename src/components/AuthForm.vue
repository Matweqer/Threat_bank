<template>
  <form class="form" action="">
    <label class="form__login"> <input type="text" placeholder="Логин или почта"> </label>
    <label class="form__password"> <input type="password" placeholder="Пароль"> <img src="@/assets/images/auth-page/password-eye.png" alt="eye" class="form__password__eye"> </label>
<!--   Стоит ли выносить эту ссылку в компонент строницы ??? -->
    <a class="form__forgot-pass" href="">Забыли пароль?</a>

    <button class="form__button" >Войти</button>
  </form>
</template>

<script>
export default {
  name: "AuthForm"
}
</script>

<style lang="scss" scoped>

@import "src/assets/scss/variables.scss";

.form {
  @include flex-column-center;
    input {
    width: 335px;
    height: 45px;
    border: 1px solid #646464;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding-left: 21px;
    @include main-font-normal(22px);
  }
  &__login {
     margin-top: 87px;
   }
  &__password {
     position: relative;
     margin-top: 21px;
  &__eye {
     position: absolute;
     top: 13px;
     right: 13px;
     width: 23px;
     height: 18px;
     z-index: 10;
   }
  &__eye:hover {
     cursor: pointer;
   }
  }
  &__button {
     width: 136px;
     height: 45px;
     background-color: $color-main;
     border-radius: 10px;
     border: none;
     margin-top: 47px;
     @include main-font-normal(26px);
     color: #FFFFFF;
   }
  &__forgot-pass {
     @include main-font-normal(16px);
     margin-top: 20px;
     color: #000000;
     text-decoration: none;
   }
  }
</style>