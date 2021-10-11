import React,{useState} from 'react'
import Notes from './Notes'

const CreateNote = (props) => {

    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addHandler = () => {
        if(title=='' || body==''){
            return;
        }
        let obj = {
            title,
            body,
            id : notes.length + 1
        }
        setNotes([...notes,obj])
        setBody('')
        setTitle('')
    }

    return (
        <>
            <div className='create-note'>
                <div style={{display:'flex'}}>
                    <input placeholder='Title' className='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <div className='add' onClick={addHandler}>add</div>
                </div>
                <textarea placeholder='Take a note...' rows='2' value={body} onChange={(e) => setBody(e.target.value)}></textarea>
            </div>
            {
                notes.length > 0 ? <Notes setNotes={setNotes} notes={notes} note={{title,body}}/> : null
            }
        </>
    )
}

export default CreateNote
