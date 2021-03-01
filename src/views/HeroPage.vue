<template>
  <div class="hero">
    <main>
      <article class="hero-content">
        <transition appear appear-active-class="heading-enter-active">
          <h1 class="heading">Time for a wardrobe refresh</h1>
        </transition>
      </article>
      <article class="hero-btns">
        <router-link to="/product"
          ><button type="button" class="explore-btn">
            SHOP NOW
          </button></router-link
        >
        <router-view />
      </article>
    </main>
  </div>
</template>
<script>
export default {
  name: 'HeroPage',
}
</script>
<style lang="scss" scoped>
$black: #191920;
$white: #eee;
@mixin btnStyle($color) {
  box-shadow: 0 1px 0 darken($color, 10%);
  background-color: $color;
  &:hover,
  &:active {
    background-color: lighten($color, 5%);
  }
}
.hero {
  background-image: url('../assets/hero.jpg');
  background-size: cover;
  background-position: center;
  color: $white;
  text-align: center;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  padding: 20rem 5rem;
  height: 80vh;
  .hero-content {
    margin-top: 0;
  }
  a {
    text-decoration: none;
    color: $white;
  }
  .hero-btns {
    padding: 1em 1em;
    box-sizing: border-box;
    .explore-btn {
      @include btnStyle($black);
      color: $white;
      padding: 1rem 2rem;
      font-size: 23px;
      border-radius: 12px;
      border: none;
    }
  }
}
.heading-enter-active,
.heading-leave-active {
  animation: show 5s ease-in;
}
@media (min-width: 1000px) {
  .hero {
    height: 100vh;
    background-attachment: fixed;
  }
  h1 {
    margin-bottom: 0;
    font-size: 54px;
    padding: 2rem;
  }
  .hero-content {
    margin-top: 8rem;
    padding: 4em 1em;
  }
}
@keyframes show {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
