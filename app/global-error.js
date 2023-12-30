'use client'
export default function Error({error, reset}){
    return(
        <html>
            <body>
             <div className="container">
              <h2>مشکلی پیش اومده</h2>
              <h3>در layout اصلی</h3>
            {/* reset rerenders component surrounded with errorboundary  */}
              <button onClick={()=> reset()}>دوباره تلاش کن</button>
            </div>
           </body>
        </html>
       

    )
}