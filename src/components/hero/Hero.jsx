import './Hero.css';

function Hero() {

    return(

        <section className="heroContainer">
            <div className="heroText">
                <h1>Olá, me chamo Davi Beli.</h1>
                <h2>Desenvolvedor de Software</h2>
            </div>

            <div className="heroImagem">
                <img src="/DaviBeliSemFundo.png" alt="Foto Davi Beli Rosa"/>
            </div>

            <div className="heroBtns">
                <a href="#projetos" className="btnProjetos">Meus Projetos</a>
                <a href="#contato" className="btnContato">Vamos conversar</a>
            </div>
        </section>

    );

}

export default Hero;