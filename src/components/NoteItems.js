import React, { useEffect, useRef, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'
import { useContext } from 'react'
import CreateNote from './CreateNote'
const NoteItems = () => {

  const context = useContext(NoteContext);
  // const {notes,setNotes}= context;
  const { notes, getAllNotes,editNote } = context;


  useEffect(() => {

    getAllNotes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //update fun

  const [note,setNote]=useState({id:"",title:"",desc:""});


  const noteUpdater = (currnote) => {
    ref.current.click();
    setNote(currnote);
    

  }

  const ref = useRef(null);
  const ref2 = useRef(null);


  const handleclick = (e) => {
    e.preventDefault();
    console.log("updating",note)
    editNote(note)
    ref2.current.click();


  }
  const onChange = (e) => {
    //VVIP

    setNote({...note,[e.target.name]:e.target.value})
  }



  return (
    <div>
      <CreateNote></CreateNote>

      {/* update note  */}


      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>


      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">----</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <form >
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" value={note.title} id="title" name="title" aria-describedby="emailHelp" onChange={onChange} />

                </div>
                <div className="mb-3">
                  <label htmlFor="desc" className="form-label">Enter data</label>
                  <textarea className="form-control" rows="4" id="desc "  value={note.desc} name='desc' onChange={onChange} />
                </div>


              </form>
            </div>
            <div className="modal-footer">
              <button  ref={ref2} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleclick}> Save changes</button>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------- */}










      <h3>your notes</h3>
      {
        notes.map((note) => { return <NoteItem key={note._id} note={note} noteUpdater={noteUpdater} ></NoteItem> })
      }
    </div>
  )
}

export default NoteItems
