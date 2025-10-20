import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Ficha({ animal, atribute, imageUrl, imageSize = 200, description }) {
  return (
    <Card sx={{ maxWidth: 300, m: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height={imageSize}
        image={imageUrl}
        alt={`Foto de ${animal}`}
      />
      <CardContent>
        <Typography variant="h6" color="text.primary">{animal}</Typography>
        <Typography variant="body2" color="text.secondary">Raza: {atribute}</Typography>
        {description && (
          <Typography variant="body2" sx={{ mt: 1 }}>{description}</Typography>
        )}
      </CardContent>
    </Card>
  );
}