import axios from 'axios';

export const types = {
    ALL_ERRORS: 'ALL_ERRORS'
}

export function removedFiltered(id) {
    var count = 0;
    return (dispatch) => {
      axios.get('http://localhost:3000/api/errors')
      .then(res => {
          res.data.filter(errors => errors.employeeId === id).map(errorDelete => {
              count ++
              axios.delete(`http://localhost:3000/api/errors/${errorDelete.id}`)
          })
      })
      .then(res => {
          dispatch(findErrors())
      })
      .catch(err => console.log('err'))
    };
}

export function findErrors() {
    return (dispatch) => {
        axios.get('http://localhost:3000/api/errors')
        .then(res => {
            dispatch({
                type: types.ALL_ERRORS,
                payload: res.data
            })
        })
    };
}

export function removeItem(id) {
    return (dispatch) => {
        axios.delete(`http://localhost:3000/api/errors/${id}`)
        .then(res => {
            dispatch(findErrors())
        })
        .catch(err => console.log('err'))
    }
}