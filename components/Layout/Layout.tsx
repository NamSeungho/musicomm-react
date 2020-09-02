import { useDispatch } from 'react-redux';
import HeaderContainer from '../../containers/HeaderContainer'
import * as actions from "../../actions";
import { User } from '../../pages/_app'

export default function Layout ({ children, user }) {
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
            <HeaderContainer/>
            <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"/>
            <div className='layout'>{children}</div>
        </div>
    );
}
