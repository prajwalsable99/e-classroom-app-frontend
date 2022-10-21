import React from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'
import { useContext } from 'react'
const NoteItems = () => {

    const context=useContext(NoteContext);
    const {notes,setNotes}= context;
  return (
    <div>
      <h3>your notes</h3>
      { 
        notes.map((note)=>{return <NoteItem  key={note._id} note={note} ></NoteItem>})
      }
    </div>
  )
}

export default NoteItems
