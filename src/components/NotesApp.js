import React from 'react';
import NotesList from './NotesList';
import { getData } from '../utils/data';
import NotesInput from './NotesInput';
 
class NotesApp extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     notes: getData(),
   }
 
   this.onDeleteHandler = this.onDeleteHandler.bind(this);
   this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
 }
 
 onDeleteHandler(id) {
   const notes = this.state.notes.filter(note => note.id !== id);
   this.setState({ notes });
 }
 
  onAddNoteHandler({ name, tag }) {
  this.setState((prevState) => {
    return {
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          name,
          tag,
        }
      ]
    }
  });
}

render() {


  return (
    <div className="note-app">
      <h1>Buat Catatan</h1>
      <h2>Tambah Catatan</h2>
      <NotesInput onAddNoteHandler={this.onAddNoteHandler} />
      <h2>Catatan aktif</h2>
      <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />     
    </div>
  );
}
}
 
export default NotesApp;