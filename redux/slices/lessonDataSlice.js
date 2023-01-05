import { createSlice } from '@reduxjs/toolkit';

const date = new Date();
const lessonDate = (d) => (date.getMonth()+1) + "/" + (date.getDate()+d) + "/" + date.getFullYear();

const lessonDataArr = [
    {id:0, date: lessonDate(0), time: "1:00PM", status:"Booked", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf", "Opening.sgf"], name:"Tim Timson", link:"https://us06web.zoom.us/meeting/83072918518"},
    {id:1, date: lessonDate(3), time: "2:00PM", status:"Booked", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf"], name:"John Johnson", link:"https://us06web.zoom.us/meeting/83072918518"},
    {id:2, date: lessonDate(5), time: "1:00PM", status:"Requested", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf"], name:"Sam Samson", link:"https://us06web.zoom.us/meeting/83072918518"},
    {id:3, date: lessonDate(5), time: "3:00PM", status:"Available", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf"], name:"Will Willson", link:"https://us06web.zoom.us/meeting/83072918518"},
    {id:4, date: lessonDate(5), time: "4:00PM", status:"Available", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf", "Opening.sgf"], name:"Tim Timson", link:"https://us06web.zoom.us/meeting/83072918518"},
    {id:5, date: lessonDate(6), time: "1:00PM", status:"Booked", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf"], name:"John Johnson", link:"https://us06web.zoom.us/meeting/83072918518"},
    {id:6, date: lessonDate(6), time: "3:00PM", status:"Requested", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf"], name:"Sam Samson", link:"https://us06web.zoom.us/meeting/83072918518"},
    {id:7, date: lessonDate(6), time: "5:00PM", status:"Available", detail:"Arma virumque canō, Trōiae quī prīmus ab ōrīs", attachment:["Lāvīniaque.sgf"], name:"Will Willson", link:"https://us06web.zoom.us/meeting/83072918518"},
    ]


export const lessonDataSlice = createSlice({
    name: 'lessonData',
    initialState: {
        lessonData: lessonDataArr,
        singleLessonData: "Select a Lesson",
    },
    reducers: {
        addLesson(state, action) {
            state.lessonData.push(action.payload)
        },
        readLesson(state, action) {
            state.singleLessonData = action.payload
        },
        cancelLesson(state, action) {
            const index = action.payload
            const newArray = [...state.lessonData];
            newArray[index].status = 'Canceled'
            state.singleLessonData[3] = 'Canceled'            
        },
        editLessonData(state, action) {
            const obFromEdit = action.payload
            let newOb = {id:"", date: "", time: "", status:"", detail:"", attachment:[""], name:"", link:""}

            newOb.id = obFromEdit.selectedLesson[0]
            newOb.date = obFromEdit.selectedLesson[1]
            newOb.time = obFromEdit.selectedLesson[2]
            newOb.status = obFromEdit.selectedLesson[3]
            newOb.detail = obFromEdit.selectedLesson[4]
            newOb.attachment = obFromEdit.selectedLesson[5]
            newOb.name = obFromEdit.selectedLesson[6]
            newOb.link = obFromEdit.selectedLesson[7]

            state.lessonData.splice(obFromEdit.lessonIndex, 1, newOb)
                       
        }
    },
});

export const { addLesson, readLesson, cancelLesson, editLessonData } = lessonDataSlice.actions;
export default lessonDataSlice.reducer;