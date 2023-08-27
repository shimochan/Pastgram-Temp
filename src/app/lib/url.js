import "server-only";
import { headers } from "next/headers";

export function getDomain() {
    const headersList = headers();
    const domain = headersList.get("x-forwarded-host") || "";
    return domain;
}

export function getProtocol() {
    const headersList = headers();
    const protocol = headersList.get("x-forwarded-proto") || "";
    return protocol;
}

export function getPath() {
    const headersList = headers();
    const pathname = headersList.get("x-invoke-path") || "";
    return pathname;
}
