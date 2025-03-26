import React from 'react'
import './Button.css'

export function Button() {
  return (
    <button class="botao">
      <a href="https://api.whatsapp.com/send?phone=5548984115443&text=Olá,%20quero%20saber%20mais!" target="_blank">
        <span class="abrirwhats"> Chamar no WhatsApp </span>
      </a>
    </button>
  )
}