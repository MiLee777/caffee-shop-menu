import { useState } from "react";
import { data } from "./data";
import ArrowRight from './assets/icon/arrow-right.svg';
import ArrowLeft from './assets/icon/arrow-left.svg';
import Cup from './assets/icon/coffee-cup.svg'

function Carousel({ addItem }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const items = data[currentSlide];

    const prevSlide = () => {
        setCurrentSlide(slide => {
            slide--;
            if(slide < 0) {
                slide = data.length - 1;
            }
            return slide;
        })
    }

    const nextSlide = () => {
        setCurrentSlide(slide => {
            slide++;
            if(slide > data.length - 1) {
                slide = 0;
            }
            return slide;
        })
    }
    
    return (
        <div className='container'>
            <div>
                <button onClick={() => prevSlide()} className='arrowBtn'><img src={ArrowLeft} alt='Arrow Left' /></button>
            </div>
            <div>
                <div>
                    <h1>Menu <img src={Cup} alt='Coffe cup' width='30px'/></h1>
                </div>
                <div className='container__menu'>
                {items.map(element => {
                    const { id, name, description, price, image } = element;

                    return (
                        <div key={ id } className='menu__item'>
                            <img src={ image } alt='Menu' />
                            <div className='item__container'>
                                <h2>{ name }</h2>
                            </div>
                            <div className='item__container item__description'>
                                <p>{ description }</p>
                            </div>
                            <div className='item__container'>
                                <h2>${ price }</h2>
                            </div>
                            <div className='item__container item__btn_add'>
                                <button onClick={() => addItem(element)} className='btn_add btn'>Add</button>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
            <div>
                <button onClick={() => nextSlide()} className='arrowBtn'><img src={ArrowRight} alt='Arrow Right' /></button>
            </div>
        </div>
    )
}

export default Carousel;

