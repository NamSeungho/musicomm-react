import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import Aside from '../Aside/Aside'
import Header from '../Header/Header'
import * as actions from "../../actions";
import { User } from '../../pages/_app'

type LayoutProps = {
    children: ReactNode,
    user: User
}

export default function Layout ({ children, user }: LayoutProps) {
    const clearUserData = () => {
        dispatch(actions.setNickname(''));
        dispatch(actions.setUserId(''));
    };

    const dispatchUserData = (user: User) => {
        dispatch(actions.setNickname(user.nickname));
        dispatch(actions.setUserId(user.userId));
    };

    const dispatch = useDispatch();
    if (user === null) {
        clearUserData();
    } else if (user) {
        dispatchUserData(user);
    }

    return (
        <div className="application">
            <Header/>
            <Aside/>
            <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"/>
            <div className='layout'>{children}</div>
        </div>
    );
}
