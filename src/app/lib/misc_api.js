import { api_fetch } from "./api";

export async function add_comment(post_id, content) {
    const params = { post_id, content };
    await api_fetch("/comment", "POST", params);
}

export async function add_like(post_id) {
    const params = { post_id };
    await api_fetch("/like", "POST", params);
}

export async function remove_like(post_id) {
    const params = { post_id };
    await api_fetch("/unlike", "POST", params);
}

export async function request_follow(user_id) {
    const params = { follower_id: user_id };
    await api_fetch("/follow", "POST", params);
}

export async function accept_follow(user_id) {
    const params = { followee_id: user_id };
    await api_fetch("/accept", "POST", params);
}
