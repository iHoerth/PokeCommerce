import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { toTitleCase } from '../Services/Helpers';
import Counter from './Counter';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit">
        PokeCommerce
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Checkout() {
  const [cart, addToCart, removeFromCart, clearCart, user, setUser,totalInCart] = useContext(CartContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    alert('COMPRA REALIZADA');
    navigate('/pokemon')
    clearCart();
  };

  return (
    <div style={{display:'flex'}}>
      <div style={{width:'350px', marginLeft:'40px'}}>
        <div style={{
          width:'300px',
          marginTop: '60px'
          }}>
            <Typography style={{marginBottom:"25px"}}component="h1" variant="h5">
            POKEMONES
          </Typography>
          {
            cart.map(ele => {
              return(
                <div key={ele.name} className='checkout-products'
                style={{
                  border:'1px solid rgb(194, 194, 194)',
                  borderRadius: '4px',
                  boxShadow: '0 0 2px rgb(145, 144, 144)',
                  width:'100%',
                  marginTop:'10px'
                  }}>
                  <div>
                    <div>{toTitleCase(ele.name)}</div>
                    <div>Quantity: {ele.quantity}</div>
                    <div>${ele.cost * ele.quantity}</div>
                    <Counter poke={ele.poke} style={{position:'relative'}}/>
                  </div>
                  <img src={ele.img} alt={ele.nombre+' img'} />
                </div>
              )
            })
          }
        </div>
      </div>
      <div style={{marginLeft: '60px', width:'50%'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography component="h1" variant="h5">
            CHECKOUT
          </Typography>
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
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Credit Card"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{backgroundColor:"#E64848"}}
              sx={{ mt: 3, mb: 2 }}
            >
              Confirmar Compra ${cart.reduce((acc,ele) => acc + ele.cost * ele.quantity ,0)}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </div>
    </div>
  );
}