import { Box, Stack } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

function Videos({ videos, direction }) {
   if (!videos?.length) return 'Loading...';
   
   return (
      <Stack direction={direction || 'row'} flexWrap="wrap" justifyContent="start">
         {videos.map((video, index) => (
            <Box key={index}>
               {video.id.videoId && <VideoCard video={video} />}
               {video.id.channelId && <ChannelCard channelDetail={video} />}
            </Box>
         ))}
      </Stack>
   );
}

export default Videos;