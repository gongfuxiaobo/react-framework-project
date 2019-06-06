import axios from './api'

export const getMessage = params => axios.get('', params)
