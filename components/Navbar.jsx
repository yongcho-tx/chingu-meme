'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import MenuIcon from '@mui/icons-material/Menu'

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {/* <EmojiEmotionsIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          /> */}
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Memegen
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              color='inherit'
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
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
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign='center' component={Link} href='/'>
                  Home
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign='center' component={Link} href='/about'>
                  About
                </Typography>
              </MenuItem>
              {/* <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign='center' component={Link} href='/contact'>
                  Contact
                </Typography>
              </MenuItem> */}
            </Menu>
          </Box>
          {/* <EmojiEmotionsIcon
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
          /> */}
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Memegen
          </Typography>

          {/* //Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'right',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
              component={Link}
              href='/'
            >
              Home
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
              component={Link}
              href='/about'
            >
              About
            </Button>
            {/* <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
              component={Link}
              href='/contact'
            >
              Contact
            </Button> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
