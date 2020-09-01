import styles from './Header.module.scss';

import Link from 'next/link';
import axios, { AxiosResponse } from 'axios';

export default function Header({nickname, onSetNickname}) {
    const login = () => {
        axios.post('/login', {
            id: 'ID',
            password: '1234'
        }).then((res: AxiosResponse) => {
            if (res.data.code === 0) {
                location.reload();
            }
        });
    };

    const logout = () => {
        axios.post('/logout', {}).then((res: AxiosResponse) => {
            if (res.data.code === 0) {
                location.reload();
            }
        });
    };

    return (
        <div className={styles.header}>
            <Link href="/"><a className={styles.header_logo}>MUSI<span>C</span>OMM</a></Link>
            {nickname}
            <ul className={styles.header_sign_ul}>
                <li onClick={login}><span>로그인</span></li>
                <li onClick={logout} className={`${styles.sign_up}`}><span>무료 회원가입</span></li>
            </ul>
        </div>
    )
}
