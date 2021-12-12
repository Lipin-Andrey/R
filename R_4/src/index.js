import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
// import styles from './Message.module.css';
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ChatList } from "./Homework-4/components/ChatList";
import { MessageInput } from "./Homework-4/components/MessageInput";
import { MessageList } from "./Homework-4/components/MessageList";

const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        gridTemplateColumns: "288px 1fr"
    }
});

const Homework =() =>{
    const classes = useStyles();
    const [messageList, setMessageList] = useState([]);

    const sendMessage =(author,text) => {
        const newMessageList = [...messageList];
        const newMessage = {
            author,
            text
        };
        newMessageList.push(newMessage);
        setMessageList(newMessageList);
    };

    const onSendMessage = (value) => {
        sendMessage("user",value);
    };

    useEffect(() => {
        if(messageList.length === 0){
            return;
        }

        const tail = messageList[messageList.length - 1];
        if (tail.author === 'bot') {
            return;
        }

        sendMessage("bot","hello");
    },[messageList]);

    return (
        <div className={classes.wrapper}>
            <ChatList
                list={[
                    {
                        name:"name",
                        id:"1"
                    }  ,
                    {
                        name:"name",
                        id:"2"
                    }  ,
                    {
                        name:"name",
                        id:"3"
                    }  ,
                    {
                        name:"name",
                        id:"4"
                    }
                ]}
            />
            <div>
                <MessageList messageList={messageList} />
                <MessageInput onSend={onSendMessage} />
            </div>
        </div>

    );
};


ReactDOM.render(
  <React.StrictMode>
    <Homework />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
