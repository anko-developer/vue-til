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

// 전역 필터
app.config.globalProperties.$filters = {
	formatDate(value) {
		return new Date(value);
	},
};

app.mount('#app');
