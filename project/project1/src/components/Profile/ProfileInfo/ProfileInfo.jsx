import React from 'react';
import s from './ProfileInfo.module.css' ;

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://videohive.img.customer.envatousercontent.com/files/227895820/Gold-Black%20Background%20%20%2001_preview1%20.JPG?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=96ade62e73c6da2715511973b1539d8e'></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;