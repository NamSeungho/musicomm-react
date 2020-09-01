import '../styles/global.css'

import { AppProps, AppContext } from 'next/app'
import Layout from "../components/layout";

export default function App ({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

// App.getInitialProps = async (appContext: AppContext) => {
//     // 왜 페이지 전환할 때 client side에서 호출이 되나?
//     if (typeof window === 'undefined') {
//         const userSession = appContext.ctx.req.session.user;
//     }
//
//     return {};
// };
