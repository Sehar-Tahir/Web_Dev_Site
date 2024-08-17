import { AppBar, styled, Toolbar, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import Mail from '@mui/icons-material/Mail';
import { Notifications } from '@mui/icons-material';
import AvatarIcon from '../assets/AvatarIcon.png'

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'purple'
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        display: 'flex',
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    }
}));

const Navbar = () => {
    // Menu open or close (useState)
    const [open, setOpen] = useState(false)
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
                    Web Dev Site
                </Typography>
                <DeveloperModeIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
                <Search><InputBase placeholder='search...' /></Search>
                <Icons>
                    <Badge badgeContent={2} color='error'>
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color='error'>
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ width: 35, height: 35 }} src={AvatarIcon} onClick={(e) => setOpen(true)} />
                </Icons>
                <UserBox onClick={(e) => setOpen(true)}>
                    <Avatar sx={{ width: 35, height: 35 }} src={AvatarIcon} />
                    <Typography variant='span'>Sehar</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu id='demo-positioned-menu' aria-labelledby='demo-positioned-button' open={open} onClose={e => setOpen(false)} anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}>
                <MenuItem>Profile</MenuItem>
                <MenuItem>My Account</MenuItem>
                <MenuItem>LogOut</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar
