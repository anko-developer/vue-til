<template>
	<AppHeader />
	<router-view></router-view> 
</template>

<script setup>
import AppHeader from './components/common/AppHeader.vue';
</script>

<style lang="scss">
@import './assets/css/reset.css';
@import './assets/css/common.css';
</style>
