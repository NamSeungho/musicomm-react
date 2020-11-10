import * as types from './ActionTypes';

export interface IMusicInfo {
    id: string,
    title: string,
    singer: string
}

export const setNickname = (nickname: string) => ({
    type: types.SET_NICKNAME,
    payload: nickname
});

export const setUserId = (userId: string) => ({
    type: types.SET_USERID,
    payload: userId
});

export const setMusicId = (musicId: string) => ({
    type: types.SET_MUSICID,
    payload: musicId
});

export const setMusicInfo = (musicInfo: IMusicInfo) => ({
    type: types.SET_MUSIC_INFO,
    payload: musicInfo
});
