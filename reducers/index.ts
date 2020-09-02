import * as types from '../actions/ActionTypes';
import * as actions from '../actions/index';

export type States = {
    nickname: string;
    userId: string;
};

type Action =
    | ReturnType<typeof actions.setNickname>
    | ReturnType<typeof actions.setUserId>;

const initialState: States = {
    nickname: '',
    userId: ''
};

const reducer = (state: States = initialState, action: Action) => {
    switch (action.type) {
        case types.SET_NICKNAME:
            return {
                ...state,
                nickname: action.payload
            };
        case types.SET_USERID:
            return {
                ...state,
                userId: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
