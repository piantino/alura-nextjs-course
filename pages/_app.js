import GlobalStyle from '../src/theme/GlobalStyle'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <GlobalStyle></GlobalStyle>
        </>
    )
}
