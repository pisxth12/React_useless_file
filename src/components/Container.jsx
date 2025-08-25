export default function Container({children}){

    return(
        <main className="container">
            <h1>Container</h1>
           <hr />
            {children}
        </main>
    )

}