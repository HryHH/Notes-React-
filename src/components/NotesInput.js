import React from 'react';
     
class NotesInput extends React.Component {
    constructor(props) {
      super(props);
    
      // inisialisasi state
      this.state = {
        name: '',
        tag: '',
      }
    
      this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
      this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
      this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
    
    onNameChangeEventHandler(event) {
      this.setState(() => {
        return {
          name: event.target.value,
        }
      });
    }
    
    onTagChangeEventHandler(event) {
      this.setState(() => {
        return {
          tag: event.target.value,
        }
      });
    }
    
    onSubmitEventHandler(event) {
      event.preventDefault();
      this.props.onAddNoteHandler(this.state);
    }
    render() {

        return (
          <form className='note-input' onSubmit={this.onSubmitEventHandler}>
            <input type="text" placeholder="Judul" value={this.state.name} onChange={this.onNameChangeEventHandler} />
            <input type="text" placeholder="Tuliskan Catatanmu" value={this.state.tag} onChange={this.onTagChangeEventHandler} />
            <button type="submit">Tambah</button>
          </form>
        )
      }
     }
 
export default NotesInput;