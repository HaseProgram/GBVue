<template>
  <div>
    <a href="#"><slot name="activator"></slot></a>
    <a href="#"><slot></slot></a>
    <a href="#"><slot></slot></a>
    <a href="#"><slot></slot></a>
    <a href="#"><slot></slot></a>
    <a href="#"><slot></slot></a>
  </div>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style>

</style>
