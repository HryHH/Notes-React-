import React from 'react';
     
function NotesItemBody({ name, tag }) {
 return (
   <div className="note-item__body">
     <h3 className="note-item__title">{name}</h3>
     <p className="note-item__username">{tag}</p>
   </div>
 );
}
 
export default NotesItemBody;