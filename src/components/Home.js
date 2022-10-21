import React from 'react'
import Alert from './Alert'
import NoteItems from './NoteItems'

const Home = () => {

     
  return (
    

    <div className='container my-5'>
      <Alert type="success" msg="clicked"></Alert>
      <h2>Add a Note here</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            
        </div>
        <div className="mb-3">
          <label htmlFor="exampleDesc" className="form-label">Enter data</label>
          <textarea  className="form-control" rows="4" id="exampleDesc"/>
        </div>
       
        <button type="submit" className="btn btn-primary">Add Note</button>
      </form>

      <NoteItems></NoteItems>
      
     

    </div>
  )
}

export default Home
