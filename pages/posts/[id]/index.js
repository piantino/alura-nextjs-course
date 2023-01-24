import { useRouter } from "next/router"
import Link from "../../../src/components/Link";

export async function getStaticPaths() {

    const paths = [
        { params: { id: '1' } },
        { params: { id: '2' } },
        { params: { id: '3' } }
    ]

    // { fallback: false } means other routes should 404
    return { paths, fallback: false }
}

export async function getStaticProps(context) {

    const { params } = context

    return {
        props: {
            id: params.id
        }
    }
}

export default function PostPage(props) {
    const router = useRouter();

    return (
        <>
            <h1>Post {props.id}</h1>
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
