import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const styles = {
   marginRight: { sm: 5 },
   paddingLeft: 2,
   border: '1px solid #e3e3e3',
   borderRadius: 20,
   boxShadow: 'none',
};

function SearchBar() {
   const [searchTerm, setSearchTerm] = useState('');
   const navigate = useNavigate();
   
   const handleSubmit = (e) => {
      e.preventDefault();
      if (searchTerm) {
         navigate(`/search/${searchTerm}`);
         setSearchTerm('');
      }
   };
   
   return (
      <Paper component="form" onSubmit={handleSubmit} sx={styles}>
         <input
            className="search-bar"
            value={searchTerm}
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
         />
         <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
            <Search />
         </IconButton>
      </Paper>
   );
}

export default SearchBar;