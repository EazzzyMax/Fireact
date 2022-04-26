import React from 'react';
import MyPosts from './PostList/PostList';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div className={classes.profile_wrapper}>
      <ProfileInfo/>
      <MyPosts/>
    </div>
  );
};

export default Profile;
