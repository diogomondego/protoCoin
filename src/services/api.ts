import axios from 'axios'

const api = axios.create({
  baseURL: 'https://www.binance.com/api/'
})

export default api