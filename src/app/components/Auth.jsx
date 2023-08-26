'use client'

import { usePathname, useRouter } from "next/navigation";
import { useQuery } from "react-query";
import { active } from "../lib/auth";
import { useEffect, useMemo } from "react";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function _Auth({ children }) {
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

    if (isLoading) {
        return (<pre>Loading</pre>);
    }

    if (!data && !bypass) {
        return (<pre>Redirect to login</pre>);
    }

    return (
        <>{children}</>
    );
}

export function Auth({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            <_Auth>
                {children}
            </_Auth>
        </QueryClientProvider>
    );
}