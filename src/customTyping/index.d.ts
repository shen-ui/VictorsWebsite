declare module 'customTypes' {
    type thumbnails = {
        height: number,
        url: string,
        width: number
    }
    type snippetType = {
        publishedAt: string
        channelId: string,
        title: string,
        description: string,
        publishTime: string,
        thumbnails: {
            default: thumbnails,
            high: thumbnails,
            medium: thumbnails,
        },
        channelTitle: string,
        playlistId: string,
        position: number,
        resourceId: {
            kind: string,
            videoId: string
        }
        videoOwnerChannelTitle: string,
        videoOwnerChannelId: string,
        
    }
    type itemType = {
        kind: string,
        etag: string,
        id: {
            kind: string,
            videoId: string,
        }
        snippet: snippetType;
    };
    
    type videoType = {
        kind: string,
        etag: string,
        nextPageToken: string,
        regionCode: string,
        pageInfo: {
            totalResults: number,
            resultsPerPage: number,
        }
        items: [itemType]
    };

    type YoutubeData = {
        credentals: {
            key: string,
            channelId: string,
            results: number
        };
    };

    interface YoutubeProps {
        Youtube: YoutubeData,
    }
}

declare module "*.webm" {
    const value: any;
    export = value;
}
declare module "*.mp3" {
    const value: any;
    export = value;
}

module.exports = {
    itemType,
    videoType,
    YoutubeData,
    YoutubeProps,
};