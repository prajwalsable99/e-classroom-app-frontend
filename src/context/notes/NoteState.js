import React from "react";
import { useState } from "react";
import NoteContext from "./NoteContext";



const NoteState = (props) => {

  const notesInitial = [

  ]
  const [notes, setNotes] = useState(notesInitial)


  const getAllNotes= async()=>{

    // const host = "http://localhost:5000/api/notes/"
    const atoken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1MWE0NTk5Njc0OGViYjA3NjQ3N2I5In0sImlhdCI6MTY2NjI5NDg3M30.ECR1FqE_25RJv9XDAr93vIUV1Iq_dIyhrd_X6m3WGwo';
    const response = await fetch(`http://localhost:5000/api/notes/fetchAllNotes`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': atoken
      }
    });
    const json=await response.json();
    // console.log(json);
    setNotes(json);


  }

  const addNote = async(title, desc) => {
    // console.log("adding new note");
    // const note = { "_id": "6351a533330096748ebb076477c3", "user": "6351a45996748ebb076477b9", "title": title, "desc": desc, "__v": 0 };
    // setNotes(notes.concat(note));

    // const host = "http://localhost:5000/api/notes/"
    const response = await fetch(`http://localhost:5000/api/notes/AddNote`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1MWE0NTk5Njc0OGViYjA3NjQ3N2I5In0sImlhdCI6MTY2NjI5NDg3M30.ECR1FqE_25RJv9XDAr93vIUV1Iq_dIyhrd_X6m3WGwo'
      },

      body: JSON.stringify({title, desc})
    });
    const note = await response.json();
    setNotes(notes.concat(note))


  }
  const delNote = async(val) => {

    console.log("delete note with id:" + val);
    const newnotes = notes.filter((note) => { return note._id !== val })
    setNotes(newnotes);

    const atoken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1MWE0NTk5Njc0OGViYjA3NjQ3N2I5In0sImlhdCI6MTY2NjI5NDg3M30.ECR1FqE_25RJv9XDAr93vIUV1Iq_dIyhrd_X6m3WGwo';
    const response = await fetch(`http://localhost:5000/api/notes/deleteNote/${val}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': atoken
      }
    });
    const json=await response.json();
    console.log(json);
    


  }
  const updateNote = async (id, title, desc) => {


    //fetch note
    // const host = "http://localhost:5000/api/notes/"
    // const response = await fetch(`${host}updateNote/6351aea6a32a3a5f3901bc22`, {
    //   method: 'POST',
    //   mode: 'cors',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1MWE0NTk5Njc0OGViYjA3NjQ3N2I5In0sImlhdCI6MTY2NjI5NDg3M30.ECR1FqE_25RJv9XDAr93vIUV1Iq_dIyhrd_X6m3WGwo'
    //   },

    //   body: JSON.stringify({})
    // });
    // return response.json();



  }



  return (


    <NoteContext.Provider value={{ notes, setNotes, delNote, addNote, updateNote ,getAllNotes}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;