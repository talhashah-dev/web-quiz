const express = require('express');
const { submitResult, getResults, getResultById } = require('../controllers/resultController');
const router = express.Router();

router.get("/:id", getResultById); 
router.get("/", getResults);  
router.post("/", submitResult);   

module.exports = router;
