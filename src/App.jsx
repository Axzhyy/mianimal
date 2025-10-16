import { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid'; // Grid clásico
import FormRegistro from './components/FormRegistro.jsx';

// Si la imagen está en "public/img/gato.webp", en Vite se usa ruta absoluta:
const GATO_URL = '/img/gato.webp';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Stack direction="column" spacing={{ xs: 1, sm: 3 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* En Vite, no uses ../public/... */}
          <Avatar
            className="gatofeo"
            src={GATO_URL}
            sx={{
              width: { xs: 150, sm: 250, md: 400, lg: 500 },
              height: { xs: 150, sm: 250, md: 400, lg: 500 }
            }}
          />
          {/* Typography no tiene prop "size"; usa sx para el tamaño si quieres */}
          <Typography variant="h3" sx={{ mt: 1 }}>
            Soy un gato vivo y feliz
          </Typography>
        </div>

        <div className="card">
          {/* Para deshabilitar: disabled */}
          <Button
            sx={{
              backgroundColor: 'red',
              color: 'white',
              '&:hover': { backgroundColor: '#f0d665', color: 'blue' }
            }}
            onClick={() => setCount((c) => c + 1)}
          >
            Clicks {count}
          </Button>
        </div>

        <Button size="large" variant="text" color="warning">
          Púlsame
        </Button>
        <Button variant="contained" sx={{ backgroundColor: 'green', color: 'white', '&:hover': { backgroundColor: '#0c6b11' } }}>
          Variante Contained
        </Button>
        <Button variant="outlined">Variante Outlined</Button>
      </Stack>
      <FormRegistro />

      {/* Grid clásico: container en el padre, item en los hijos */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6}>
          <div style={{ backgroundColor: 'lightblue', height: 100 }}>Prueba 1</div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ backgroundColor: 'pink', height: 100 }}>Prueba 2</div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <div style={{ backgroundColor: 'green', height: 100 }}>Prueba 3</div>
        </Grid>
      </Grid>

      
    </>
  );
}

export default App;
