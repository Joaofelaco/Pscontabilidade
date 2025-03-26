import React from 'react'
import './Navbar.css'

export function Navbar() {
    return (
        <nav class="menu">
            <div class="logo">
                <img class="logoimg" src="/logopaty.svg" alt="logo" /></div>
            <ul class="navegacao">
                <li>
                    <a href="#Início">Início</a>
                </li>
                <li>
                    <a href="#Pscontabilidade">Pscontabilidade</a>
                </li>
                <li>
                    <a href="#container">Serviços</a>
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
    )
}