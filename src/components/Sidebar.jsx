import React from 'react'
import { Box, List, ListItem, ListItemButton, styled, ListItemText, Switch, ListItemIcon } from '@mui/material'
import { AccountBox, Groups, Home, ModeNight, Pages, Person, Settings, Storefront } from '@mui/icons-material'


const StyledListItemIcon = styled(ListItemIcon)({
  color: 'purple',
  //   '&:hover':{
  // backgroundColor: 'white',
  //   color: 'purple'
  //   }
})

const Sidebar = ({ mode, setMode }) => {
  return (

    <>
      <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Box position='fixed'>
          <List>
            {/* 1 */}
            <ListItem disablePadding>
              <ListItemButton component='a' href='#home'>
                <StyledListItemIcon>
                  <Home />
                </StyledListItemIcon>
                <ListItemText primary='Homepage' />
              </ListItemButton>
            </ListItem>
            {/* 2 */}
            <ListItem disablePadding>
              <ListItemButton component='a' href='#pages'>
                <StyledListItemIcon>
                  <Pages />
                </StyledListItemIcon>
                <ListItemText primary='Pages' />
              </ListItemButton>
            </ListItem>
            {/* 3 */}
            <ListItem disablePadding>
              <ListItemButton component='a' href='#groups'>
                <StyledListItemIcon>
                  <Groups />
                </StyledListItemIcon>
                <ListItemText primary='Groups' />
              </ListItemButton>
            </ListItem>
            {/* 4 */}
            <ListItem disablePadding>
              <ListItemButton component='a' href='#marketplace'>
                <StyledListItemIcon>
                  <Storefront />
                </StyledListItemIcon>
                <ListItemText primary='Marketplace' />
              </ListItemButton>
            </ListItem>
            {/* 5 */}
            <ListItem disablePadding>
              <ListItemButton component='a' href='#friends'>
                <StyledListItemIcon>
                  <Person />
                </StyledListItemIcon>
                <ListItemText primary='Friends' />
              </ListItemButton>
            </ListItem>
            {/* 6 */}
            <ListItem disablePadding>
              <ListItemButton component='a' href='#settings'>
                <StyledListItemIcon>
                  <Settings />
                </StyledListItemIcon>
                <ListItemText primary='Settings' />
              </ListItemButton>
            </ListItem>
            {/* 7 */}
            <ListItem disablePadding>
              <ListItemButton component='a' href='#profile'>
                <StyledListItemIcon>
                  <AccountBox />
                </StyledListItemIcon>
                <ListItemText primary='Profile' />
              </ListItemButton>
            </ListItem>
            {/* 8 */}
            <ListItem disablePadding>
              <ListItemButton component='a' href='#home'>
                <StyledListItemIcon>
                  <ModeNight />
                </StyledListItemIcon>
                <Switch onChange={e => setMode(mode === 'light' ? 'dark' : 'light')} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  )
}

export default Sidebar
