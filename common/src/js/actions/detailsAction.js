import axios from 'axios';

export const types = {
    ALL_ERRORS: 'ALL_ERRORS'
}

export function filter(id) {
    var count = 0;
    return (dispatch) => {
        axios.get('http://localhost:3000/api/errors')
        .then(res => {
            res.data.filter(errors => errors.employeeId !== id).map(error => {
                count ++
                axios.patch(`http://localhost:3000/api/errors/${error.id}`, {hidden: !error.hidden})
            })
        })
        .then(res => {
            dispatch(findErrors())
        })
        .catch(err => console.log('Error, errors not filtered'))
    };
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
      .catch(err => console.log('Error, filtered not removed'))
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
        .catch(err => console.log('Error, errors not found'))
    };
}

export function removeItem(id) {
    return (dispatch) => {
        axios.delete(`http://localhost:3000/api/errors/${id}`)
        .then(res => {
            dispatch(findErrors())
        })
        .catch(err => console.log('Error, item not removed'))
    }
}