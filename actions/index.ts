import * as types from './actionTypes';

export const setNickname = (nickname: string) => ({
    type: types.SET_NICKNAME,
    nickname
});