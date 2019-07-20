import commentsReducer from 'reducers/comments'
import * as actionTypes from 'actions/types'

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: actionTypes.SAVE_COMMENT,
        payload: 'New Comment'
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New Comment']);
})

it('handles action with unknown type', () => {
    const emptyState = commentsReducer([], {})

    expect(emptyState).toEqual([]);
})