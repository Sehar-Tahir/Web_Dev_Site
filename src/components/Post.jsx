import React from 'react'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import AvatarIcon from '../assets/AvatarIcon.png'
import Reactimg from '../assets/react.png'

const Post = () => {
  return (
    <>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'purple', width: 55, height: 55 }} src={AvatarIcon} >
              {/* S */}
            </Avatar>
          }
          action={
            <IconButton aria-label='setting'>
              <MoreVert />
            </IconButton>
          }
          title='Sehar Tahir'
          subheader='August 14,2024'
        />
        <CardMedia
          component='img'
          height='25%'
          src={Reactimg}
          alt='Dish'
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            facilis veritatis esse inventore velit vitae doloribus rem consequuntur soluta nihil.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favourites'>
            {/* <CheckBox icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}/> */}
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
          </IconButton>
          <IconButton aria-label='share'>
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </>
  )
}

export default Post
