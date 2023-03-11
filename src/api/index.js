import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// instance, interceptors 설정
function createInstance() {
	const instance = axios.create({
		baseURL: import.meta.env.VITE_APP_API_URL,
	});

	return setInterceptors(instance);
}
const instance = createInstance();

function registerUser(userData) {
	// return axios.post('http://localhost:3000/signup', userData);
	return instance.post('signup', userData);
}

function loginUser(userData) {
	return instance.post('login', userData);
}
export { registerUser, loginUser };
