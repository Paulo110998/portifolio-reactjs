import { useState, useEffect } from "react"

// importando a biblioteca swiper  
import { Swiper, SwiperSlide } from "swiper/react"
import { register } from "swiper/element/bundle"

register();

// Importando o css do swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar"
import 'swiper/css/effect-fade';
import "swiper/css/autoplay"


import Projeto1 from "./slides/projeto1"
import Projeto2 from "./slides/projeto2"
import Projeto3 from "./slides/projeto3"
import Projeto4 from "./slides/projeto4"
import Projeto5 from "./slides/projeto5";

import "./projetos.css"

export default function SlideProjetos() {
    const [slidePerview, setSlidePerview] = useState(2);

    var slide1 = <Projeto3 />;
    var slide2 = <Projeto4 />;
    var slide3 = <Projeto1 />;
    var slide4 = <Projeto2 />;
    var slide5 = <Projeto5 />;

    // Array dos objetos/imagens
    const data = [
        { id: 1, image: slide1 },
        { id: 2, image: slide2 },
        { id: 3, image: slide3 },
        { id: 4, image: slide4 },
        { id: 5, image: slide5 },

    ]

    // Controlando a quantidade de slide para tela mobile
    useEffect(() => {
        // Função que verifica se a largura da janela é menor que 720
        function handleResize() {
            if (window.innerWidth < 720) {
                setSlidePerview(1);
            } else {
                setSlidePerview(1);
            }
        }

        handleResize();

        // Sempre que o usuário abrir a tela executa o handleResize 
        window.addEventListener("resize", handleResize);

        // Quando sai do useEffect remove o evento handlwResize
        return () => {
            window.removeEventListener("resize", handleResize);
        }

    }, [])

    return (
        <div>
            <br/>
            <h1>Projects</h1>
            <div className="projeto-slide" id="projeto-slide">
                <Swiper
                    autoplay={{ delay: 10000, disableOnInteraction: false }}
                    slidesPerView={slidePerview}
                    pagination={{ clickable: true }}
                    navigation
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            {item.image}
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>
        </div>
    )

}