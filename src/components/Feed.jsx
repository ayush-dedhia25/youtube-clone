import { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromApi } from '../utils/fetchFromApi';

const styles = {
   main: {
      flexDirection: { sx: 'column', md: 'row' },
   },
   innerBox: {
      height: { sx: 'auto', md: '92vh' },
      px: { sx: 0, md: 2 },
      borderRight: '1px solid #3d3d3d',
   },
   copyright: {
      mt: 1.5,
      color: '#fff',
   },
};

function Feed() {
   const [selectedCategory, setSelectedCategory] = useState('New');
   const [videos, setVideos] = useState([]);
   
   useEffect(() => {
      fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
         .then((data) => setVideos(data?.items))
         .catch((err) => console.error(err));
   }, [selectedCategory]);
   
   return (
      <Stack sx={styles.main}>
         <Box sx={styles.innerBox}>
            <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            
            <Typography className="copyright" variant="body2" sx={styles.copyright}>
               Copyright 2022. All Rights Reserved.
            </Typography>
         </Box>
         
         <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
            <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
               {selectedCategory} <span style={{ color: '#f31503' }}>videos</span>
            </Typography>
            
           <Videos videos={videos} />
         </Box>
      </Stack>
   );
}

export default Feed;