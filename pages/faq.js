import FAQScreen from "../src/screens/FaqScreen";

// Roda só rodante o build
// Já o getServerSideProps roda quando acessa a página
export async function getStaticProps(context) {

    const FAQ_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    const faq = await fetch(FAQ_URL)
            .then((response) => {
                return response.json()
            })
    return {
      props: {
        faq
      }, // will be passed to the page component as props
    }
}

export default FAQScreen; 

