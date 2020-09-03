import '../styles/global.css'
import { AppProps, AppContext } from 'next/app'
import Layout from "../components/Layout/Layout";
import { createStore } from "redux";
import reducers from "../reducers";
import { Provider } from 'react-redux';
import { IncomingMessage } from "http";
import { Session } from "inspector";

export type User = {
    userId: string;
    nickname: string;
    isLoggedIn?: boolean;
}

type CustomAppProps = AppProps & {
    user?: User
}

type CustomAppRequest = IncomingMessage & {
    session?: Session & {
        user?: User
    }
}

// Create Store
const store = createStore(reducers);

export default function App ({ Component, pageProps, user }: CustomAppProps) {
    return (
        <Provider store={store}>
            <Layout user={user}>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

App.getInitialProps = async ({ctx}: AppContext) => {
    // 왜 페이지 전환할 때 client side에서 호출이 되나?
    if (typeof window === 'undefined') {
        const request: CustomAppRequest = ctx.req;
        const user: User = request.session.user;
        return { user: user ? user : null };
    }

    return {};
};
