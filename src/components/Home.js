import * as React from 'react';
import { Box, CssBaseline, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    const token = localStorage.getItem('token');
    if (!token || token === '') {
      navigate('/login');
    }
  });

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}