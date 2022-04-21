import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogList from './DialogList/DialogList';
import classes from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <DialogList/>
      <div className={classes.message_list}>
        <p className={classes.message}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, exercitationem.
        </p>
        <p className={classes.message}>
          Natus, quae quia corporis perferendis eligendi illo mollitia magnam aliquam. Loremss ipsum dolor sit amet
          consectetur adipisicing elit. Adipisci officia, nulla cupiditate ea corrupti, illo inventore ad maiores
          commodi veniam voluptate laudantium rerum ests, nobis accusamus consequatur quam deserunt velit.
        </p>
        <p className={classes.message}>Ex temporibus ullam veniam quo earum et voluptates animi ipsa!</p>
        <p className={classes.message}>Harum accusi sit consequuntur?</p>
        <p className={classes.message}>Assumenda unde odio, ad amet ipsam dicta veniam maiores facere!</p>
      </div>
    </div>
  );
};

export default Dialogs;
