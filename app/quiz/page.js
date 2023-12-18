"use client";
import { useState } from "react";
import { quiz }  from "../data";
export default function Page(){
    console.log("q", quiz.questions)
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [checked, setChecked] = useState(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [result, setResutl] = useState({
        score: 0, correctAnswer:0, wrongAnswer: 0 });
    const { questions } = quiz;
    const { answers, correctAnswer } = questions[activeQuestion];

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
        }
        else {
            setActiveQuestion(0);
            setShowResult(true)
        }
        setChecked(false);
    }
    return(
        <div className="container">
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
                        {answers.map((answer, index)=>(
                            <li key={index} onClick={()=> onAnswerSelected(answer, index)}
                             className={selectedAnswerIndex === index ? "li-selected" : "li-hover"}>
                                <span>{answer}</span>
                             </li>
                        ))}
                        {
                            checked ? (
                                <button className="btn" onClick={nextQuestion}>
                                   {activeQuestion === questions.length - 1 ? " پایان" : "بعدی"}
                                </button>
                            ) : (
                                <button className="btn-disabled" onClick={()=> nextQuestion} disabled>
                                   {activeQuestion === questions.length - 1 ? " پایان" : "بعدی"}
                                 </button>
                            )
                        }
                    </div>
                ): (
                    <div className="quiz-container">
                         <h3>نتایج</h3>
                         <h3>به‌طور کلی %{(result.score / 25) * 100} سوالات جواب داده شده‌اند.</h3>
                         <div className="results">
                          <p>کل سوالات: {questions.length}</p>
                          <p>کل امتیاز: {result.score}</p>
                          <p>سوالات درست: {result.correctAnswer}</p>
                          <p className="padd-b-10 ">سوالات غلط: {result.wrongAnswer}</p>
                        </div>
                        <button className="btn" onClick={()=> window.location.reload()}>شروع مجدد آزمون</button>
                    </div>
                )}
            </div>
        </div>
    )
}