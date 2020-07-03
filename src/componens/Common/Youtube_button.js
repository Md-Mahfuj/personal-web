import React, {useEffect, useState} from "react"
import config from "./Y_config";

const YouTubeCounter =()=>{
    const [subscriberCount,setSubscriberCount]=useState()
    useEffect(()=>{
        const {api_key,channel_id}= config;
        const apiCall=`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channel_id}$key={api_key}`
        fetch(apiCall)
            .then(result=>result.json())
            .then(data=>{
               const count= data.items[0].statistics.subscriberCount;

                setSubscriberCount(count)







                console.log(data);
            })



    });

    return(
        <div>
            {subscriberCount}
        </div>
    )






};
export default YouTubeCounter;