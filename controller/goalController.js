import expressAsyncHandler from "express-async-handler"

// @desc Get Goals
// @route GET/api/goals
// @access Private
const getGoals = expressAsyncHandler (req, res)=> {
  res.status(200).json({message: 'Get Goals'})
} 
// @desc Set Goals
// @route Post/api/goals
// @access Private
const setGoal =  expressAsyncHandler (req, res) => {

  if(!req.body.text){
    res.status(400)
    throw new Error ('Please add a text field ')
  }
  res.status(200).json({message: 'Set goals'})
}
// @desc Update Goals
// @route Update/api/goals/:id
// @access Private
const UpdateGoals = expressAsyncHandler (req, res) => {
  res.status(200).json({message: `Update goal ${req.params.id}`})
}
// @desc Delete Goals
// @route Delete/api/goals/:id
// @access Private
const deleteGoals = expressAsyncHandler (req, res) => {
  res.status(200).json({message: `Delete goal ${req.params.id}`})
}
module.exports = {
  getGoals,
  setGoal,
  UpdateGoals,
  deleteGoals
}