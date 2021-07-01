
import {useState} from 'react'

const useInput = (initialState="") => {
    const [input, setInput] = useState(initialState)
    const clearInput = ()=>{
        setInput(initialState)
    }
    const bindForm={
        value:input,
        onChange:event=>{setInput(event.target.value)}
    }
    return[input,bindForm,clearInput]
}

export default useInput
