import { createSlice } from '@reduxjs/toolkit';


const rootSlice = createSlice({
    name: "root",
    initialState: {
        first_name: 'Frida',
        last_name: 'Kahlo',
        nationality: "Mexican",
        art_period: 'Surrealist',
        style: 'oil on canvas',
        most_famous_work: 'The Two Fridas',
        scandals: 'Gender-bending & bi-sexual',
       
    },
    reducers: {
        chooseFirstName: (state, action) => { state.first_name = action.payload},
        chooseLastName: (state, action) => { state.last_name = action.payload},
        chooseNationality: (state, action) => { state.nationality = action.payload},
        choosePeriod: (state, action) => { state.art_period = action.payload},
        chooseStyle: (state, action) => { state.style = action.payload},
        chooseWork: (state, action) => { state.most_famous_work = action.payload},
        chooseScandals: (state, action) => { state.scandals = action.payload},
    }
})

// Exporting those Reducers (so much typing :())
export const reducer = rootSlice.reducer;
export const { chooseFirstName, chooseLastName, chooseNationality, choosePeriod, chooseStyle, 
    chooseWork, chooseScandals, } = rootSlice.actions