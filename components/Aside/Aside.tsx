import styles from "./Aside.module.scss";
import { connect } from 'react-redux';
import Player from '../Player/Player';

function Aside ({ isLoggedIn }) {
    console.log(isLoggedIn);

    return (
        <aside className={styles.aside}>
            <Player />
        </aside>
    );
}

export default connect(
    state => ({
        isLoggedIn: !!state.userId
    })
)(Aside);
