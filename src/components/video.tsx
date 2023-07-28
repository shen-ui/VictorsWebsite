import { snippetType } from "customTypes";
function Video(props: {key: string, snippet: snippetType, listId: string}){
    /*
        Note: A well known problem of the Youtube API is chacters returned from the api
              results in HTML characters. Some solutions to this problem is:
              he (library): https://github.com/mathiasbynens/he
              TODO: Look over using this package.
              Temparary fix: using fromCharCode to decode HTML characters.
    */
    const unescape = (str: string) => {
        return str.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec))
    }

    let url:string = `https://www.youtube.com/embed/watch?v=${props.snippet.resourceId.videoId}&index=${props.snippet.position+1}&list=${props.listId}`
    props.snippet.title = unescape(props.snippet.title);
    return (
        <li key="1" >
            <iframe title={props.snippet.title} className="video"
                width={375}
                height={210}
                src={url}
                allow="encrypted-media; picture-in-picture;"
            />
            <section className="description-box">
                <h2 className="title-text">{props.snippet.title}</h2>
                <p className="description-text">{props.snippet.description}</p>
            </section>
        </li>
    )
}
export default Video;