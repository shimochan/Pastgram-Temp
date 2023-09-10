import { api_fetch } from "./api";

export async function login(name, password) {
    return await api_fetch("/auth/login", "POST", { name, password })
            .then(() => {
                return true;
            })
            .catch(() => {
                return false;
            });
}

export async function active() {
    const res = await api_fetch("/auth/active");
    const { active } = await res.json();
    return active;
}
