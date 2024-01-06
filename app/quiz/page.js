"use client";
import { useState } from "react";
import { quiz }  from "../data";
import { Result, Buttons, Answers } from "./components"
export default function Quiz(){
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [checked, setChecked] = useState(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [showResult, setShowResult] = useState(false);
    // const [answers, setAnswers] = useState([]);
    // const [correctAnswer, setCorrectAnswer] = useState("");
    const [result, setResutl] = useState({
        score: 0, correctAnswer:0, wrongAnswer: 0 });
    const { questions } = quiz;
    const { answers, correctAnswer } = questions[activeQuestion];
    // useEffect(()=>{
    //  getData()
    // }, [result]);

    // function getData(){
    //     setAnswers(questions[activeQuestion].answers)
    //     setCorrectAnswer(questions[activeQuestion].correctAnswer)
    // }
    // async function timeDelay(){
    //     const delay = 1 + Math.floor(Math.random()*5);
    //     await timeout(delay * 1000)
    // }
    // function timeout(delay){
    //     return new Promise(time => setTimeout(time, delay))
    // }
    console.log("r", answers )
    const onAnswerSelected = (answer, index) =>{
        setChecked(true);
        setSelectedAnswerIndex(index);
        if( answer === correctAnswer ){
            setSelectedAnswer(true);
        }
        else{
            setSelectedAnswer(false)
        }
    };
    const nextQuestion = () =>{
        setSelectedAnswerIndex(null);
        setResutl((prev)=> selectedAnswer ? {...prev, score: prev.score + 5,
        correctAnswer: prev.correctAnswer + 1}:
        {...prev, wrongAnswer: prev.wrongAnswer + 1});
        if( activeQuestion !== questions.length - 1){
            setActiveQuestion(prev => prev + 1);
            // setCorrectAnswer("");
            // setAnswers([])
        }
        else {
            setActiveQuestion(0);
            setShowResult(true)
        }
        setChecked(false);
    }
    // throw new Error;
    return(
        <>
            <h1>صفحه آزمون</h1>
            <div>{!showResult ?(
                <h2>
                     آزمون: {activeQuestion + 1} از
                     <span>{questions.length}</span>
                </h2>
            ):null}
            </div>
            <div>
                {!showResult ? (
                    <div className="quiz-container">
                        <h3>
                          {questions[activeQuestion].question}
                        </h3>
                        <Answers  answers={answers} onAnswerSelected={onAnswerSelected} selectedAnswerIndex={selectedAnswerIndex}/>
                        <Buttons checked={checked} nextQuestion={nextQuestion}
                        activeQuestion={activeQuestion} questions={questions} />
                    </div>
                ): (
                    <Result result={result} questions={questions} />
                )}
            </div>
        </>
    )
}