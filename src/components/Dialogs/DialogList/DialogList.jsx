import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import classes from './DialogList.module.css'

const DialogList = () => {
  let dialogsData = [
    {
      name: 'Yra',
      id: '1',
    },
    {
      name: 'Vera',
      id: '2',
    },
    {
      name: 'Lera',
      id: '3',
    },
    {
      name: 'Max',
      id: '4',
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
