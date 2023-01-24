import { useRouter } from "next/router"
import Link from "../../../src/components/Link";
import posts from '../../../data/posts.json'

export async function getStaticPaths() {

    const paths = posts.map(post => (
        { params: { id: post.id } }
    ))

    // { fallback: false } means other routes should 404
    return { paths, fallback: false }
}

export async function getStaticProps(context) {

    const { params } = context
    const props = posts.find(post => post.id == params.id)

    return {
        props
    }
}

export default function PostPage(props) {
    const router = useRouter();

    return (
        <>
            <h1>{props.title}</h1>
            <ul>
                <li>
                    <Link href="/">Ir para a home</Link>
                </li>
                <li>
                    <Link href={`${props.id}/comments`}>Ir para comentarios</Link>
                </li>
            </ul>
            <p>{props.text}</p>
        </>
    )
}
