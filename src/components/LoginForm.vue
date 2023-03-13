<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="username">id:</label>
					<input id="username" type="text" v-model="username" />
					<p class="validation-text">
						<span class="warning" v-if="!isUsernameValid && username">
							Please enter an email address
						</span>
					</p>
				</div>
				<div>
					<label for="password">pw:</label>
					<input id="password" type="text" v-model="password" />
				</div>
				<button
					:disabled="!isUsernameValid || !password"
					type="submit"
					class="btn"
				>
					로그인
				</button>
			</form>
			<p class="log">{{ logMessage }}</p>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { validateEmail } from '@/utils/validation';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const username = ref('');
const password = ref('');
const logMessage = ref('');
const router = useRouter();
const store = useStore();

const isUsernameValid = computed(() => {
	return validateEmail(username.value);
});

const submitForm = async () => {
	try {
		// 비즈니스 로직
		const userData = {
			username: username.value,
			password: password.value,
		};

		// 비동기처리 후에 아래 router에 진입해야하기 때문에 await를 반드시 넣어줄 것
		await store.dispatch('LOGIN', userData);
		router.push({ name: 'main' });
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
