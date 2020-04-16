import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialogs + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialogs}>{props.message}</div>
}


const Dialogs = (props) => {

    let dialogsData = [
        {id: '1', name: 'Simon'},
        {id: '2', name: 'Tania'},
        {id: '3', name: 'Denis'},
        {id: '4', name: 'Andrey'},
        {id: '5', name: 'Sasha'},
        {id: '6', name: 'Vlad'}
    ]

    let messagesData = [
        {id: '1', message: 'Hi, bro!'},
        {id: '2', message: 'I love you'},
        {id: '3', message: 'yo'},
        {id: '4', message: 'Whats up'},
        {id: '5', message: 'How are you?'},
        {id: '6', message: 'Hi, bro!'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogsItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogsItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
                <Message message={messagesData[5].message}/>
            </div>
        </div>
    )
}

export default Dialogs;