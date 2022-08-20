import React, { Component } from 'react'
import NotesItem from './NotesItem'
 
export class NotesList extends Component {
  render() {
    return (
        this.props.notes.length > 0 ?
          <div className='notes-list'>
            {
              this.props.notes.map((note) => (
                <NotesItem 
                  key={note.id} 
                  id={note.id} 
                  onDelete={this.props.onDelete}
                  {...note}
                  />
              ))
            }
          </div> :
          <p className='notes-list__empty-message'>Tidak ada catatan</p>        
    )
  }
}
 
export default NotesList