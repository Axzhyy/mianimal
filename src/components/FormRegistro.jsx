import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'; // Grid clásico
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';

export default function FormRegistro() {
  const [datos, setDatos] = useState({ nombre: '', raza: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Mascota registrada:', datos);
    // aquí enviarías datos al backend o lo que toque
    // opcional: limpiar
    // setDatos({ nombre: '', raza: '' });
  };

  // handler genérico para cualquier TextField con "name"
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos((prev) => ({ ...prev, [name]: value }));
  };

  const nombreError = datos.nombre.trim().length === 0;
  const razaError = datos.raza.trim().length === 0;
  const formInvalido = nombreError || razaError;

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} square={false} sx={{ textAlign: 'center', p: 2, mt: 3 }}>
        <Typography variant="h6" color="text.primary" sx={{ mt: 1, mb: 2 }}>
          Registra tu mascota
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="nombre"
                label="Nombre de mascota"
                variant="outlined"
                fullWidth
                required
                margin="normal"
                value={datos.nombre}
                onChange={handleChange}
                error={nombreError}
                helperText={nombreError ? 'El nombre es obligatorio' : ' '}
                autoComplete="off"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name="raza"
                label="Raza"
                variant="outlined"
                fullWidth
                required
                margin="normal"
                value={datos.raza}
                onChange={handleChange}
                error={razaError}
                helperText={razaError ? 'La raza es obligatoria' : ' '}
                autoComplete="off"
              />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="outlined" fullWidth disabled={formInvalido}>
                Registrar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}
