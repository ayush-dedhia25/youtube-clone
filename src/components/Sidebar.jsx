import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const styles = {
   sidebar: {
      height: { sx: 'auto', md: '95%' },
      flexDirection: { md: 'column' },
      overflow: 'auto',
   },
};

function Sidebar({ selectedCategory, setSelectedCategory }) {
   return (
      <Stack direction="row" sx={styles.sidebar}>
         {categories.map((category) => (
            <button
               key={category.name}
               className="category-btn"
               style={{ backgroundColor: category.name === selectedCategory && '#fc1503', color: 'white' }}
               onClick={() => setSelectedCategory(category.name)}
            >
               <span style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px' }}>{category.icon}</span>
               <span style={{ opacity: category.name === selectedCategory ? 1 : 0.8, marginRight: '15px' }}>{category.name}</span>
            </button>
         ))}
      </Stack>
   );
}

export default Sidebar;