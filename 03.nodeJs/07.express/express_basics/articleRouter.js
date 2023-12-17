const express = require('express')
const router = express.Router()

// Middleware for router
// router.use((req, res, next) => {
//   console.log("Time", Date.now(), "From article middleware");
//   // return res.status(403).send("Forbidden"); // man qilish uchun!
//   next();
// })

router.get('/articles', (req, res) => {
  console.log(req.query) // gets the data send by url like /articles?page=5
  res.send('Articles page')
})
router.post('/articles', (req, res) => {
  // console.log(req.query) // gets the data send by url like /articles?page=5
  console.log(req.body);
  res.send('Articles page')
})

router.get('/article/:id', (req, res) => {
  console.log(req.body);
  res.send(`Article ${req.params.id}`);
})

router.put('/article/:id', (req, res) => {
  console.log(req.body);
  res.send(`Article ${req.params.id} update`)
})

router.delete('/article/:id', (req, res) => {
  res.send(`Article ${req.params.id} delete`)
})

module.exports = router;