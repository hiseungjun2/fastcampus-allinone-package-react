import axios from 'axios';

const instance = axios.create({
 baseURL : "https://api.themoviedb.org/3",
 params : {
   api_key : "7689176d2bbd446e33c0a439d1795a1b",
   language : "ko-KR"
 }
})

export default instance;