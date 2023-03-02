import { createRouter, createWebHistory } from 'vue-router';
import LoginPgae from '@/views/LoginPage.vue';
import SignupPage from '@/views/SignupPage.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const routes = [
	{
		path: '/',
		component: LoginPgae,
	},
	{
		path: '/login',
		name: 'Login',
		component: LoginPgae,
	},
	{
		path: '/sign',
		name: 'Sign',
		component: SignupPage,
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFoundView,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
