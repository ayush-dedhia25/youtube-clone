import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';
import { logo } from '../utils/constants';

const styles = {
   position: 'sticky',
   top: 0,
   justifyContent: 'space-between',
   backgroundColor: '#000',
};

function Navbar() {
   return (
      <Stack direction="row" alignItems="center" p={2} sx={styles}>
         <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="logo" height={45} />
         </Link>
         <SearchBar />
      </Stack>
   );
}

export default Navbar;