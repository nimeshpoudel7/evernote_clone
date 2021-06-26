import React from 'react'
import useInput from '../../customHook/useInput'
const Form = () => {
    const[title,bindTitle,clearTitle]=useInput()
    const[content,bindContent,clearContent]=useInput()
    const submitHandler=(event)=>{
        event.preventDefault()
        console.log({title})
        console.log(content)
        clearTitle()
        clearContent()

    }
    return (
        <div className="section">
            <form onSubmit={submitHandler} className='white'>
                <h5 className="grey-text text-darken-2">New Notes</h5>
                {/* <div className="row"> */}

                    <div className="input-field">
                        <input {...bindTitle} id="note_title" type="text" className="validate"/>
                        <label className="active" htmlFor="note_title">Note title</label>
                    </div>
                    <div className="input-field">
                        <textarea {...bindContent} id="note_content" className="materialize-textarea"></textarea>
                        <label htmlFor="note_content">note content</label>
                    </div>
                    <button className=" waves-light btn green">button</button>
                {/* </div>    */}
            </form>
        </div>
    )
}

export default Form
