
import { combineReducers } from "redux"
import {firebaseReducer} from 'react-redux-firebase'
// Add firebase to reducers
import { firestoreReducer } from 'redux-firestore'
const rootReducer = combineReducers({
    firebase: firebaseReducer,
     firestore: firestoreReducer // <- needed if using firestore
    
  })
  export default rootReducer