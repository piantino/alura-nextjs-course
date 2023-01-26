import { useRouter } from "next/router";
import nookies from 'nookies';
import { useEffect, useState } from "react";
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
    const [user, setUser] = useState([]);

    function logout() {
        nookies.destroy(null, 'PASSWORD', {
            path: '/',
        })
        router.push('/private')
    }

    useEffect(() => {
        fetch("/api/me/")
          .then(res => res.json())
          .then(
            (result) => {
                setUser(result)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              console.error(error)
            }
          )
      }, [])

    return (
        <>
            <h1>Logado {user.name}</h1>
            <Link href="/">Ir para a home</Link>
            <button onClick={logout}>Sair</button>
        </>
    )
}
