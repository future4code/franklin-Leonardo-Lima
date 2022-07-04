import axios from 'axios'
import { API_URL } from '../Config'

export const Api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
