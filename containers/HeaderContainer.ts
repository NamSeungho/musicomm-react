import Header from '../components/Header';
import * as actions from '../actions';
import { connect } from 'react-redux';

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = (state) => ({
    nickname: state.nickname
});

const mapDispatchToProps = (dispatch) => ({
    onSetNickname: (nickname) => {
        dispatch(actions.setNickname(nickname));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);