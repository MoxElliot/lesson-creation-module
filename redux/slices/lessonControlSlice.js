import { createSlice } from '@reduxjs/toolkit';

export const lessonControlSlice = createSlice({
    name: 'lessonControl',
    initialState: {
        editLesson: false,
        createLesson: true,
        lessonAttachmentList: [],
        removeIndex:"",
        attachClear:false,
        lessonFilters:'ALL'
    },
    reducers: {
        showEditLesson(state, action) {
            state.editLesson = action.payload
        },
        showCreateLesson(state, action) {
            state.createLesson = action.payload
        },
        setAttachementList(state, action) {
            state.lessonAttachmentList = action.payload
        },
        updateLessonAttachmentList(state, action) {
            if (state.lessonAttachmentList === undefined || state.lessonAttachmentList === null) {
                state.lessonAttachmentList = []
            }
            state.lessonAttachmentList = [...state.lessonAttachmentList, action.payload]
        },
        removeLessonAttachment(state, action) {
            state.removeIndex = action.payload
            state.lessonAttachmentList.splice(state.removeIndex, 1)
            console.log("in slice")
        },
        clearLessonAttachmentList(state, action) {
            state.lessonAttachmentList = action.payload
         
        },
        toggleAttachClear(state, action) {
            state.attachClear = action.payload
           
        },
        lessonFilterControl(state, action) {
            state.lessonFilters = action.payload
        }
    },
});

export const { showEditLesson, showCreateLesson, setAttachementList, updateLessonAttachmentList, removeLessonAttachment, clearLessonAttachmentList, toggleAttachClear, lessonFilterControl } = lessonControlSlice.actions;
export default lessonControlSlice.reducer;