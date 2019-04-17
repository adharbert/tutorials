import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4dd6364bb3780f0b8f3cc982276cf1a553106b6a917b66e8540d0e00546a7570'
    }
})