import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import ReactPlayer from 'react-player';

import Videos from './Videos';
import { fetchFromApi } from '../utils/fetchFromApi';

function VideoDetail() {
   const { id } = useParams();
   const [videoDetail, setVideoDetail] = useState(null);
   const [videos, setVideos] = useState([]);
   
   useEffect(() => {
      fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
         .then((data) => setVideoDetail(data?.items[0]))
         .catch((err) => console.log(err));
      
      fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
         .then((data) => setVideos(data?.items))
         .catch((err) => console.log(err));
   }, [id]);
   
   return (
      <Box minHeight="95vh">
         <Stack direction={{ xs: 'column', sm: 'row' }}>
            <Box flex={1}>
               <Box sx={{ position: 'sticky', width: '100%', top: '86px' }}>
                  <ReactPlayer
                     url={`https://www.youtube.com/watch?v=${id}`}
                     className="react-player"
                     controls
                  />
                  <Typography variant="h6" color="#fff" fontWeight="bold" p={2}>
                     {videoDetail?.snippet.title}
                  </Typography>
                  <Stack direction="row" justifyContent="space-between" sx={{ color: '#fff' }} px={2} py={1}>
                     <Link to={`/channel/${videoDetail?.snippet.channelId}`}>
                        <Typography variant={{ xs: 'subtitle', md: 'h6' }} color="#fff">
                           {videoDetail?.snippet.channelTitle}
                        </Typography>
                        <CheckCircle sx={{ fontSize: 12, color: '#fff', ml: '5px' }} />
                     </Link>
                     <Stack direction="row" gap="20px" alignItems="center">
                        <Typography variant="body1" sx={{ opacity: 0.7 }}>
                           {parseInt(videoDetail?.statistics.viewCount).toLocaleString()} views
                        </Typography>
                        
                        <Typography variant="body1" sx={{ opacity: 0.7 }}>
                           {parseInt(videoDetail?.statistics.likeCount).toLocaleString()} likes
                        </Typography>
                     </Stack>
                  </Stack>
               </Box>
            </Box>
         </Stack>
         <Box px={2} py={{ xs: 5, md: 1 }} justifyContent="center" alignItems="center">
            <Videos videos={videos} direction="column" />
         </Box>
      </Box>
   );
}

export default VideoDetail;