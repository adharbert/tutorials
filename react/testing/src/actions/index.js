import * as actionTypes from 'actions/types'
import axios from 'axios'

export function saveComment(comment) {
    return {
        type: actionTypes.SAVE_COMMENT,
        payload: comment
    }
}



export function fetchComments() {
    const response = axios.get('http://jsonplaceholder.typicode.com/comments');

    return {
        type: actionTypes.FETCH_COMMENTS,
        payload: response
    };
}