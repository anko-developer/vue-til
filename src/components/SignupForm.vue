<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="username">id: </label>
					<input id="username" type="text" v-model="username" />
				</div>
				<div>
					<label for="password">pw: </label>
					<input id="password" type="text" v-model="password" />
				</div>
				<div>
					<label for="nickname">nickname: </label>
					<input id="nickname" type="text" v-model="nickname" />
				</div>
				<button type="submit" class="btn">회원 가입</button>
			</form>
			<p class="log">{{ logMessage }}</p>
		</div>
	</div>
</template>

<script setup>
import { registerUser } from '@/api';
import { ref, computed } from 'vue';
import { validateEmail } from '@/utils/validation';

const username = ref(null);
const password = ref(null);
const nickname = ref(null);
const logMessage = ref('');

const isUsernameValid = computed(() => {
	return validateEmail(username.value);
});

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

<style lang="scss" scoped>
input {
	&.is-error {
		border-color: red;
	}
}
</style>
