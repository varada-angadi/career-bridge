const mongoose = require('mongoose')


const technicalQuestionSchema = new mongoose.Schema({
    question:{
        type: String,
        required:[true, "Question is required"]
    },
    intention:{
        type: String,
        required:[true, "Intention is required"]
    },
    answer:{
        type: String,
        required:[true, "Answer is required"]
    }
},{
    _id: false
})

const behaviorialQuestionSchema = new mongoose.Schema({
    question:{
        type: String,
        required:[true, "Question is required"]
    },
    intention:{
        type: String,
        required:[true, "Intention is required"]
    },
    answer:{
        type: String,
        required:[true, "Answer is required"]
    }
},{
    _id: false
})

const skillGapSchema = new mongoose.Schema({
    skill:{
        type: String,
        required:[true, "Skill is required"]
    },
    severity:{
        type: String,
        enum:["low", "medium","high"],
        required:[true, "Intention is required"]
    }
},{
    _id: false
})

const preparationPlanSchema = new mongoose.Schema({
    day:{
        type: Number,
        required:[true, "Day is required"]
    },
    focus:{
        type: String,
        required:[true, "Focus is required"]
    },
    tasks:[{
        type: String,
        required:[true, "Task is required"]
    }]
},{
    _id: false
})
/**
 * - Job description: String
 * - Resume text: String
 * - Seft description: String
 * 
 * - matchScore:  Number
 * - Technical questions [{
 *      question
 *      intention
 *      answer
 *          }]
 * - Behavioral questions [{
 *      question
 *      intention
 *      answer
 *          }]
 * - Skill gaps [   
 *      skill
 *      severity enum (low, med, high)
 *          ]
 * - Preparation plan [{
 *      day: Number
 *      focus: String
 *      tasks: [Strin]
 *          }]
 */
const interviewReportSchema = new mongoose.Schema({
    jobDescription: {
        type: String,
        required: [true, "JD is required"],
    },
    resume: {
        type: String,
    },
    selfDescription:{
        type: String,
    },
    matchScore:{
        type: Number,
        min: 0,
        max: 100,
    },
    technicalQuestions:[technicalQuestionSchema],
    behaviorialQuestions:[behaviorialQuestionSchema],
    skillGap:[skillGapSchema],
    preparationPlan:[preparationPlanSchema],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
}, {
    timestamps: true
})



const interviewReportModel = mongoose.model("interviewreport", interviewReportSchema)

module.exports = interviewReportModel;