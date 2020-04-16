import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activelink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/dialogs' activeClassName={s.activelink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/News' activeClassName={s.activelink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Music' activeClassName={s.activelink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Settings' activeClassName={s.activelink}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;