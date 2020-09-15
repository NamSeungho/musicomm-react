import styles from '../Player/Player.module.scss';
import React, { useState } from 'react';
import PlayerProgressBar from './PlayerProgressBar/PlayerProgressBar'

enum PROGRESS_BAR_TYPE {
    VOLUME = 'VOLUME',
    DURATION = 'DURATION',
}

interface IProgressParams {
    value: number,
    onChangeValue: (value: number) => void,
    type: PROGRESS_BAR_TYPE
}

function ProgressBar ({ value, onChangeValue, type }: IProgressParams) {
    const classNames = {
        bar: '',
        activeBar: ''
    };

    if (type === PROGRESS_BAR_TYPE.VOLUME) {
        classNames.bar = 'player_control_volume_bar';
        classNames.activeBar = 'player_control_volume_active_bar';
    } else if (type === PROGRESS_BAR_TYPE.DURATION) {
        classNames.bar = 'player_control_duration_bar';
        classNames.activeBar = 'player_control_duration_active_bar';
    }

    return (
        <PlayerProgressBar value={value} onChangeValue={onChangeValue} classNames={classNames} />
    );
}

export default function Player () {
    const [playerTitle, setPlayerTitle] = useState('Dynamite - 방탄소년단 (BTS)');
    const [playerTime, setPlayerTime] = useState('0:05 / 3:43');

    const [isPlaying, setIsPlaying] = useState(false);
    const [isRepeat, setIsRepeat] = useState(false);
    const [isShuffle, setIsShuffle] = useState(false);
    const [playerVolume, setPlayerVolume] = useState({
        isMute: false,
        volume: 80
    });
    const [duration, setDuration] = useState(0);

    const changeVolume = (volume: number) => {
        let isMute = false;
        if (volume === 0) {
            isMute = true;
        }

        setPlayerVolume({
            isMute: isMute,
            volume: volume
        });

        // this.player.setVolume(volume);
    };

    const togglePlayerStatus = () => {
        setIsPlaying(!isPlaying);
    };

    const handleClickPrev = () => {

    };

    const handleClickNext = () => {

    };

    const handleClickRepeat = () => {
        setIsRepeat(!isRepeat);
    };

    const handleClickShuffle = () => {
        setIsShuffle(!isShuffle);
    };

    const handleClickMute = () => {
        if (playerVolume.isMute) {
            changeVolume(80);
        } else {
            changeVolume(0);
        }
    };

    const handleClickResize = () => {
        //
    };

    return (
        <div className={styles.player_container}>
            <div id="player" className={styles.player}>
                <span>뮤직 플레이어</span>
            </div>

            <div className={styles.player_control_wrap}>
                <p className={styles.player_control_music_title}>{playerTitle}</p>
                <p className={styles.player_control_music_time}>{playerTime}</p>

                <ProgressBar value={duration} onChangeValue={setDuration} type={PROGRESS_BAR_TYPE.DURATION}/>

                <img className={styles.player_control_button + ' ' + styles.player_control_play_btn}
                     src={isPlaying ? '/images/player_pause.png' : '/images/player_play.png'} alt='재생'
                     onClick={togglePlayerStatus}/>

                <img className={styles.player_control_button + ' ' + styles.player_control_prev_next_btn}
                     src={'/images/player_prev.png'} alt='이전 음악' onClick={handleClickPrev}/>

                <img className={styles.player_control_button + ' ' + styles.player_control_prev_next_btn}
                     src={'/images/player_next.png'} alt='다음 음악' onClick={handleClickNext}/>

                <img className={styles.player_control_button + ' ' + styles.player_control_repeat_btn}
                     src={isRepeat ? '/images/player_repeat_on.png' : '/images/player_repeat.png'} alt='반복 재생'
                     onClick={handleClickRepeat}/>

                <img className={styles.player_control_button + ' ' + styles.player_control_shuffle_btn}
                     src={isShuffle ? '/images/player_shuffle_on.png' : '/images/player_shuffle.png'} alt='셔플 음악'
                     onClick={handleClickShuffle}/>

                <img className={styles.player_control_button + ' ' + styles.player_control_volume_btn}
                     src={playerVolume.isMute ? '/images/player_volume.png' : '/images/player_volume_on.png'}
                     alt='볼륨 조절' onClick={handleClickMute}/>

                <ProgressBar value={playerVolume.volume} onChangeValue={changeVolume} type={PROGRESS_BAR_TYPE.VOLUME}/>

                <img className={styles.player_control_button + ' ' + styles.player_control_large_btn}
                     src='/images/player_large.png' alt='크게보기' onClick={handleClickResize}/>
            </div>
        </div>
    );
}