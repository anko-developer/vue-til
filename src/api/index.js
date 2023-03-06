import axios from 'axios';

const instance = axios.create({
	// baseURL: 'http://localhost:3000/',
	baseURL: import.meta.env.VITE_APP_API_URL,
});

function registerUser(userData) {
	// const url = 'http://localhost:3000/signup';
	// return axios.post('http://localhost:3000/signup', userData);
	return instance.post('signup', userData);
}

function loginUser(userData) {
	return instance.post('login', userData);
}
export { registerUser, loginUser };
