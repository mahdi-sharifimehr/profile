import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    image: '',
    name: '',
    email: '',
    password: '',
    website: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setImage: (state, action) => {
            state.image = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setWebsite: (state, action) => {
            state.website = action.payload;
        },
    },
});

export const { setImage, setName, setEmail, setPassword, setWebsite } = userSlice.actions;

export const ImageAction = (image) => dispatch => {
    dispatch(setImage(image));
};

export const NameAction = (name) => dispatch => {
    dispatch(setName(name));
};

export const EmailAction = (email) => dispatch => {
    dispatch(setEmail(email));
};

export const PasswordAction = (password) => dispatch => {
    dispatch(setPassword(password));
};

export const WebsiteAction = (website) => dispatch => {
    dispatch(setWebsite(website));
};

export default userSlice.reducer;