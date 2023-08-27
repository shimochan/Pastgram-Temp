"use client"

import React, { useState } from 'react';
import Comment from '../components/Comment';


const App = () => {
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments([comment,...comments ]);
  };

  return (
    <div>
      <Comment comments={comments} addComment={addComment} />
    </div>
  );
};

export default App;
