import axios from 'axios'

const api = axios.create({
  baseURL: 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-lima',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
