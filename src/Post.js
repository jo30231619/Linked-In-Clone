import { Avatar } from '@mui/material';
import React from 'react';
import InputOption from './InputOption';
import './Post.css';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


function Post( { name, description, message, photoUrl }) {
  return (
    <div className='post'>
        <div className="post_header">
            <Avatar />
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post_body">
            <p>{message}</p>
        </div>

        <div className="post_buttons">
            <InputOption Icon={ThumbUpAltOutlinedIcon}  title='Like' color='gray'/>
            <InputOption Icon={ChatOutlinedIcon} title='Comment' color='gray' />
            <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray' />
            <InputOption Icon={SendOutlinedIcon} title='Send' color='gray' />
        </div>
    </div>
  );
}

export default Post

//props = properties that the component will have.
//For example, we are now working on the post component for out app
//the post component will be made up of name, desription, message and photo url
//these are all the properties you will see on the app