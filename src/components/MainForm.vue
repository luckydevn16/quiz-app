<template>
  <from class="main-form" id="mainForm">
    <slot></slot>
  </from>
</template>

<script>
export default {
  name: 'MainForm'
}
</script>

<style>
form.main-form {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
</style>