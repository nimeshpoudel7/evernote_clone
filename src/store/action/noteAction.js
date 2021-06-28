export const addNote=(nota)=>{
    return (dispatch, getState,{getFirestore})=>{
        const firestore=getFirestore()
        firestore.collection('notes')
        .add({
            ...nota,
            favorite:false,
            createdAt:new Date()
        })
        .then(() =>{
            console.log('done complete')
        } )
        .catch((err)=>{
            console.log(err)
        })
    }


}
export const deleteNote=(deleteValue)=>{
    return (dispatch, getState,{getFirestore})=>{
        const firestore=getFirestore()
        firestore.collection('notes').doc(deleteValue.id).delete()
      
        .then(() =>{
            console.log('done complete')
        } )
        .catch((err)=>{
            console.log(err)
        })
    }

}
export const favNotes=(favNotes)=>{
    return (dispatch, getState,{getFirestore})=>{
        const firestore=getFirestore()
        const favStatus=!favNotes.favorite
        //
        console.log('he',favStatus)
        firestore.collection('notes').doc(favNotes.id).update({
            favorite:favStatus
        })
      
        .then(() =>{
            console.log('fav sucess',favStatus)
        } )
        .catch((err)=>{
            console.log(err)
        })
    }

}