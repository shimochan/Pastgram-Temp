'use client'

import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { InputAdornment, Avatar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import UserList from '@/app/components/UerList';
import { Title } from '@/app/components/Title';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Mocking search results here, replace with actual API call or data source
    const mockResults = [
      { id: 1, name: 'Tanaka' },
      { id: 2, name: 'Suzuki' },
      { id: 3, name: 'Nakayama' },
    ];
    setSearchResults(mockResults);
  }, [searchQuery]);

  return (
    <>
    <Title title="ユーザーを探す"></Title>
    <div>
      
      <TextField
        variant="outlined"
        placeholder="user name"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <UserList users={searchResults}/>
    </div>
    </>
  );
};

export default SearchPage;
