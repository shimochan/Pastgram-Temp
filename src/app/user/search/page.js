'use client'

import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import TextField from '@mui/material/TextField';
import { InputAdornment, Avatar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import UserList from '@/app/components/UerList';
import { search_users } from '@/app/lib/page_api';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { isLoading, data } = useQuery(['search', searchQuery], () => search_users(searchQuery));
  useEffect(() => {
      console.log(data);
  }, [data]);

  function handleChange(query) {
    if (query == searchQuery) {
      return;
    }
    setSearchQuery(query);
  }

  return (
    <div>
      <TextField
        variant="outlined"
        placeholder="user name"
        fullWidth
        value={searchQuery}
        onChange={(e) => handleChange(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      {data ? (
        <UserList users={data.users}/>
      ):(
        <></>
      )}
    </div>
  );
};

export default SearchPage;
