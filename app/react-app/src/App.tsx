import './App.css';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { Counter } from './components/Counter';

const App = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AppTitle />
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              <AppMenuItem label="Counter" href="/"></AppMenuItem>
              <AppMenuItem label="Todos" href="/todos"></AppMenuItem>
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
        <Counter />
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

const AppMenuItem = (props: { label: string; href: string }) => {
  return (
    <Typography
      variant="h6"
      component="a"
      href={props.href}
      sx={{
        color: 'inherit',
        textDecoration: 'none'
      }}
    >
      {props.label}
    </Typography>
  );
};

export default App;
