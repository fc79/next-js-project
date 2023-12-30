export default async function About(){
    await new Promise((r)=> setTimeout(r, 1000));
    return(
        <main>
            <div className="quiz-container" style={{backgroundColor:"red"}}>
                <h2>اصلی</h2>
            </div>
        </main>
    )
}