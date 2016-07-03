import { INCREMENT_COUNTER, DECREMENT_COUNTER, SAVE_FORM } from '../constants/ActionTypes';

export function saveForm(formDTO) {
    console.log("formDTO");
    console.log(formDTO);
    console.log("formDTO");

    return (dispatch) => {
        fetch('http://52.196.18.103:3000/api/Shippers/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                formDTO
            })
        }).then(response => response.json())
        .then(response =>{
            console.log("response");
            console.log(response);
        }).catch(err => {
            console.log(err);
        });
    }
}

export function increment() {
    return {
        type: INCREMENT_COUNTER
    };
}

export function decrement() {
    return {
        type: DECREMENT_COUNTER
    };
}

export function incrementIfOdd() {
    return (dispatch, getState) => {
        const { counter } = getState();

        if (counter % 2 === 0) {
            return;
        }

        dispatch(increment());
    };
}

export function incrementAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment());
        }, 1000);
    };
}
