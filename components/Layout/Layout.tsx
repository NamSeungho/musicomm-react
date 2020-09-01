import { useDispatch } from 'react-redux';
import HeaderContainer from '../../containers/HeaderContainer'
import * as actions from "../../actions";

export default function Layout ({ children, user }) {
    const dispatch = useDispatch();
    if (user === null) {
        dispatch(actions.setNickname(''));
    } else if (user) {
        dispatch(actions.setNickname(user.nickname));
    }

    return (
        <div className="application">
            <HeaderContainer/>
            <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"/>
            <div className='layout'>{children}</div>
        </div>
    );
}
