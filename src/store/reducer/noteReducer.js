const initialState = {
note_to_edit:{}
}

const noteReducer=(state = initialState, { type, payload }) => {
    switch (type) {

    case "Edit_note":
        return payload 

    default:
        return state
    }
}
export default noteReducer
