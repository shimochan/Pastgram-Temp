import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Paper,
  TextField,
  IconButton,
} from '@mui/material';
import { Send } from '@mui/icons-material';
import styles from "./comment.module.css";

const Comment = ({ comments, addComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      addComment(newComment);
      setNewComment('');
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '10px' }}>
      <Box className={styles.oneaddcomment}>
        <Avatar className={styles.usericon} />
        <TextField
          className={styles.addbox}
          label="Add a comment"
          fullWidth
          value={newComment}
          onChange={handleCommentChange}
        />
        <IconButton onClick={handleCommentSubmit} style={{ color: "#03A9F4" }}>
          <Send />
        </IconButton>
      </Box>
      <Box mt={2}>
        {comments.map((comment, index) => (
          <div key={index} className={styles.addedcommentbox}>
            <Avatar />
            <div className={styles.idcomment}>
              <div className={styles.userid}>userID</div>
              <span className={styles.addedcomment}>{comment}</span>
            </div>
          </div>
        ))}
      </Box>
    </Paper>
  );
};

export default Comment;
