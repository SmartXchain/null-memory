import meme from "./images/meme.png"
import meme1 from "./images/meme1.png"
import meme2 from "./images/meme2.png"

function Main(props) {
    return (
        <main className="main">
            <section>
                <div className="hero">"Understanding Null Memory: Avoiding Critical Errors in Software Development"</div>
            </section>
            <section className="articles">
                <article>
                    <h3>Basics of Null Dereferencing</h3>
                    <p>Null dereferencing occurs when a program tries to access or modify data at a null pointer address, leading to runtime errors or crashes. Null pointers represent a non-existent memory location. Dereferencing them can cause undefined behavior. Ensuring pointers are valid before dereferencing is crucial for stable software.</p>
                </article>
                <article>
                    <h3>Consequences of Null Dereferencing</h3>
                    <p>Dereferencing a null pointer can result in program crashes, data corruption, or security vulnerabilities. Most operating systems block access to the null address, triggering a segmentation fault. Developers should validate pointers before use to prevent such issues, often using techniques like assertions or conditional checks.</p>
                </article>
                <article>
                    <h3>Preventing Null Dereference</h3>
                    <p>Preventing null pointer dereferencing involves robust pointer management. Initialize pointers properly and check for null before dereferencing. Use modern programming practices like smart pointers in C++ or optional types in languages like Swift and Rust. Static analysis tools can also help detect potential null dereferences during development.</p>
                </article>
            </section>
            <figure>
                <img className="img" src={meme} alt="meme"/>
                <img className="img" src={meme2} alt="meme"/>
                <img className="img" src={meme1} alt="meme"/>
            </figure>
        </main>
    )
}

export default Main;