import React from 'react';
import NotesItemBody from './NotesItemBody';
import DeleteButton from './DeleteButton';
 
function NotesItem({name, tag, id, onDelete }) {
 return (
   <div className="note-item">
     <NotesItemBody name={name} tag={tag} />
     <DeleteButton id={id} onDelete={onDelete} />
   </div>
 );
}
 
export default NotesItem;