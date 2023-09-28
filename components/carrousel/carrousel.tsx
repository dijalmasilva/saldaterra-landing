"use client";

import './carrousel.scss'
import {useEffect, useState} from "react";

type Props = {
    images: string[]
}

const Carrousel = ({ images }: Props) => {
    const length = images.length;

    const [selected, setSelected] = useState(0);
    const [fade, setFade] = useState<'fade-in' | 'fade-out' | ''>(''); // Novo estado

    useEffect(() => {
        const interval = setInterval(() => {
            setFade('fade-out'); // Inicia o fadeOut
            setTimeout(() => {
                setSelected((prevSelected) => (prevSelected + 1) % length);
                setFade('fade-in'); // Inicia o fadeIn
                setTimeout(() => {
                    setFade(''); // Reseta o fade depois de concluído
                }, 500);
            }, 500);
        }, 5000);

        return () => clearInterval(interval);
    }, [selected, length]);

    const getCircles = () => {
        let circles = [];
        for (let i = 0; i < length; i++) {
            circles.push(
                <div
                    className={`circle ${i === selected ? 'selected' : ''}`}
                    key={i}
                    onClick={() => setSelected(i)}
                />
            )
        }
        return circles;
    }

    return (
        <div className={`carrousel ${fade}`} style={{ backgroundImage: `url(${images[selected]})` }}>
            <div className="items-carrousel">
                {getCircles()}
            </div>
        </div>
    )
}

export default Carrousel;
