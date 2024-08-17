import React from 'react'
import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography, List, ListItem, ListItemText, ListItemAvatar, Divider } from '@mui/material'
import Img1 from '../assets/Img1.jpg'
import Img2 from '../assets/Img2.png'
import Img3 from '../assets/Img3.png'
import Profile1 from '../assets/profile1.jpeg'
import Profile2 from '../assets/profile2.jpeg'
import Profile3 from '../assets/profile3.png'
import Profile4 from '../assets/profile4.jpeg'
import Profile5 from '../assets/profile5.jpeg'
import Profile6 from '../assets/profile6.png'
import Profile7 from '../assets/profile7.png'
import Profile8 from '../assets/profile8.jpeg'
import Profile9 from '../assets/profile9.png'
const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position='fixed' width={300}>
        <Typography variant='h6' fontWeight={400} color='purple'>Web Dev Community</Typography>
        <AvatarGroup max={7}>

          <Avatar alt='Remy' src={Profile1} />
          <Avatar alt='John' src={Profile7} />
          <Avatar alt='Doa' src={Profile3} />
          <Avatar alt='Khan' src={Profile4} />
          <Avatar alt='Fam' src={Profile5} />
          <Avatar alt='Shao' src={Profile8} />
          <Avatar alt='Lama' src={Profile2} />
          <Avatar alt='Maso' src={Profile9} />
          <Avatar alt='Nan' src={Profile6} />
          <Avatar alt='Zoe' src={Profile1} />
          <Avatar alt='Hye' src={Profile2} />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={400} mt={2} mb={2} color='purple'>Popular Topics</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src={Img1} alt="1" />
          </ImageListItem>
          {/* 2 */}
          <ImageListItem>
            <img src={Img2} alt="2" />
          </ImageListItem>
          {/* 3 */}
          <ImageListItem>
            <img src={Img3} alt="3" />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={400} mt={2} color='purple'>Latest Conversations</Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src={Profile4} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src={Profile7} />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src={Profile5} />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>

        {/*  */}
      </Box>
    </Box>
  )
}

export default Rightbar
