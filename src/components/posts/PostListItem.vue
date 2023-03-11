<template>
	<li>
		<div class="post-title">{{ item.title }}</div>
		<div class="post-contents">{{ item.contents }}</div>
		<div class="post-time">{{ item.createdAt }}</div>
	</li>
</template>

<script setup>
defineProps({
	item: {
		type: Object,
		required: true,
	},
});
</script>

<style lang="scss" scoped></style>
