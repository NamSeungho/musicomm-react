import * as types from './ActionTypes';

export const setNickname = (nickname: string) => ({
    type: types.SET_NICKNAME,
    payload: nickname
});

export const setUserId = (userId: string) => ({
    type: types.SET_USERID,
    payload: userId
});
