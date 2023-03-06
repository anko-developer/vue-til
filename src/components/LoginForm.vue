<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username"></label>
			<input id="username" type="text" v-model="username" />
		</div>
		<div>
			<label for="password"></label>
			<input id="password" type="password" v-model="password" />
		</div>
		<button type="submit">로그인</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script setup>
import { ref } from 'vue';
import { loginUser } from '@/api';
import { validateEmail } from '@/utils/validation';

const username = ref('');
const password = ref('');
const logMessage = ref('');

const submitForm = async () => {
	try {
		// 비즈니스 로직
		const userData = {
			username: username.value,
			password: password.value,
		};

		const { data } = await loginUser(userData);
		logMessage.value = `${data.user.username}님 환영합니다.`;
		// initForm();
	} catch (error) {
		// 에러 핸들링할 코드
		logMessage.value = error.response.data;
	} finally {
		initForm();
	}
};

const initForm = () => {
	username.value = '';
	password.value = '';
};
</script>

<style lang="scss" scoped></style>
