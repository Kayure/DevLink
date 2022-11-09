import './home.css'


export default function Home(){
    return(
        <div className="home-container">
            <h1>Luccas Kayure</h1>
            <span>Meus links </span>

            <main className="links">
                <section className="link-area">
                    <a href="#">
                        <p>Canal Youtube</p>
                    </a>
                </section>

                <section className="link-area">
                    <a href="#">
                        <p>Grupo Telegram</p>
                    </a>
                </section>

                <section className="link-area">
                    <a href="#">
                        <p>Instagram</p>
                    </a>
                </section>
            </main>
        </div>
    )
}