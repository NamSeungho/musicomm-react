import Link from 'next/link'
import { connect } from 'react-redux';
import * as actions from "../actions";

function Index ({onSetMusicInfo}) {
    const playMusic = (musicId: string) => {
        if (musicId === 'gdZLi9oWNZg') {
            onSetMusicInfo({
                id: musicId,
                title: 'Dynamite',
                singer: '방탄소년단'
            });
        } else {
            onSetMusicInfo({
                id: musicId,
                title: 'Icecream',
                singer: '블랙핑크'
            });
        }
    };

    return (
        <ul>
            <li>
                <Link href="/b" as="/a">
                    <a>a</a>
                </Link>
            </li>
            <li>
                <Link href="/a" as="/b">
                    <a>b</a>
                </Link>
            </li>
            <li>
                <span onClick={playMusic.bind(null, 'gdZLi9oWNZg')}>music</span>
            </li>
            <li>
                <span onClick={playMusic.bind(null, 'vRXZj0DzXIA')}>music2</span>
            </li>
        </ul>
    )
}

export default connect(
    state => ({}),
    dispatch => ({
        onSetMusicInfo: (musicInfo: actions.IMusicInfo) => {
            dispatch(actions.setMusicInfo(musicInfo));
        }
    })
)(Index);
