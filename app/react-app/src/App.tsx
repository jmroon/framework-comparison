import './App.css';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';
import { CounterPage } from './routes/CounterPage';

const App = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AppTitle />
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              <Button component={Link} to={'/counter'} color="inherit">
                Counter
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Container
        maxWidth="xl"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1rem'
        }}
      >
        <Routes>
          <Route path="/counter" element={<CounterPage />} />
        </Routes>
      </Container>
    </Box>
  );
};

const AppTitle = () => (
  <Typography
    variant="h5"
    component="a"
    href=""
    sx={{
      flexGrow: 1,
      color: 'inherit',
      textDecoration: 'none'
    }}
  >
    React
  </Typography>
);

export default App;
