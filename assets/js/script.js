(() => {
    const drawer = document.getElementById("drawer");

    document.querySelectorAll('[data-drawer="open"]').forEach((item) => {
        item.addEventListener('click', () => {
            if (drawer) {  // Corrigido "drawe" para "drawer"
                drawer.classList.add("opened");
            }
        });
    });

    document.querySelectorAll('[data-drawer="close"]').forEach((item) => {
        item.addEventListener('click', () => {
            if (drawer) {  // Corrigido "drawe" para "drawer"
                drawer.classList.remove("opened");
            }
        });
    });

    document.querySelectorAll('[data-drawer="toggle"]').forEach((item) => {
        item.addEventListener('click', () => {
            if (drawer) {  // Corrigido "drawe" para "drawer"
                drawer.classList.toggle("opened");
            }
        });
    });

    //////////////////////////////////////////////////////////////

    const player = document.querySelector('.player');
    const video = player ? player.querySelector('video') : null; // Garantir que "player" existe antes de procurar o vídeo

    if (video) {
        video.addEventListener('playing', () => {
            if (player) {  // Verificando "player" antes de acessar suas classes
                player.classList.add('playing');
            }
            video.controls = true;  // Definindo os controles do vídeo como visíveis
        });

        video.addEventListener('pause', () => {
            if (player) {  // Verificando "player" antes de acessar suas classes
                player.classList.remove('playing');
            }
            video.controls = false;  // Definindo os controles do vídeo como ocultos
        });
    }

    // Corrigido erro de digitação em "querySelector9" para "querySelector"
    if (player) {
        const overlay = player.querySelector('.overlay');
        if (overlay) {
            overlay.addEventListener('click', () => {
                if (video) {
                    video.play();  // Inicia a reprodução do vídeo ao clicar no overlay
                }
            });
        }
    }


})();

import React from "react";
import { useNavigate } from "react-router-dom";

function LoginButton() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/dashboard"); // Substitua com a rota desejada
    };

    return <button onClick={handleLogin}>Login</button>;
}

export default LoginButton;

