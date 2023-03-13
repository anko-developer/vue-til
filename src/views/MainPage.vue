<template>
	<div class="main list-container contents">
		<h1 class="page-header">Today I Learned</h1>
		<template v-if="isLoading">
			<LoadingSpinner />
		</template>
		<template v-else>
			<ul>
				<PostListItem
					v-for="(postItem, index) in postItems"
					:key="index"
					:item="postItem"
				/>
			</ul>
		</template>
	</div>
	<router-link to="/add" class="create-button">
		<i class="ion-md-add"></i>
	</router-link>
</template>

<script setup>
import { ref } from 'vue';
import { fetchPosts } from '@/api/index';
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

const isLoading = ref(false);
const postItems = ref([]);
const fetchData = async () => {
	isLoading.value = true;
	const { data } = await fetchPosts();
	isLoading.value = false;
	postItems.value = data.posts;
	console.log(data);
};

fetchData();
</script>

<style lang="scss" scoped></style>
