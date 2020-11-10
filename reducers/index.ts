import * as types from '../actions/ActionTypes';
import * as actions from '../actions/index';

export type States = {
    nickname: string;
    userId: string;
    musicId: string;
    musicInfo: actions.IMusicInfo;
};

type Action =
    | ReturnType<typeof actions.setNickname>
    | ReturnType<typeof actions.setUserId>
    | ReturnType<typeof actions.setMusicId>
    | ReturnType<typeof actions.setMusicInfo>;

const initialState: States = {
    nickname: '',
    userId: '',
    musicId: '',
    musicInfo: null
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
        case types.SET_MUSICID:
            return {
                ...state,
                musicId: action.payload
            };
        case types.SET_MUSIC_INFO:
            return {
                ...state,
                musicInfo: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
