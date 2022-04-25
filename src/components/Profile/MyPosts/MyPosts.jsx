import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
  return (
    <div className={classes.wrapper}>
      <h3>Posts</h3>
      <div className={classes.postForm}>
        <textarea name="" id=""></textarea>
        <button>Send</button>
      </div>
      <div className={classes.posts}>
        <Post message='Hi how are u?' likesCount='11' />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
