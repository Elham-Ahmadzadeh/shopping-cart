<template>
  <section class="login is-pimary is-medium">
    <div class="container mt-5">
      <div class="card">
        <div class="card-body">
          <div class="alert alert-danger" v-show="inform">{{ inform }}</div>
          <h3 class="mt-2 mb-3">Login</h3>
          <form @submit.prevent>
            <div class="form-group">
              <input
                v-model="userName"
                class="form-control"
                placeholder="username (user@yahoo.se)"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                v-model.lazy="password"
                class="form-control"
                placeholder="Password (123)"
              />
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  <small>
                    Remember me
                  </small>
                </label>
              </div>
            </div>

            <button
              type="submit"
              @click="sendForm"
              class="btn
              btn-primary btn-block"
            >
              Login
            </button>

            <button
              type="submit"
              class="btn btn-dark
              btn-block"
            >
              Become a member
            </button>
            <small id="emailHelp" class="form-text"
              ><a href="#"> Have you forgotten your password?</a></small
            >
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'LoginMember',

  data() {
    return {
      userName: '',
      password: '',
      inform: '',
    }
  },
  methods: {
    sendForm() {
      if (this.userName === 'user@yahoo.se' && this.password === '123') {
        localStorage.setItem('auth', this.userName)
        if (this.user !== 'undefined') {
          this.$router.replace({
            name: 'ProfilePage',
            params: { user: 'sima' },
          })
        }
      } else {
        this.inform = `You don't have an account. Would you like to become a member?`
      }
    },
  },
}
</script>
<style lang="scss" scoped>
$blue: #665df5;
$light: #f8f9fa;
$dark: #042342;
$transparent: rgba(39, 3, 3, 0.226);
.login {
  background-image: url('../assets/shoes.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
}
.card {
  background: $transparent;
}
.card-body {
  padding: 4.25rem;
  margin-top: 2rem;
}
.form-check {
  padding-top: 1.25rem;
}
.mb-3 {
  text-align: center;
  .btn-primary {
    background-color: $blue;

    .btn-block + .btn-block {
      margin-top: 1.5rem;
    }
  }
}
.mt-5 {
  margin-top: 0 !important;
}
@media (min-width: 900px) {
  .container {
    max-width: 703px;
  }
}
</style>
