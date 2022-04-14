import React from 'react';
import classes from './ProfileInfo.module.css'
import profileHeader from '../../../img/profileHeader.jpg'
import profileAva from '../../../img/myAva.jpg'

const ProfileInfo = () => {
  return (
    <div className={classes.info}>
      <img className={classes.header} src={profileHeader}></img>
      <div className={classes['profile-info']}>
        <img className={classes['profile-avatar']} src={profileAva} alt='мышка' />

        <div className={classes['profile-description']}></div>
      </div>
    </div>
  );
};

export default ProfileInfo;
