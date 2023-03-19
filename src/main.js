import { createApp } from 'vue';
import App from './App.vue';
import router from '@/routes';
import store from '@/store';
import mitt from 'mitt';

const emitter = mitt();
const app = createApp(App);
app.use(router);
app.use(store);
app.provide('emitter', emitter);

// 전역 필터를 이렇게 만들 수 있다
app.config.globalProperties.$filters = {
	formatDate(value) {
		const date = new Date(value);
		const year = date.getFullYear();
		let month = date.getMonth() + 1;
		month = month > 9 ? month : `0${month}`;
		const day = date.getDate();
		let hours = date.getHours();
		hours = hours > 9 ? hours : `0${hours}`;
		const minutes = date.getMinutes();
		return `${year}-${month}-${day} ${hours}:${minutes}`;
	},
};

app.mount('#app');
