'use client'

import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { InputAdornment, Avatar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import styles from './style.module.css';

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

      <List>
        {searchResults.map((result) => (
          <ListItemButton key={result.id}>
            <Avatar className={styles.avatar}>{result.name[0].toUpperCase()}</Avatar>
            <Typography className={styles.name} variant="h6">{result.name}</Typography>
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};

export default SearchPage;
