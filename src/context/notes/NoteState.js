import React from "react";
import { useState } from "react";
import NoteContext from "./NoteContext";



const NoteState = (props) => {

  const notesInitial = [

  ]
  const [notes, setNotes] = useState(notesInitial)


  const getAllNotes = async () => {

    // const host = "http://localhost:5000/api/notes/"
    const atoken = localStorage.getItem('mytoken');
    const response = await fetch(`http://localhost:5000/api/notes/fetchAllNotes`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': atoken
      }
    });
    const json = await response.json();
    // console.log(json);
    setNotes(json);


  }

  const addNote = async (title, desc) => {
    // console.log("adding new note");
    // const note = { "_id": "6351a533330096748ebb076477c3", "user": "6351a45996748ebb076477b9", "title": title, "desc": desc, "__v": 0 };
    // setNotes(notes.concat(note));

    // const host = "http://localhost:5000/api/notes/"
    const response = await fetch(`http://localhost:5000/api/notes/AddNote`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('mytoken')
      },

      body: JSON.stringify({ title, desc })
    });
    const note = await response.json();
    setNotes(notes.concat(note))


  }
  const delNote = async (val) => {

    console.log("delete note with id:" + val);
    const newnotes = notes.filter((note) => { return note._id !== val })
    setNotes(newnotes);

    const atoken = localStorage.getItem('mytoken');
    const response = await fetch(`http://localhost:5000/api/notes/deleteNote/${val}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': atoken
      }
    });
    const json = await response.json();
    console.log(json);



  }
  const editNote = async (note) => {


    //fetch note
    const host = "http://localhost:5000/api/notes/"
    const response = await fetch(`${host}updateNote/${note._id}`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('mytoken')
      },

      body: JSON.stringify({ title: note.title, desc: note.desc })
    });
    const json = await response.json();
    console.log(json);
    
    let newnotes=JSON.parse(JSON.stringify(notes));
      for (let index = 0; index < newnotes.length; index++) {
        const element = newnotes[index]; 
        if (element._id === note._id) {

          newnotes[index].title=note.title;
          newnotes[index].desc=note.desc;
          break;
        }

      
    }
    setNotes(newnotes);

  }



  return (


    <NoteContext.Provider value={{ notes, setNotes, delNote, addNote, editNote, getAllNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;