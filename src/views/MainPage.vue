<template>
	<div class="main list-container contents">
		<h1 class="page-header">Today I Learned</h1>
		<ul>
			<PostListItem
				v-for="(postItem, index) in postItems"
				:key="index"
				:item="postItem"
			/>
		</ul>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { fetchPosts } from '@/api/index';
import PostListItem from '@/components/posts/PostListItem.vue';

const postItems = ref([]);
const fetchData = async () => {
	const { data } = await fetchPosts();
	postItems.value = data.posts;
	console.log(data);
};

fetchData();
</script>

<style lang="scss" scoped></style>
