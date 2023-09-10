import { api_fetch, api_fetch_with_body } from "./api";

export async function upload(image) {
    const formData = new FormData();
    formData.append('image', image);
    const res = await api_fetch_with_body("/storage/upload", "POST", formData);
    const { image_path } = await res.json();
    return image_path;
}

export async function download(image_path) {
    const params = { image_path };
    const res = await api_fetch("/storage/download", "GET", params);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    return url;
}