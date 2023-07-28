import "../styles/template3.scss";
import { YoutubeData, videoType, itemType } from "customTypes";
import { useEffect, useState } from "react";
import Video from "./video";

/**
 *  let url: string = `https://www.googleapis.com/youtube/v3/search?type=video`;
    let params = {
        order: `&order=date`,
        part: `&part=snippet`,
        channel: `&channelId=${channelId}`,
        results: `&maxResults=${results_count}`,
        key: `&key=${key}`
    }
 * @param channelId 
 * @param key 
 * @param results_count 
 * @returns list of videos of your channel
 */

function GetYoutubeVids (key: string, results_count: number) {
    let [videos, setVideos] = useState<videoType>();
    // using html string interpolation to create api call. 
    let url: string = `https://www.googleapis.com/youtube/v3/playlistItems?`;
    let params = {
        part:       `part=snippet`,
        results:    `&maxResults=${results_count}`,
        playlistId: `&playlistId=PLzc2836zFLvbYg3TilF67s8PlscTCF5Uy`,
        key:        `&key=${key}`,
    }
    Object.values(params).forEach((k) => { url+=k });
    useEffect(() => {
        fetch(`${url}`)
            .then(data => data.json())
            .then((res: videoType) => {
                setVideos(res);
            })
            .catch(error =>  alert("Error: " + error))
    },[url])
    return videos;
}

function Template3({credentals}: YoutubeData) {
    let videos: videoType | undefined = GetYoutubeVids(credentals.key, credentals.results);
    if(videos !== undefined) {
        return (
            <div className="template3"> 
                <div className="content-container3">
                    <div className="video-list-container">
                        <div className="header">
                            <h2 className="header-title">Music</h2>
                        </div>
                        <ul className="video-list">
                            {
                                videos.items.map((video: itemType) => {
                                    return <Video key={video.snippet.position.toString()} snippet={video.snippet} listId={video.snippet.playlistId}/>
                                })
                            }
                        </ul>
                    </div> 
                </div>
            </div>
        )
    }
    
    return(
        <div className="template3">
            <div className="content-container3">
                <div>Loading...</div>
            </div>
        </div>
    )
}

export default Template3;