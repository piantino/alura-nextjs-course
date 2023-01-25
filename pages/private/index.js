import { useRouter } from "next/router";
import nookies from 'nookies';
import Link from "../../src/components/Link";

const PASSWORD = '123456'

export async function getServerSideProps(context) {
    const cookies = nookies.get(context, 'PASSWORD')
    const allowed = PASSWORD == cookies.PASSWORD

    if (!allowed) {
        return {
            redirect: {
                permanent: false,
                destination: '/private/login'
            }
        }
    }

    return {
        props: {}, // will be passed to the page component as props
    }
}


export default function PrivatePage(props) {

    const router = useRouter();

    function logout() {
        nookies.destroy(null, 'PASSWORD', {
            path: '/',
        })
        router.push('/private')
    }

    return (
        <>
            <h1>Logado</h1>
            <Link href="/">Ir para a home</Link>
            <button onClick={logout}>Sair</button>
        </>
    )
}
