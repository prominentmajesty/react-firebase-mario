export const createProject = (project) => {
    return (dispatch, getState, {getFirebase}) => {
        //make async call to database
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        console.log(profile);
        const authorId = getState().firebase.auth.uid;
        firestore.collection('project').add({
            ...project,
            authorFirstName : profile.firstName,
            authorLastName : profile.lastName,
            authorId : authorId,
            createdAt : new Date()
        }).then(() => {
            dispatch({type : 'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({type : 'CREATE_PROJECT_ERROR', err});
        });
        dispatch({type : 'CREATE_PROJECT', project});  
    };
}; 