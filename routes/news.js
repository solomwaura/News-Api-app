const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/news', (req, res)=>{
    res.render('news')
})

router.get('/news',async(req,res)=>{
    // const country = req.params.country;
    // country = 'us';

    // const category = req.params.category;
    // category = 'sports';
    // url = http://localhost:3540/news/us/sports:

    const API_KEY = 'b2481e727a18465abe944711455c1a07';
    try {
        const response = await axios.get(`http://localhost:3540/news&apiKey=${API_KEY}`)
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;