export default function Result({result, questions}){
    return(
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
    )
}