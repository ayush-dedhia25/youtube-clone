import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture, demoChannelTitle } from '../utils/constants';

const styles = {
   main: {
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: 'none',
      borderRadius: '20px',
   },
   content: {
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
   },
   media: {
      mb: 2,
      width: '180px',
      height: '180px',
      border: '1px solid #e3e3e3',
      borderRadius: 50,
   },
};

function ChannelCard({ channelDetail, marginTop }) {
   return (
      <Box sx={{...styles.main, marginTop}}>
         <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={styles.content}>
               <CardMedia
                  image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                  alt={channelDetail?.snippet?.title}
                  sx={styles.media}
               />
               <Typography variant="h6">
                  {channelDetail?.snippet?.channelTitle || demoChannelTitle}
                  <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
               </Typography>
               {channelDetail?.statistics?.subscriberCount && (
                  <Typography>
                     {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers 
                  </Typography>
               )}
            </CardContent>
         </Link>
      </Box>
   );
}

export default ChannelCard;