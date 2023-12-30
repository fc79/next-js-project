export default async function Skills(){
    await new Promise((r)=> setTimeout(r,2000));
    return(
        <div className="quiz-container" style={{backgroundColor:"blue"}}>
          مهارت‌های من
        </div>
    )
}