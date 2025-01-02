const express = require('express')
const router = express.Router()
const data = {imgURL:'/img/background/about.jpg', title:'Neden biz?', subTitle:`Mitoloji Ailesi`}


router.get('/', (req, res)=>{
   res.render('site/about', {
      headerData:data
   })
})



module.exports = router