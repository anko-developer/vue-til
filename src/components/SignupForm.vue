<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">ID: </label>
			<input id="username" type="text" v-model="username" />
		</div>
		<div>
			<label for="password">PW: </label>
			<input id="password" type="password" v-model="password" />
		</div>
		<div>
			<label for="nickname">NickName: </label>
			<input id="nickname" type="text" v-model="nickname" />
		</div>
		<button type="submit">회원 가입</button>

		<p>{{ logMessage }}</p>
	</form>
</template>

<script setup>
import { registerUser } from '@/api';
import { ref } from 'vue';

const username = ref(null);
const password = ref(null);
const nickname = ref(null);
const logMessage = ref('');

const submitForm = async () => {
	const userData = {
		username: username.value,
		password: password.value,
		nickname: nickname.value,
	};
	const { data } = await registerUser(userData);

	logMessage.value = `${data.username}님이 가입되었습니다.`;
	initForm();
};

const initForm = () => {
	username.value = '';
	password.value = '';
	nickname.value = '';
};
</script>

<style lang="scss" scoped></style>
