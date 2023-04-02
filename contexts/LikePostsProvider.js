import React, { useState, useContext, createContext } from 'react';


const LikedPostsContext = createContext();

const LikedPostsProvider = ({ children }) => {
  const [likedPosts, setLikedPosts] = useState([]);

  const addLikedPost = (post) => {
    setLikedPosts([...likedPosts, post]);
  };

  const removeLikedPost = (post) => {
    const updatedLikedPosts = likedPosts.filter((likedPost) => likedPost.id !== post.id);
    setLikedPosts(updatedLikedPosts);
  };

  const value = {
    likedPosts,
    addLikedPost,
    removeLikedPost,
  };

  return (
    <LikedPostsContext.Provider value={value}>
      {children}
    </LikedPostsContext.Provider>
  );
};

const useLikedPosts = () => {
  const context = useContext(LikedPostsContext);
  if (context === undefined) {
    throw new Error('useLikedPosts must be used within a LikedPostsProvider');
  }
  return context;
};

export { LikedPostsProvider, useLikedPosts };