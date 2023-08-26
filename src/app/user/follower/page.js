'use client'

import { useState, useEffect } from 'react';
import UserList from "@/app/components/UerList";
import { Title } from '@/app/components/Title';

const Follower = () => {
    const [follower, setFollower] = useState([]);

    useEffect(() => {
        // Mocking search results here, replace with actual API call or data source
        const mockResults = [
        { id: 1, name: 'Tanaka' },
        { id: 2, name: 'Suzuki' },
        { id: 3, name: 'Nakayama' },
        ];
        setFollower(mockResults);
    }, []);

    return (
        <>
            <Title title="フォロワー"></Title>
            <UserList users={follower}/>
        </>
    );
}

export default Follower;
