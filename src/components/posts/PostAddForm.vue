<template>
	<div class="contents">
		<h1 class="page-header">Create Post</h1>
		<div class="form-wrapper">
			<form class="form" @submit.prevent="submitForm">
				<div>
					<label for="title">Title: </label>
					<input id="title" type="text" v-model="title" />
					<template v-if="!isTitleValid">
						<p class="validation-text warning">
							제목은 10자 이하로 작성해주세요.
						</p>
					</template>
				</div>
				<div>
					<label for="contents">Contents: </label>
					<textarea id="contents" rows="5" v-model="contents" />
					<template v-if="!isContentsValid">
						<p class="validation-text warning">
							내용은 200자 이하로 작성해주세요.
						</p>
					</template>
				</div>
				<button class="btn" type="submit">Create</button>
			</form>
			<p class="log">{{ logMessage }}</p>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { createPost } from '@/api';

const title = ref('');
const contents = ref('');
const logMessage = ref(null);

const isTitleValid = computed(() => {
	return title.value.length <= 10;
});

const isContentsValid = computed(() => {
	return contents.value.length <= 200;
});

const submitForm = async () => {
	try {
		const { data } = await createPost({
			title: title.value,
			contents: contents.value,
		});
		console.log(data);
	} catch (error) {
		logMessage.value = error.response.data.message;
		console.log(error.response.data.message);
	}
};
</script>

<style lang="scss" scoped>
.form-wrapper {
	.form {
		width: 100%;
	}
}
</style>
