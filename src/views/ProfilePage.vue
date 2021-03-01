<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body text-center">
            <section class="background-img"></section>
            <h2 key="h2">{{ user }}</h2>
            <p key="p1">bdbd@shop.com</p>
            <p key="p2">123456678</p>
          </div>
          <div class="card-footer">
            <button
              class="btn btn-outline-success btn-sm
            float-right"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProfilePage',
  data() {
    return {
      user: 'sima',
    }
  },
}
</script>
<style scoped>
.mt-5 {
  background: aliceblue;
}
.col-md-6 {
  max-width: 67%;
}
.background-img {
  background-image: url('../assets/woman-with-scarf.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 50vh;
  width: 32vw;
}
.user {
  color: black;
  font-size: 2.5rem;
}
</style>
