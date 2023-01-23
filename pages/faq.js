import { useEffect, useState } from "react";
import Link from "../src/components/Link";

export default function FaqPage() {

    const [faq, setFaq] = useState([]);

    useEffect(() => {
        const FAQ_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
        fetch(FAQ_URL)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                setFaq(result)
            })
    }, [])

    return (
        <>
            <div>
                <h1>Alura Cases - Páginas e perguntas FAQ</h1>
                <Link href="/">Ir para Home</Link>
            </div>
            <ul>
                {faq.map(({answer, question}) => (
                    <li key={question}>
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </>
    )
}
