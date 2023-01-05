import { createSlice } from '@reduxjs/toolkit';

let d = new Date();
const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();

}
const currentYear = d.getFullYear()
const daysInMonth = (m) => {
    return getDaysInMonth(currentYear, m + 1, 0)
}

const weekNavSlice = createSlice({
    name: 'weekNav',
    initialState: {
        baseDay: d.getDate(),
        month: d.getMonth(),
        year: d.getFullYear(),
        
        pastBaseDayArr: [d.getDate()],
        pastMonthArr: [d.getMonth()],
        pastYearArr: [d.getFullYear()],
    },
    reducers: {
        nextWeek(state, action){
            state.baseDay +=action.payload;

            state.pastBaseDayArr = [...state.pastBaseDayArr, state.baseDay]
            
            state.pastMonthArr = [...state.pastMonthArr, state.month]

            state.pastYearArr = [...state.pastYearArr, state.year]

        },
        lastWeek(state){
            if (state.pastBaseDayArr.length > 1 || state.pastMonthArr.length > 1 ||state.pastYearArr.length > 1 ) {

                const newPastBaseDay = state.pastBaseDayArr[state.pastBaseDayArr.length - 2];
                const lastBaseDay = state.pastBaseDayArr.slice(0, state.pastBaseDayArr.length - 1);

                const newPastMonth = state.pastMonthArr[state.pastMonthArr.length - 2];
                const lastMonth = state.pastMonthArr.slice(0, state.pastMonthArr.length - 1);
    
                const newPastYear = state.pastYearArr[state.pastYearArr.length - 2];
                const lastYear = state.pastYearArr.slice(0, state.pastYearArr.length - 1);
    
                state.baseDay = newPastBaseDay
                state.pastBaseDayArr = lastBaseDay

                state.month = newPastMonth
                state.pastMonthArr = lastMonth

                state.year = newPastYear
                state.pastYearArr = lastYear
            } else {
                alert("This is the END")
            }
         },
        advanceMonth(state, action){
            if((state.month) >= 11) {
                state.month -= 12;
            }
             state.month += action.payload
             state.baseDay -= daysInMonth(state.month-1)
        } ,
        advanceYear(state, action){
            if(state.month === 0)
            state.year += action.payload
        },
        makeToday(state){
            state.baseDay = d.getDate()
            state.month = d.getMonth()
            state.year = d.getFullYear()
        },
    },
});

const { actions, reducer } = weekNavSlice;
export const { nextWeek, lastWeek, advanceMonth, advanceYear, makeToday } = actions;
export default reducer;
