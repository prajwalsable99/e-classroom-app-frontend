
import NoteContext from '../context/notes/NoteContext';
import { useContext } from 'react';
const NoteItem = (props) => {

    const context=useContext(NoteContext);
    const {delNote}= context;

    const noteitem = props.note;
    
  
    const noteUpdater=props.noteUpdater;
    


    return (


        <div className="card my-4">
            {/* title */}
            <div className="card-header">{noteitem.title} </div>
            {/* desc */}
            <div className="card-body">
                <blockquote className="blockquote mb-0"><p>{noteitem.desc}</p></blockquote>
            </div>
            < div className='container  algin-item-center'>
            <i className="fa-solid fa-pen" onClick={()=>{noteUpdater(noteitem)}}></i>
            <i className="fa-solid fa-trash" onClick={()=>{delNote(noteitem._id)}}></i>
            </div>
        </div>



    )
}

export default NoteItem
