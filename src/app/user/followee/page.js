'use client'

import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import UserList from "@/app/components/UerList";
import { Title } from '@/app/components/Title';
import { get_followee } from '@/app/lib/page';

const Followee = () => {
    const [followee, setFollowee] = useState([]);
    const { isLoading, data } = useQuery('followee', () => get_followee(1));
    useEffect(() => {
        console.log(data);
    }, [data]);

    useEffect(() => {
        // Mocking search results here, replace with actual API call or data source
        const mockResults = [
        { id: 1, name: 'Tanaka' },
        { id: 2, name: 'Suzuki' },
        { id: 3, name: 'Nakayama' },
        ];
        setFollowee(mockResults);
    }, []);

    return (
        <>
            <Title title="フォロー中"></Title>
            <UserList users={followee}/>
        </>
    );
}

export default Followee;
