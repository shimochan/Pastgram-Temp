import { api_fetch } from "./api";

export async function active() {
    const res = await api_fetch("/auth/active");
    const { active } = await res.json();
    return active;
}
