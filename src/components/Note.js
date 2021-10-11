import React from 'react'

const Note = (props) => {

    const {note,notes,setNotes} = props

    const deleteItem = (id) => {
        let updated = notes.filter((item) => {
            console.log(item.id)
            console.log(note.id)
            return id+1 != item.id
        })
        console.log(updated)
        setNotes(updated)
    }

    return (
        <div className='note' onDoubleClick={deleteItem}>
            <div>{note.title}</div>
            <div>{note.body}</div>
        </div>
    )
}

export default Note
