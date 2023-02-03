import GlobalStyle from '../src/theme/GlobalStyle'
import { Open_Sans } from '@next/font/google'
import PageTitle from '../src/components/PageTitle'
import { UserProvider } from '@auth0/nextjs-auth0/client'

const font = Open_Sans({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
    return (
        <UserProvider>
            <PageTitle>Alura Cases</PageTitle>
            <main className={font.className}>
                <Component {...pageProps} />
            </main>
            <GlobalStyle></GlobalStyle>
        </UserProvider>
    )
}
