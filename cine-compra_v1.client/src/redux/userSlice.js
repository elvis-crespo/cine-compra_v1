import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://localhost:7020/api/v1/auth/";

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (userCred) => {
        const request = await axios.post(
            `${URL}login?Email=${userCred.email}&Password=${userCred.password}`,
            userCred
        );
        const response = request.data;
        localStorage.setItem("user", JSON.stringify(response));
        return response;
    }
);

export const registerUser = createAsyncThunk(
    "user/registerUser",
    async (userCred) => {
        const request = await axios.post(
            `${URL}register?UserName=${userCred.userName}&Email=${userCred.email}&Password=${userCred.password}`,
            userCred
        );
        const response = request.data;
        // localStorage.setItem("MessageServer", JSON.stringify(response));
        return response;
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoading: false,
        user: null,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;

                if (action.payload.message === "Login successful.") {
                    state.user = action.payload;
                }

                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                // const statusCode = action.error.response?.status; // Ajustado
                if (action.error.message === "Request failed with status code 401") {
                    state.error = "Incorrect credentials! Wrong Password.";
                } else if (action.error.message === "Request failed with status code 404") {
                    state.error = "Incorrect credentials! User not found.";
                } else {
                    state.error = "Unknown error. Please try again later.";
                }
            })
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;

                //console.log("mi respuesta ", action.error);
                if (action.error.message === "Request failed with status code 400") {
                    state.error = "The email format is invalid.";
                } else if (action.error.message === "Request failed with status code 409") {
                    state.error = "A user with that email already exists.";
                } else {
                    state.error = "Unknown error. Please try again later.";
                }
            });
    },
});

export default userSlice.reducer;
