import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import classes from './DialogList.module.css'

const DialogList = () => {
  let dialogsData = [
    {
      id: '1',
      name: 'Yra',
    },
    {
      id: '2',
      name: 'Vera',
    },
    {
      id: '3',
      name: 'Lera',
    },
    {
      id: '4',
      name: 'Max',
    },
  ];
  
  return (
    <div className={classes.dialog_list}>
      {dialogsData.map((dialog) => (
        <DialogItem name={dialog.name} id={dialog.id}></DialogItem>
      ))}
    </div>
  );
};

export default DialogList;
