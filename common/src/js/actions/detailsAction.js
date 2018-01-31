import axios from 'axios';

export function findUsers(x) {
    return (dispatch) => {
        axios.get('/findrep')
        .then( results => {
            // console.log('CIENT SIDE: ', results.data);
            let reps = {};
            users.candidates = results.data.filter(user => user.candidate);
            users.employers = results.data.filter(user => user.employer);
            console.log(users)
            dispatch({
                type: 'ALL_USERS',
                payload: users
               }) 
            }         
        )     
    };
}