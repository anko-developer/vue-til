<template>
	<li>
		<div class="post-title">{{ item.title }}</div>
		<div class="post-contents">{{ item.contents }}</div>
		<div class="post-time">
			{{ $filters.formatDate(item.createdAt) }}
			<!-- {{ item.createdAt }} -->
			<i class="icon ion-md-create" @click="routeEditPage(item._id)"></i>
			<i class="icon ion-md-trash" @click="deleteItem(item._id)"></i>
		</div>
	</li>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
import { deletePost } from '@/api/posts';

const props = defineProps({
	item: {
		type: Object,
		required: true,
	},
});

const router = useRouter();

const item = ref(props.item);
const emit = defineEmits(['refresh']);
const deleteItem = async id => {
	if (confirm('삭제하시겠습니까?')) {
		await deletePost(id);
		emit('refresh');
	}
};
const routeEditPage = id => {
	router.push(`/post/${id}`);
};
</script>

<style lang="scss" scoped></style>
