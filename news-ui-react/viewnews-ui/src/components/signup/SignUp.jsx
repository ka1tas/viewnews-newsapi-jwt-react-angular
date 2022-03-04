import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { RiUserAddFill } from 'react-icons/ri';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { loadLanguages, loadRoles, clearSignup, signUp } from '../../store/actions/ViewNewsActions';


const theme = createTheme();

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let user = useSelector(state => state.user);
  let languages = useSelector(state => state.user?.languages);
  let errorMessage = useSelector(state => state.user?.errorMessage);
  let roles = useSelector(state => state.user?.roles);
  let signupStatus = useSelector(state => state.user.signupStatus);
  let emailExist = useSelector(state => state.user.emailExist);

  const [language, setLanguage] = React.useState("");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };


  useEffect(() => {
    let auth = user.authStatus;
    dispatch(clearSignup());
    if (auth) {
      navigate("/")
    } else if (signupStatus) {
      navigate("/login")
    } else {
      if (languages?.length === 0) {
        dispatch(loadLanguages());
      }
      if (roles?.length === 0) {
        dispatch(loadRoles());
      }

    }

  }, [])

  useEffect(() => {
    if (signupStatus) {

      setTimeout(() => {
        navigate("/login")
      }, 5000);


    }
  }, [signupStatus])



  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    let user = {
      email: data.get('email'),
      password: data.get('password'),
      name: data.get('firstName') + " " + data.get('lastName'),
      language: {
        id: language
      },
      blocked: "no"
    };

    dispatch(signUp(user));
  };



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <RiUserAddFill />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          {(errorMessage) &&
            <Typography className="text-red-500" component="h3" variant="h7">
              {errorMessage}
            </Typography>
          }

          {(emailExist) &&
            <Typography className="text-red-500" component="h3" variant="h7">
              Entered email already registered with diffrent user.
            </Typography>
          }

          {(signupStatus) &&
            <Typography className="text-green-500" component="h3" variant="h7">
              Registration successful, You will be redirected to the login page in 5 sec.
            </Typography>
          }



          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12}>
                <InputLabel id="language-select-label">Languages</InputLabel>
                <Select
                  className="w-full"
                  labelId="language-select-label"
                  id="language-select"
                  value={language}
                  label="Langauge"
                  onChange={handleChange}
                >
                  {languages?.map(language =>
                  (
                    <MenuItem key={language?.id} value={language?.id}>{language?.name}</MenuItem>
                  )
                  )}


                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel className="text-slate-500"
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive breaking news and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" className="text-blue-500" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
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