import { createSlice } from '@reduxjs/toolkit';


export const messageDataSlice = createSlice({
    name: 'messageData',
    initialState:
    [
        {id:1, date: "xx/xx/xxx at xx:xx", name:"Student name", subject:"Tournament Games", message:"<Unread> Arma virumque canō, Trōiae quī prīmus ab ōrīs"},
        {id:2, date: "xx/xx/xxx at xx:xx", name:"Student name", subject:"Review Games/Problems", message:"<Read, Replied> Arma virumque canō, Trōiae quī prīmus ab ōrīs"},
        {id:3, date: "xx/xx/xxx at xx:xx", name:"Student name", subject:"Review OGS League", message:"<Read, No Reply> Arma virumque canō, Trōiae quī prīmus ab ōrīs"},
        {id:4,date: "xx/xx/xxx at xx:xx", name:"Student name", subject:"Play w/ 35pt komi", message:"<Unread> Arma virumque canō, Trōiae quī prīmus ab ōrīs"}
    ],
    reducers: {
        addNewMessageData: (state, action) => {
            const newMessageData = {
                id: new Message(),
                date: action.payload.date,
                name: action.payload.name,
                subject: action.payload.subject,
                message: action.payload.message,
                read: false,
            };
            state.push(newMessageData)
        },
    },
});

export const { addMessageData } = messageDataSlice.actions;

export default messageDataSlice.reducer;