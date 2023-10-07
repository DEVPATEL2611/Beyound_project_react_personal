import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Popper from '@mui/material/Popper';
import {Link} from  'react-router-dom';

const pages = ['MEN', 'WOMEN', 'COMOBOS', 'JOGGERS'];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  return (
    <AppBar position="static" style={{ background: "white", color: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: "bolder",
              letterSpacing: '.1rem',
              color: 'black',
              textDecoration: 'none',
            }}
          ><Link to="/" style={{color:"black",textDecoration:"none"}}>BEYOUNG</Link>
            
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center" >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: "bolder",
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to="/" style={{color:"black",textDecoration:"none"}}>BEYOUNG</Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', fontWeight: "bold" }}
              >
                {page}
              </Button>
            ))}
          </Box>
       
          <IconButton aria-label="search">
            <SearchIcon style={{ color: "black" }} onClick={handleClick} aria-describedby={id} />
          </IconButton>
         
          <Popper id={id} open={open} anchorEl={anchorEl} style={{background:"white",width:"380px"}}>
            <Box sx={{  p:2, bgcolor: '',marginTop:"23px",borderTop:"1px solid gray" }}>
              <input tyepe="search" placeholder='Search tshirt......' style={{outline:"none",paddingLeft:"20px",height:"35px",background:"white",border:"1px solid gray",width:"260px"}}/>
              <button style={{height:"35px",background:"black",border:"1px solid black",color:"white",padding:"0px 20px"}}> search </button>
            </Box>
          </Popper>
          <Link to="/wishlist" style={{color:"black",textDecoration:"none"}}>
             <IconButton aria-label="wishlist">
                <FavoriteIcon style={{ color: "black" }} />
              </IconButton>
          </Link>
          <Link to="/cart" style={{color:"black",textDecoration:"none"}}>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={2} color="warning" style={{ color: "black" }}>
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Link>


          



        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
