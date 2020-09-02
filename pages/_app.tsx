import '../styles/global.css'

import { AppProps, AppContext } from 'next/app'
import Layout from "../components/Layout/Layout";
import { createStore } from "redux";
import reducers from "../reducers";
import { Provider } from 'react-redux';

export type User = {
    userId: string;
    nickname: string;
    isLoggedIn?: boolean;
}

// Create Store
const store = createStore(reducers);

export default function App ({ Component, pageProps, user }: AppProps & {
    user?: {
        userId: string,
        nickname: string
    }
}) {
    return (
        <Provider store={store}>
            <Layout user={user}>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

App.getInitialProps = async (appContext: AppContext) => {
    // 왜 페이지 전환할 때 client side에서 호출이 되나?
    if (typeof window === 'undefined') {
        const user = appContext.ctx.req.session.user;
        return { user: user ? user : null };
    }

    return {};
};
