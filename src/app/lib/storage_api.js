import { api_fetch } from "./api";

export async function download(image_path, mime) {
    const params = { image_path, mime };
    const res = await api_fetch("/storage/download", "GET", params);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    console.log(blob.size)
    return url;
}