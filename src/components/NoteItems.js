import React, { useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'
import { useContext } from 'react'
import CreateNote from './CreateNote'
const NoteItems = () => {

    const context=useContext(NoteContext);
    // const {notes,setNotes}= context;
    const {notes,getAllNotes}=context;

    useEffect(()=>{

      getAllNotes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div>
      <CreateNote></CreateNote>
      <h3>your notes</h3>
      { 
        notes.map((note)=>{return <NoteItem  key={note._id} note={note} ></NoteItem>})
      }
    </div>
  )
}

export default NoteItems
