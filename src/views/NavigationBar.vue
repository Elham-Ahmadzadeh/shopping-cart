<template>
  <b-navbar toggleable="lg" type="dark" fixed="top" variant="primary">
    <li class="nav-item">
      <b-link :to="{ name: 'HeroPage' }">E-commerce</b-link>
    </li>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <li class="nav-item">
          <b-link class="link-items" :to="{ name: 'LoginMember' }"
            >log in</b-link
          >
        </li>
        <li class="nav-item">
          <b-link class="link-items" :to="{ name: 'ListProducts' }"
            >products</b-link
          >
        </li>
        <li class="nav-item">
          <b-link class="Cart" :to="{ name: 'ShoppingCart' }"></b-link>
        </li>
        <li class="nav-item">
          <b-link
            :to="{
              path: '/ProfilePage/:user',
              name: 'ProfilePage',
              component: 'ProfilePage',
              props: true,
            }"
          >
          </b-link>
        </li>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <profile-name :userIcon="true" />
        <b-nav-item-dropdown right>
          <logout-nav @logout-member="onLogoutMember" />
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-nav style="margin-left:1rem">
        <!--   offline and online are two different conditions -->
        <li class="nav-item" style="color: red" v-if="off">Offline</li>
        <li class="nav-item" style="color:white" v-if="on">Online</li>
      </b-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
import ProfileName from './ProfileName.vue'
import LogoutNav from './LogoutNav.vue'
export default {
  name: 'NavigtionBar',
  components: {
    ProfileName,
    LogoutNav,
  },
  data() {
    return {
      on: true,
      off: false,
    }
  },
  methods: {
    onLogoutMember() {
      console.log('logOut')
    },
  },
  mounted() {
    addEventListener('offline', () => {
      this.off = true
      this.on = false
    })
    addEventListener('online', () => {
      this.on = true
      this.off = false
    })
  },
}
</script>
<style lang="scss">
$navActive: rgb(252, 249, 249);
body {
  background-attachment: fixed;
}
#app {
  color: nav-bg;
}
a {
  color: $navActive !important;
}
.user {
  color: white;
  font-size: 24px;
  margin-top: 14px;
}
li {
  list-style: none;
}
a.dropdown-item {
  color: nav-bg !important;
}
@media (min-width: 900px) {
  a {
    margin-top: 1rem;
    padding-left: 3rem;
    font-size: 20px;
  }
}
</style>
