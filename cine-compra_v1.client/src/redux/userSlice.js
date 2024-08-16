// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const URL = 'https://localhost:7020/'

// export const loginUser = createAsyncThunk(
//     'user/loginUser',
//     async (userCred) => {
//         // eslint-disable-next-line no-useless-catch
//         try {
//             const request = await axios.post(`${URL}login?Email=${userCred.email}&Password=${userCred.password}`, userCred);
//             const response = request.data;
//             localStorage.setItem('user', JSON.stringify(response));
//             return response;
//         } catch (error) {
//             throw error;
//         }
//     }
// );

// export const registerUser = createAsyncThunk(
//     'user/registerUser',
//     async (userCred) => {

//         // eslint-disable-next-line no-useless-catch
//         try {
//             const request = await axios.post(`${URL}register?UserName=${userCred.userName}&Email=${userCred.email}&Password=${userCred.password}`, userCred);
//             const response = request.data;
//             localStorage.setItem('MessageServer', JSON.stringify(response));
//             return response;
//         } catch (error) {
//             throw error;
//         }
//     }
// );

// const userSlice = createSlice({
//     name: 'user',
//     initialState: {
//         isLoading: false,
//         user: null,
//         error: null
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(loginUser.pending, (state) => {// se ejecuta cuando la acción asíncrona empieza
//                 state.isLoading = true;
//                 state.user = null;
//                 state.error = null;
//             })
//             .addCase(loginUser.fulfilled, (state, action) => {//se ejecuta cuando la acción asíncrona termina con éxito
//                 state.isLoading = false;
//                 if (action.payload && action.payload.result === true)
//                     state.user = action.payload;
//                 if (action.payload?.result === false && action.payload?.message.includes("Wrong"))
//                     state.error = "Wrong Password.";
//                 if (
//                   action.payload?.result === false &&
//                   action.payload?.message.includes("not found")
//                 ) {
//                   state.error = "User not found";
//                 } else {
//                   state.error = "Error inesperado en la respuesta.";
//                 }
//             })
//             .addCase(loginUser.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.user = null;

//                 if (action.error.statusCode === 401) {
//                     console.log("Contraseña incorrecta.");
//                     state.error = "Contraseña incorrecta.";
//                 } else {
//                     console.log("Error en la autenticación:", action.error.message || "Error en la autenticación.");
//                     state.error = action.error.message || "Error en la autenticación.";
//                 }
//             })
//             .addCase(registerUser.pending, (state) => {
//                 state.isLoading = true;
//                 state.user = null;
//                 state.error = null;
//             })
//             .addCase(registerUser.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.user = action.payload;
//                 state.error = null;
//             })
//             .addCase(registerUser.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.user = null;
//                 console.log(action.error);
//                 if (action.error.message === "Request failed with status code 401") {
//                     state.error = "Acceso denegado! Credenciales incorrectas";

//                 }
//                 else if (action.error.message === "Request failed with status code 409") {
//                     state.error = "There is already a user with that email";
//                 }
//                 else {
//                     state.error = action.error.message;
//                 }
//             })
//     }
// })

// export default userSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://localhost:7020/";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCred) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const request = await axios.post(
        `${URL}login?Email=${userCred.email}&Password=${userCred.password}`,
        userCred
      );
      const response = request.data;
      localStorage.setItem("user", JSON.stringify(response));
      return response;
    } catch (error) {
      throw error;
    }
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
        if (action.payload && action.payload.result) {
          state.user = action.payload;
        } else {
          state.error = "Error inesperado en la respuesta.";
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;

        const statusCode = action.error.response?.status; // Ajustado

        if (statusCode === 401) {
          state.error = "Contraseña incorrecta.";
        } else {
          state.error = action.error.message || "Error en la autenticación.";
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

        //const statusCode = action.error.status;

          if (action.error.message === "Request failed with status code 400") {
              state.error = "Acceso denegado! Credenciales incorrectas";
          } else if (
              action.error.message === "Request failed with status code 409"
          ) {
              state.error = "A user with that email already exists.";
          } else {
              state.error = action.error.message;
          }
      });
  },
});

export default userSlice.reducer;
