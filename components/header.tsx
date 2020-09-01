import styles from './header.module.scss';

import Link from 'next/link';
import axios, { AxiosResponse } from 'axios';

export default function Header() {
    const signIn = () => {
        axios.post('/login', {
            id: 'ID',
            password: '1234'
        }).then((res: AxiosResponse) => {
            if (res.data.code === 0) {
                location.reload();
            }
        });
    };

    return (
        <div className={styles.header}>
            <Link href="/"><a className={styles.header_logo}>MUSI<span>C</span>OMM</a></Link>

            <ul className={styles.header_sign_ul}>
                <li onClick={signIn}><span>로그인</span></li>
                <li className={`${styles.sign_up}`}><span>무료 회원가입</span></li>
            </ul>
        </div>
    )
}
