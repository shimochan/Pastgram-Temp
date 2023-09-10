'use client'

import { usePathname, useRouter } from "next/navigation";
import { useQuery } from "react-query";
import { active } from "../lib/auth_api";
import { useEffect, useMemo, createContext } from "react";

export const ActiveContext = createContext();

export function Auth({ children }) {
    const { isLoading, data } = useQuery('active', active);
    const router = useRouter();
    const path = usePathname();
    const bypass = useMemo(() => (["/signin", "/signup"].includes(path)), [path]);

    useEffect(() => {
        if (isLoading || bypass) {
            return;
        } 

        if (!data) {
            router.push(`/signin?redirect=${path}`);
        }
    }, [isLoading, data, bypass]);

    const content = useMemo(() => {
        if (isLoading) {
            return (<pre>Loading</pre>);
        }

        if (!data && !bypass) {
            return (<pre>Redirect to login</pre>);
        }

        return (
            <>{children}</>
        );
    }, [isLoading, data, bypass, children]);

    const isActive = useMemo(() => (
        !isLoading && !!data
    ), [isLoading, data]);

    return (
        <ActiveContext.Provider value={isActive}>
            {content}
        </ActiveContext.Provider>
    );
}
