import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { HiLogin } from 'react-icons/hi';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { logIn } from '../../store/actions/ViewNewsActions';


const theme = createTheme();

export default function SignInSide(props) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let user = useSelector(state => state.user);
  let authStatus = useSelector(state => state.user.authStatus);
  let isBlocked = useSelector(state => state.user.isblocked);

  useEffect(() => {
    let auth = (user.authStatus && !user.isblocked);
    if (auth) {
      sessionStorage.setItem("JWT_TOKEN", "Bearer " + user.token);
      navigate("/")
    }
  }, [user])


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let user = ({
      email: data.get('email'),
      password: data.get('password')
    });
    dispatch(logIn(user));
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '91.5vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <HiLogin />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            {(authStatus !== null && authStatus === false) &&
              <Typography className="text-red-500" component="h3" variant="h6">
                Username or Password is incorrect.
              </Typography>
            }

            {isBlocked &&
              <Typography className="text-red-500" component="h3" variant="h6">
                This user is currently blocked. kindly contact Admin.
              </Typography>}

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link to="#" variant="body2">
                    Forgot password?
                  </Link> */}
                </Grid>
                <Grid item>
                  <Link to="/signup" className="text-blue-500" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}




function Copyright(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'NotCopyright © '}
      <Link color="inherit" to="#">
        View news
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
