import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
	return axios.create({
		baseURL: import.meta.env.VITE_APP_API_URL,
	});
}

// Axios 초기화 함수(instance, interceptors 설정)
function createInstanceWithAuth(url) {
	const instance = axios.create({
		baseURL: `${import.meta.env.VITE_APP_API_URL}${url}`,
	});

	return setInterceptors(instance);
}
const instance = createInstance();
const posts = createInstanceWithAuth('posts');

export { instance, posts };
