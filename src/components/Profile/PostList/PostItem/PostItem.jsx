import React from 'react';
import s from './PostItem.module.css';
const Post = (props) => {
  return (
    <div className={s.item}>
      <div>
        <img src='https://u.kanobu.ru/articles/pics/7e6dc974-43f4-4ad0-9a55-2465566e9662.jpg'></img>
      </div>
      post#
      <div>
        <span>{ props.likesCount } likes</span>
      </div>
    </div>
  );
};

export default Post;
