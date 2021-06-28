import React from 'react'
import { deleteNote } from '../../store/action/noteAction'
import { useDispatch } from 'react-redux';
const Note = ({notevaluefromlist}) => {
    console.log(notevaluefromlist.favorite)
    const dispatch = useDispatch()
    const deleteHandler=()=>{
        dispatch(deleteNote(notevaluefromlist))
    }
    return (
        <div className='Note white'>
            <div className="right-align">
            <i className="material-icons red-text"style={{cursor:'pointer'}}>favorite</i>
            <i className="material-icons"style={{cursor:'pointer'}}onClick={deleteHandler}>delete_forever</i>
            </div>
           <h5 className="black-text">{notevaluefromlist.title}</h5>
            <p className='turncate'>{notevaluefromlist.content}</p>
            <p className='grey-text'>2day ago</p>
            <div className="right-align">
            <i className="material-icons "style={{cursor:'pointer'}}>edit</i>
            </div>
        </div>
    )
}

export default Note
