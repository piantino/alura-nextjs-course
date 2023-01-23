module.exports = {
    trailingSlash: true,
    async redirects() {
        return [
            {
                source: '/questions',
                destination: '/faq/',
                permanent: true,
            },
        ]
    },
}
