import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelTitle, demoChannelUrl } from '../utils/constants';

const styles = {
   main: {
      width: { xs: '100%', sm: '358px', md: '320px' },
      boxShadow: 'none',
      borderRadius: 0,
   },
   media: {
      width: { xs: '100%', sm: '358px', md: '320px' },
      height: 180,
   },
};

function VideoCard({ video: { id: { videoId }, snippet } }) {
   return (
      <Card sx={styles.main}>
         <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia
               image={snippet?.thumbnails?.high?.url}
               alt={snippet?.title}
               sx={styles.media}
            />
         </Link>
         <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
               <Typography variant="subtitle1" fontWeight="bold" color="#fff">{snippet?.title?.slice(0, 60) || demoVideoTitle.slice(0, 60)}</Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
               <Typography variant="subtitle2" fontWeight="bold" color="gray">
                  {snippet?.channelTitle || demoChannelTitle}
                  <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
               </Typography>
            </Link>
         </CardContent>
      </Card>
   );
}

export default VideoCard;