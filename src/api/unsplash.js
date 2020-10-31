import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID m03wpXynrzdQ1NZhJTUTh5-kb0PXTPkDL28cFHYHqOU',
    },
})
