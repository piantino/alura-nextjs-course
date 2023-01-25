import { Box } from "../../src/theme/components";
import nookies from 'nookies';
import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginPage(props) {

    const router = useRouter();
    const [password, setPassword] = useState('');

    function login(event) {
        nookies.set(null, 'PASSWORD', password, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        })
        event.preventDefault();
        router.push('/private/');
    }

    return (
        <>
            <Box>
                <h1>Insira a senha</h1>
                <form onSubmit={login}>
                    <input onChange={e => setPassword(e.target.value)} ></input>
                    <button type="submit">Entrar</button>
                </form>
            </Box>
        </>
    )
}
