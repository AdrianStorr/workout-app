const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
  Workout.create (req.body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id,
    {$push:{"exercises":req.body}}, {new: true})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/api/workouts/:range", (req, res) => {
  Workout.find({}).limit(7)
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      console.log(err);
    });
});



module.exports = router;
