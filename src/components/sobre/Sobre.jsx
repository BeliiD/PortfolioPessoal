import './Sobre.css';

function Sobre() {

    return(

        <section className="sobreContainer" id="sobre">

            <div className="linhaDivisoria"></div>

            <div className="sobreConteudo">
                <h2 className="tituloSecao"> Sobre Mim</h2>

                <div className="sobreTextos">
                    <p>
                        Atualmente, sou estudante de Ciência da Computação no Instituto Federal de São Paulo.
                        Sou um grande entusiasta do Desenvolvimento Full-Stack utilizando as principais tecnologias e linguagens do mercado,
                        como Java, Python, React e Node.js. 
                    </p>
                    <p>
                        Minha experiência prática se baseia em projetos pessoais de algoritmos, estrutura de dados e engenharia de software, 
                        desenvolvidos para aprimorar minhas habilidades em lógica, desenvolvimento de algoritmos e arquitetura de sistemas.
                        Além disso, tenho experiência como bolsista de iniciação científica no projeto COSAIC (Compartilhando Saberes e Inovação na Cibercultura), atuando
                        em desenvolvimento web, gestão de projetos e fluxo de trabalho.
                    </p>
                    <p>
                        Meu objetivo é continuar criando aplicações completas e escaláveis, sempre buscando evoluir para me consolidar
                        como um desenvolvedor full-stack e iniciar minha trajetória no mercado de trabalho, agregando valor real a projetos tecnológicos.
                    </p>

                </div>
            </div>
        </section>

    );

}

export default Sobre;