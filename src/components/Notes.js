import React from 'react'
import Note from './Note'

const Notes = (props) => {

    const notes = props.notes
    const note = props.note
    const setNotes = props.setNotes
    
    return (
        <div className='notes-container'>
            {
                (notes && notes.length > 0) ? notes.map((note,index) => <Note key={index} notes={notes} note={note} setNotes={setNotes}/>) : null
            }
        </div>
    )
}

export default Notes
