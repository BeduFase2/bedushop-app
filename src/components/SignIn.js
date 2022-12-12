import * as React from 'react';
import {
    Avatar, Button, CssBaseline, TextField, Link, Grid, Box,
    Typography, Container, Collapse, Alert, IconButton
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import RestService from '../services/service'

const theme = createTheme();

export default function SignIn() {
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const email = data.get('email');
        const password = data.get('password');

        if (!email || email === '') {
            alert('Por favor ingrese un correo válido');
        } else if (!password || password === '') {
            alert('Por favor ingrese una contraseña válida');
        } else {
            
            const body = {
                email: email,
                password: password
            }

            RestService.signIn(body).then((data) => {
                if (data['token']) {
                    localStorage.setItem('token', data['token']);
                    navigate('/');
                } else {
                    setMessage(data['message']);
                    setOpen(true);
                }
            }).catch(e => {
                alert('Ocurrió un error.')
            });
        }
    }

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
                    }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Iniciar sesión
                    </Typography>
                    <Box sx={{ width: '100%' }}>
                        <Collapse in={open}>
                            <Alert
                                severity="error"
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setOpen(false);
                                        }}>
                                        <CloseOutlinedIcon fontSize="inherit" />
                                    </IconButton>
                                }
                                sx={{ mb: 2 }}>
                                {message}
                            </Alert>
                        </Collapse>
                    </Box>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}>
                            Enviar
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Aún no tienes cuenta? Registrarse"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}