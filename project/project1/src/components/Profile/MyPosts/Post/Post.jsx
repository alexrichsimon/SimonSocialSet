import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src='https://www.soyuz.ru/public/uploads/files/2/7182764/20180227141719e7f91c889d.jpg ' />
            {props.message}
            <div>
                <span>
                    Likes: { props.likesCount }
                </span> 
            </div>
        </div>
    )
}

export default Post;