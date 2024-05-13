import { useState,useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import CreateArea from './Components/CreateArea'
import Note from './Components/Note'
import Footer from './Components/Footer'

function App() {
  // const [notes,setNotes]=useState([]);

  // const addNote = (newNote)=>{
  // setNotes(prevNotes => {
  //   return [...prevNotes,newNote];
  // })

  // };
  // function deleteNote(id){
  //   setNotes(prevNotes => {
  //     return prevNotes.filter((noteItem,index) => {
  //       return index !== id;
  //     })
  //   })
  

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Fetch notes from local storage when component mounts
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, newNote];
      localStorage.setItem('notes', JSON.stringify(updatedNotes)); // Update local storage
      return updatedNotes;
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((noteItem, index) => index !== id);
      localStorage.setItem('notes', JSON.stringify(updatedNotes)); // Update local storage
      return updatedNotes;
    });
  }
  
  return (
   <div className="App">
    <Header/>
    <CreateArea onAdd={addNote}/>
    {notes.map((noteItem,index) => {
      return (
         <Note
           key={index}
           id={index}
           title={noteItem.title}
           content={noteItem.content}
           onDelete={deleteNote}
         />
      );
    })}
    <Footer/>
   </div>
  )
}

export default App
