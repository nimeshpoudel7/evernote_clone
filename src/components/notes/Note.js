import React from "react";
import { deleteNote } from "../../store/action/noteAction";
import { useDispatch } from "react-redux";
import { favNotes } from "../../store/action/noteAction";
import moment from "moment";
import { Link } from "react-router-dom";
const Note = ({ notevaluefromlist }) => {
  // console.log(notevaluefromlist.favorite)
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteNote(notevaluefromlist));
  };
  const favHandler = () => {
    dispatch(favNotes(notevaluefromlist));
  };
  const EditnoteHandler=()=>{
    dispatch({type:'Edit_note',payload:notevaluefromlist})
  }
  console.log(notevaluefromlist.favorite);
  const favMarkup = notevaluefromlist.favorite ? "favorite" : "favorite_border";
  return (
    <div className='Note white'>
      <div className='right-align'>
        <i
          className='material-icons red-text'
          style={{ cursor: "pointer" }}
          onClick={favHandler}>
          {favMarkup}
        </i>
        <i
          className='material-icons'
          style={{ cursor: "pointer" }}
          onClick={deleteHandler}>
          delete_forever
        </i>
      </div>
      <Link to={"/note/" + notevaluefromlist.id}>
        <h5 className='black-text'>{notevaluefromlist.title}</h5>
      </Link>
      <p className='turncate'>{notevaluefromlist.content}</p>
      <p className='grey-text'>
        {moment(notevaluefromlist.createdAt.toDate()).fromNow()}
      </p>
      <div className='right-align'>
       <Link to={`/Editform/${notevaluefromlist.id}`}> <i className='material-icons black-text 'onClick={EditnoteHandler} style={{ cursor: "pointer" }}>
          edit
        </i></Link>
      </div>
    </div>
  );
};

export default Note;
