import { useRouter } from "next/router"

export default function HomeScreen() {
    const router = useRouter();

    return (
        <>
            <h1>Post {router.query.id}</h1>
        </>
    )
}
