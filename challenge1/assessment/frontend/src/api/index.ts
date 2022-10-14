import axios from 'axios';
import { BASE_URL } from '../config';

export const API = axios.create({
  baseURL: BASE_URL,
});
