import Header from '../components/Header/Header';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { States } from '../reducers/';

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = (state: States) => {
    return {
        userId: state.userId,
        nickname: state.nickname,
        isLoggedIn: !!state.userId
    };
};

const mapDispatchToProps = (dispatch) => ({
    onSetNickname: (nickname: string) => {
        dispatch(actions.setNickname(nickname));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);