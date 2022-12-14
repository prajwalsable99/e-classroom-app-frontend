import React, { useState } from 'react'

import { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'



const CreateNote = () => {
    const context=useContext(NoteContext);
    const {addNote}= context;
    const [note,setNote]=useState({title:"",desc:""})

    const handleclick=(e)=>{
        e.preventDefault();
        console.log(note.title,note.desc);
        
        addNote(note.title,note.desc)
        setNote({title:"",desc:""})
        
    }
    const onChange=(e)=>{
        //VVIP
        
        setNote({...note,[e.target.name]:e.target.value})
    }

  return (
    <div>
       <div className='container my-5'>
      {/* <Alert type="success" msg="clicked"></Alert> */}
      <h2>Add a Note here</h2>
      <form >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input value={note.title}type="text" className="form-control" id="title" name="title"aria-describedby="emailHelp" onChange={onChange}/>
            
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Enter data</label>
          <textarea  value={note.desc} className="form-control" rows="4" id="desc " name='desc' onChange={onChange}/>
        </div>
       
        <button type="submit" disabled={ !(note.title.length!==0 && note.desc.length!==0)} className="btn btn-primary" onClick={handleclick} >Add Note</button>
      </form>

    </div>
    </div>
  )
}

export default CreateNote
