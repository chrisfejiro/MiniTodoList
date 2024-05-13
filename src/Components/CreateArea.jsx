import React, { useState } from 'react'
import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

const CreateArea = (props) => {
    const [isExpanded,setExpanded] = useState(false);

   const [note,setNote] = useState({
    title:"",
    content:""
   })
    const handleChange=(event)=>{
         const {name,value}=event.target;
         setNote(prevNote => {
            return{
                ...prevNote,
                [name]:value
            };
         })
    };

    function submitNote(event){
       props.onAdd(note);
       setNote({
        title:"",
        content:""
     });
     event.preventDefault();
    };
    
    function expand(){
        setExpanded(true);
    }

  return (
    <div>
        <form className="create-note">
            {isExpanded && (
                <input 
                    type="text" 
                    name="title"
                    id="" 
                    onChange={handleChange}
                    value={note.title}
                    placeholder='Title' 
                />
             )}
         
             <textarea 
               name="content"
               rows={isExpanded ? 3 : 1}
              onClick={expand}
               placeholder='Take a note ...'
               onChange={handleChange}
               value={note.content}
            />
            <Fab onClick={submitNote}>
                <AddIcon/>
            </Fab>
          
        </form>
    </div>
  )
}

export default CreateArea