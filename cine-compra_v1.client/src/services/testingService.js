import axios from "axios"

export const testingService = (string) => {
  return axios.get(`https://localhost:7020/${string}`)
}
