import { useRouter } from "next/router";
import Link from "../../../src/components/Link";

export default function CommentsPage() {
    const router = useRouter();

    return (
        <>
            <h1>Comentários do Post {router.query.id}</h1>
            <Link href={`/posts/${router.query.id}`}>Ir para o post</Link>
        </>
    )
}
