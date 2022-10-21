import React from "react";
import { useState } from "react";
import NoteContext from "./NoteContext";



const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "6351a48e96748ebb076477bd",
            "user": "6351a45996748ebb076477b9",
            "title": "DSA",
            "desc": "GFG DATA Strcutures",
            "__v": 0
          },
          {
            "_id": "6351a50096748ebb076477c3",
            "user": "6351a45996748ebb076477b9",
            "title": "oop",
            "desc": "c cpp java",
            "__v": 0
          },
          {
            "_id": "6351aea6a32a3a5f3901bc22",
            "user": "6351a45996748ebb076477b9",
            "title": "dbms",
            "desc": "edited",
            "__v": 0
          }

    ]
    const [notes, setNotes] = useState(notesInitial)

    
    const delNode=(val)=>{

        console.log("delete note with id:" + val)

    }
   

    return (

        
            <NoteContext.Provider value={{ notes, setNotes,delNode }}>
                {props.children}
            </NoteContext.Provider>
            )
  }  

  export default NoteState;