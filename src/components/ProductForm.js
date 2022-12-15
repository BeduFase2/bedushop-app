import { Grid } from '@mui/material';
import { Box, Button, Container, InputAdornment, OutlinedInput } from '@mui/material';
import Dropzone from './Dropzone';
import ImageGride from './ImageGride'
import React, { useCallback, useState } from "react";
import cuid from "cuid";
import { Avatar, CssBaseline, TextField, Typography } from '@mui/material';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Layout from './Layout';

import RestService from '../services/service';

export default function ProductForm() {
  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages(
          [{ id: cuid(), src: e.target.result }],
        );
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const body = {
      name: data.get('name'),
      price: data.get('price'),
      description: data.get('description'),
      image: data.get('url')
    }

    RestService.createProduct(body).then((data) => {
      console.log(data)
      if (data.ok) {
        alert("Registro exitoso")
      }
    }).catch(e => {
      alert('Ocurrió un error.')
    });
  }

  return (
    <Layout children={
      <>
        <CssBaseline />
        <Container maxWidth={false} disableGutters sx={{ height: "20vh" }}>
          <Box sx={{ height: '100vh', width: '100vw', display: "flex", flexDirection: "row", alignItems: "center" }} >
            <Grid container direction="row" spacing={2} justifyContent="space-around" alignItems="center" sx={{ height: "100vh", width: "100" }}>
              <Grid item md={4}>
                <Box sx={{ width: '100', display: "row", flexDirection: "columns", justifyContent: "center" }}>
                  <Box sx={{ width: '100', border: 3, borderStyle: 'dashed', borderColor: 'blue', padding: 1 }}>
                    <ImageGride images={images}></ImageGride>
                  </Box>
                  <Box sx={{ width: '100' }}>
                    <Dropzone onDrop={onDrop} accept={"image/*"}></Dropzone>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={6}>
                <Container component="main" maxWidth="md">
                  <CssBaseline />
                  <Box
                    sx={{
                      marginTop: 8,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                      <Inventory2OutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      Crear producto
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                          <TextField
                            name="name"
                            required
                            fullWidth
                            id="name"
                            label="Nombre"
                            autoFocus
                          />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                          <FormControl fullWidth sx={{}}>
                            <InputLabel htmlFor="price">Precio</InputLabel>
                            <OutlinedInput
                              id="price"
                              startAdornment={<InputAdornment position="start">$</InputAdornment>}
                              label="price"
                              name="price"
                            />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            name="description"
                            label="Descripcion"
                            id="description"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            id="url"
                            label="URL"
                            name="url"
                          />
                        </Grid>
                      </Grid>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Enviar
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </>
    } />);
}
