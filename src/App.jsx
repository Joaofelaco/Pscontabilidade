import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <head>
        <body>
          
        <button class="botaofixo">
    <a class="whatsapp" href="https://api.whatsapp.com/send?phone=5548984115443&text=Olá,%20quero%20saber%20mais!" target="_blank">
        <span class="abrirwhats"> Chamar no WhatsApp </span>
    </a>
</button>



          <nav class="menu">
          
            <ul class="navegacao">
              <li>
                <a href="#Início">Início</a>
              </li>
              <li>
                <a href="#Pscontabilidade">Pscontabilidade</a>
              </li>
              <li>
                <a href="#Serviços">Serviços</a>
              </li>
              <li>
                <a href="#Blog">Blog</a>
              </li>
              <li>
                <a href="#Novidades">Novidades</a>
              </li>
              <li>
                <a href="#Contato">Contato</a>
              </li>
            </ul>
          </nav>
          <div id="" class="Home">
            <img src="/fotopaty.svg" alt="Fotobook" />
            <h1>Contabilidade é poder contar com pessoas, conte com a <p>PsContabilidade</p></h1>
          </div>
          <div className="container">
            <div className="card">
              <h3>Card 1</h3>
              <p>Acesso rápido e fácil a documentos disponíveis no nosso portal 24 horas.</p>
            </div>
            <div className="card">
              <h3>Card 2</h3>
              <p>Seus colaboradores sempre atualizados para obter o melhor rendimento.</p>
            </div>
            <div className="card">
              <h3>Card 3</h3>
              <p>Invista em inteligência e planejamento e ganhe dinheiro.</p>
            </div>
          </div>
          <div className="Carrosel">
            <div className="card">
              <h3>Card 1</h3>
              <p>Acesso rápido e fácil a documentos disponíveis no nosso portal 24 horas.</p>
            </div>
            <div className="card">
              <h3>Card 2</h3>
              <p>Seus colaboradores sempre atualizados para obter o melhor rendimento.</p>
            </div>
            <div className="card">
              <h3>Card 3</h3>
              <p>Invista em inteligência e planejamento e ganhe dinheiro.</p>
            </div>
            <div className="card">
              <h3>Card 4</h3>
              <p>Invista em inteligência e planejamento e ganhe dinheiro.</p>
            </div>
            <div className="card">
              <h3>Card 5</h3>
              <p>Invista em inteligência e planejamento e ganhe dinheiro.</p>
            </div>
            <div className="card">
              <h3>Card 6</h3>
              <p>Invista em inteligência e planejamento e ganhe dinheiro.</p>
            </div>
            <div className="card">
              <h3>Card 7</h3>
              <p>Invista em inteligência e planejamento e ganhe dinheiro.</p>
            </div>
            <div className="card">
              <h3>Card 8</h3>
              <p>Invista em inteligência e planejamento e ganhe dinheiro.</p>
            </div>
          </div>
          <div>
            <h1>Tenha a Tecnologia aliada ao conhecimento.</h1>
            <h2>botar uma logo ao lado 'só pra lembrar'</h2>
            <h3>Mais de 100 softwares de integração contábil dispensando o lançamento manual das informações, agilizando o processo, reduzindo a possibilidade de erros e aprimorando a experiência do cliente com os nossos serviços.
              Acesso rápido e fácil a documentos disponíveis no nosso portal 24 horas por dia tornando mais simples os procedimentos burocráticos com soluções ágeis, eficientes e inovadoras.
              Através do nosso portal, é possível realizar o lançamento de variáveis da folha
              ex: faltas, atrasos, horas-extras, convênios, etc,
              sem necessidade de controles paralelos, auxiliando nos processos e na comunicação da empresa com a gestão contábil.
            </h3>
          </div>
          <div>Blog PScontabilidade
            <div className="Columnns">
              <div className="card">
                <h3>coluna 1</h3>
                <p>Acesso rápido e fácil a documentos disponíveis no nosso portal 24 horas.</p>
              </div>
              <div className="card">
                <h3>coluna 2</h3>
                <p>Seus colaboradores sempre atualizados para obter o melhor rendimento.</p>
              </div>
              <div className="card">
                <h3>coluna 3</h3>
                <p>Invista em inteligência e planejamento e ganhe dinheiro.</p>
              </div>
            </div>
          </div>
          <div>
            <form>
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" required /><br /><br />

              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" required /><br /><br />

              <label htmlFor="telefone">Telefone:</label>
              <input type="tel" id="telefone" name="telefone" required /><br /><br />

              <label htmlFor="mensagem">Mensagem:</label><br />
              <textarea id="mensagem" name="mensagem" rows="4" cols="30" required></textarea><br /><br />

              <button type="submit">Enviar</button>
            </form>
          </div>
          <div>
            <footer >
              <p>&copy; 2025 Minha Empresa. Todos os direitos reservados.</p>
              <p>Contato: <a href="mailto:contato@minhaempresa.com">contato@minhaempresa.com</a> | Telefone: (XX) XXXX-XXXX</p>
              <p>
                Siga-nos:
                <a href="https://facebook.com" target="_blank">Facebook</a> |
                <a href="https://twitter.com" target="_blank">Twitter</a> |
                <a href="https://instagram.com" target="_blank">Instagram</a>
              </p>
            </footer>
          </div>
        </body>
      </head>
    </>
  )
}
export default App