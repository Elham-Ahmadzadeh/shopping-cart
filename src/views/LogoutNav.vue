<template>
  <b-dropdown-item @click="logoutUser">Log out </b-dropdown-item>
</template>
<script>
export default {
  name: 'LogoutNav',
  methods: {
    logoutUser() {
      this.$router.push('/')
      this.$emit('logout-member')
    },
  },
}
</script>
