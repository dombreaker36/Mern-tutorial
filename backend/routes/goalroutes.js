const express = require('express')
const { getGoals, setGoal, UpdateGoals, deleteGoals } = require('../../controller/goalController')

const router = express.Router()

router.get('/', getGoals)
router.post('/',setGoal)
router.put('/:id', UpdateGoals)
router.delete('/:id', deleteGoals )

module.exports = router