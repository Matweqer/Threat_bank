<template>
  <div class="auth">
    <img
      class="auth__img"
      src="@/assets/images/auth-page/auth-bg.png"
      alt="background"
    >
    <div class="auth__container">
      <h1 class="auth__title">
        Вход в систему
      </h1>
      <AuthForm class="auth__form" />
      <p class="auth__question">
        Вы еще не зарегистрированы?
      </p>
      <a
        class="auth__registration"
        href=""
      >Зарегистрироваться</a>
    </div>
  </div>
</template>

<script>
import AuthForm from "@/pages/auth/AuthForm";

export default {
  name: "AuthView",
  components: {
    AuthForm
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

  .auth {
    display: flex;
    @include full-display;
    background-color: $background-color;
    &__img {
      width: 60%;
    }
    &__container {
      @include flex-column-center;
      height: 100%;
      width: 40%;
    }
    &__title {
     margin-top: 130px;
     @include main-font(32px, 500)
   }
    &__question {
      @include main-font(16px, 400);
      margin-top: 47px;
    }
    &__registration {
      @include main-font(16px, 400);
      margin-top: 20px;
      color: #00126D;
      text-decoration: none;
    }
  }

</style>