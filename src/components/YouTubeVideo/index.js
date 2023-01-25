export default function YouTubeVideo({ url }) {
    return (
        <>
            <iframe width="560" height="315"
                src={url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </>
    )
}
