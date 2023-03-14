import { posts } from './index';

// 학습 노트 데이터 목록을 조회하는 API
function fetchPosts() {
	return posts.get('/');
}

// 특정 학습 노트 1개를 조회하는 API
function fetchPost(postId) {
	return posts.get(postId);
}

// 학습 노트 데이터를 생성하는 API
function createPost(postData) {
	return posts.post('/', postData);
}

// 학습 노트 데이터를 삭제하는 API
function deletePost(postId) {
	return posts.delete(postId);
}

// 학습 노트 데이터를 수정하는 API
function editPost(postId) {
	return posts.put(postId);
}

export { fetchPost, fetchPosts, createPost, deletePost, editPost };
