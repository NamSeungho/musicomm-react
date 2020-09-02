import styles from './Header.module.scss';

import Link from 'next/link';
import axios, { AxiosResponse } from 'axios';
import { User } from '../../pages/_app'

function LoginComponent ({ userId, nickname, isLoggedIn }: User) {
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

    const signup = () => {
        alert('Should implement signup');
    };

    if (!isLoggedIn) {
        return (
            <div className={styles.header_user_wrap}>
                <button onClick={login}><span>로그인</span></button>
                <button onClick={signup} className={`${styles.sign_up}`}><span>무료 회원가입</span></button>
            </div>
        );
    } else {
        return (
            <div className={styles.header_user_wrap}>
                <Link href="/profile/[id]" as={`/profile/${userId}`}><a>{nickname}</a></Link>
                <button onClick={logout}><span>로그아웃</span></button>
            </div>
        );
    }
}

export default function Header ({ userId, nickname, isLoggedIn }: User) {
    return (
        <div className={styles.header}>
            <Link href="/"><a className={styles.header_logo}>MUSI<span>C</span>OMM</a></Link>
            <LoginComponent userId={userId} nickname={nickname} isLoggedIn={isLoggedIn}/>
        </div>
    )
}
