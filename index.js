const axios = require('axios')
const cheerio = require('cheerio');
const { response } = require('express');
const express = require('express')

const app = express();

// const url = 'https://www.theguardian.com/international'
// const url = 'https://inc42.com/'
const url = 'https://www.thehindu.com/'

axios(url)
    .then(response => {
        const html = response.data;
        // console.log(html);
        const $ = cheerio.load(html)
        const articles = []
        // $('.fc-item__title', html).each(function() {
        $('.media', html).each(function() {
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })
        console.log(articles)
    }).catch(err=>console.log(err))



const PORT = 3000

app.listen(PORT, () => console.log(`Server is started at PORT ${PORT}`))