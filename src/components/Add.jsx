import { Tooltip, Fab, styled, Modal, Box, Typography, Avatar, TextField, Stack, ButtonGroup, Button, } from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px'
})

const StyledFab = styled(Fab)({
    backgroundColor: 'purple',
    color: 'white',
    '&:hover':{
backgroundColor: 'white',
    color: 'purple'
    }
})

const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip onClick={e => setOpen(true)}
                title='New Post' sx={{ position: 'fixed', bottom: 20, left: { xs: 'calc(50% - 25px)', md: 30 } }}>
                <StyledFab aria-label='add'>
                    <AddIcon />
                </StyledFab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={'background.default'} color={'text.primary'} p={3} borderRadius={5}>
                    <Typography variant='h6' color='gray' textAlign='center'>
                        Create new post
                    </Typography>
                    <UserBox>
                        <Avatar alt="S" src="/static/images/avatar/1.jpg" sx={{ width: 30, height: 30, bgcolor: 'purple' }} />
                        <Typography fontWeight={500} variant='span'>Sehar Tahir</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: '100%' }} id='standard-multiline-static' multiline rows={4} placeholder="What's on your mind?"
                        variant='standard'
                    />
                    <Stack direction='row' gap={1} mt={2} mb={3}>
                        <EmojiEmotions color='primary' />
                        <Image color='secondary' />
                        <VideoCameraBack color='success' />
                        <PersonAdd color='error' />
                    </Stack>
                    <ButtonGroup fullWidth variant='contained' aria-label='outlined primary button group'>
                        <Button sx={{backgroundColor: 'purple' , "&:hover":{backgroundColor:'white', color:'purple'}}}>Post</Button>
                        <Button sx={{width:'100px', backgroundColor: 'purple' , "&:hover":{backgroundColor:'white', color:'purple'}}}>
                            <DateRange/></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add
