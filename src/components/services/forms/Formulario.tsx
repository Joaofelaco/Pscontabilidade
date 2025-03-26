import React from "react";
import './formulario.css'

export function Formulario() {
  return (
    <div className="formss">
      <form>
        <label htmlFor="form">Nome:</label>
        <input type="text" id="nome" name="nome" required /><br /><br />

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" required /><br /><br />

        <label htmlFor="telefone">Telefone:</label>
        <input type="tel" id="telefone" name="telefone" required /><br /><br />

        <label htmlFor="mensagem">Mensagem:</label><br />
        <textarea id="mensagem" name="mensagem" rows={4} cols={30} required></textarea><br /><br />

        <button className="botaoform" type="submit">Enviar</button>
      </form>
    </div>
  )

}