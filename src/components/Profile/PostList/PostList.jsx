import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './PostList.module.css';
import Post from './PostItem/PostItem';
const MyPosts = () => {
  return (
    <div className={classes.wrapper}>
      <h3>Posts</h3>
      <div className={classes.postForm}>
        <textarea maxlength='445' className={classes.postForm_textArea} name="" id=""></textarea>
        <Button txt='Post'/>
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
