<template>
	<div class="contents">
		<h1 class="page-header">Edit Post</h1>
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
				<button class="btn" type="submit">Edit</button>
			</form>
			<p class="log">{{ logMessage }}</p>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { fetchPost, editPost } from '@/api/posts';

const route = useRoute();
const router = useRouter();
const emitter = inject('emitter');
const title = ref('');
const contents = ref('');
const logMessage = ref(null);

const isTitleValid = computed(() => {
	return title.value.length <= 10;
});

const isContentsValid = computed(() => {
	return contents.value.length <= 200;
});

const created = async () => {
	const id = route.params.id;
	const { data } = await fetchPost(id);
	title.value = data.title;
	contents.value = data.contents;
};
created();

const submitForm = async () => {
	const id = route.params.id;
	try {
		await editPost(id, {
			title: title.value,
			contents: contents.value,
		});
		emitter.emit('refresh');
		router.push({ name: 'main' });
	} catch (error) {
		logMessage.value = error;
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
