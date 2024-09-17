const express = require('express');
const calculatorController = require('../controllers/calculator.controller');
const router = express.Router();

router.get('/results/:n1/:n2',
    calculatorController.addition
);
router.post('/results',
    calculatorController.multiply
);
router.put('/results',
    calculatorController.divide
);
router.patch('/results',
    calculatorController.pow
);
router.delete('/results/:n1/:n2',
    calculatorController.substraction
);

module.exports = router;
