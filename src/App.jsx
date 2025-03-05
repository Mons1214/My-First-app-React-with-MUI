import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


function App() {
  return (
    <div>
      <div className="App">
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </div>
      <div>
        <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar position="below" title={item.title} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
    </div>
  );
}

const itemData = [
  {
    img: 'https://previews.123rf.com/images/fxquadro/fxquadro2203/fxquadro220300424/183755129-perrito-chihuahua-pedigr%C3%AD-con-pelaje-blanco-sobre-fondo-gris.jpg',
    title: 'Pinky',
  },
  {
    img: 'https://thumbs.dreamstime.com/z/chihuahua-blanca-3-a%C3%B1os-9893812.jpg?ct=jpeg',
    title: 'blanco',
  },
  {
    img: 'https://i.pinimg.com/736x/d3/f1/2d/d3f12d810fca5d7f23688bdc8391e692.jpg',
    title: 'cafe',
  },
  {
    img: 'https://i.pinimg.com/736x/27/46/d7/2746d7219c1dc02e0ea42ef5392147d8.jpg',
    title: 'cafecito',
  },
  {
    img: 'https://i.pinimg.com/736x/4c/53/99/4c53992d512adc2f4f4ec8926ea6b27a.jpg',
    title: 'negro',
  },
  {
    img: 'https://i.pinimg.com/736x/ba/29/70/ba2970db921a5a4b1dc025b709287394.jpg',
    title: 'pinto',
  },

  {
    img: 'https://i.pinimg.com/736x/77/b2/c2/77b2c2d22ac30fed514995f751f48a1b.jpg',
    title: 'cafeito',
  },
  {
    img: 'https://i.pinimg.com/736x/2e/ce/03/2ece03d5719e5fa1af8bc48b43284e86.jpg',
    title: 'pintoBlanco',
  },
  {
    img: 'https://i.pinimg.com/736x/67/5d/8f/675d8f39bbcea0c25260d96a8dacb309.jpg',
    title: 'cafecitoBlanco',
  },
];

export default App;
