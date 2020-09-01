import * as types from './ActionTypes';

export const setNickname = (nickname: string) => ({
    type: types.SET_NICKNAME,
    nickname
});