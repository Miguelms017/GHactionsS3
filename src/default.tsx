import { Fragment } from "react/jsx-runtime"

function Header(){
    return (<header>
        <h1>Demo React Page</h1>
    </header>)
}

function Content(){

    const learned = ["EC2", "Nginx",  "Apache", "S3 Static", "SSL Certificates", "CI/CD pipeline"];

    return(
        <main>
        <h1>Demo Page</h1>
        <p> This is a demo page created with react. deployed in AWS S3 Bucket</p>
        <br />
        <p>Until Now, It was learned to use</p>
        <ul>
            {learned.map( item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
        </main>
    )
}

function Footer(){
    return (
    <footer>
        <p>Just a Demo</p>
        <div id="bandera"></div>
    </footer>)
}

function Total(){
    return (
        <>
        <div id="bandera"></div>
        <Header />
        <div id="grad"></div>
        <Content />
        <Footer />
        </>
    )
}
export default Total