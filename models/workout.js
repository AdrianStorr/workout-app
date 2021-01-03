const mongoose= require ("mongoose");
const Schema= mongoose.Schema;
const workoutschema= new Schema (
   {
       day:{
           type:Date,
           default:()=>new Date()
       },
       exercises:[
           {
               type:{
                   type: String,
                   trim: true,
                   required:"Enter an Exercise type"
               },
               name:{
                    type: String,
                    trim: true,
                    required:"Enter Workout name"
               },
               duration:{
                   type: Number,
                   required:"Enter Workout duration by minutes"
               },
               weight:{
                   type:Number,
               },
               reps:{
                   type:Number,
               },
               sets:{
                   type:Number,
               },
               distance:{
                   type:Number,
               },
           }
       ]
   },
    {
        toJSON:{
            virtuals:true
        }
    }
);

workoutschema.virtual("totalDuration").get(function(){
    return this.exercises.reduce((total,exercise)=>{
        return total + exercise.duration
    },0)
})

const Workout = mongoose.model("Workout", workoutschema);

module.exports = Workout;