import * as types from '../actions/ActionTypes';
import * as actions from '../actions/index';

type Action =
    | ReturnType<typeof actions.setNickname>;

const initialState = {
    nickname: ''
};

const reducer = (state: { nickname?: string } = initialState, action: Action) => {
    switch (action.type) {
        case types.SET_NICKNAME:
            return {
                ...state,
                nickname: action.nickname
            };
        default:
            return state;
    }
};

export default reducer;
