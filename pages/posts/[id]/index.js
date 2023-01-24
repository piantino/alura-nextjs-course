import { useRouter } from "next/router"
import Link from "../../../src/components/Link";

export default function PostPage() {
    const router = useRouter();

    return (
        <>
            <h1>Post {router.query.id}</h1>
            <ul>
                <li>
                    <Link href="/">Ir para a home</Link>
                </li>
                <li>
                    <Link href={`${router.query.id}/comments`}>Ir para comentarios</Link>
                </li>
            </ul>
        </>
    )
}
