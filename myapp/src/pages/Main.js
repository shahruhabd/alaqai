import React from 'react'
import inst from '../img/main_page/inst.png'
import wapp from '../img/main_page/wapp.png'
import mark from '../img/main_page/metka.png'
import card1 from '../img/main_page/1.png'
import card2 from '../img/main_page/2.png'
import card3 from '../img/main_page/3.png'
import '../css/main_page.css'

function Main() {
  return (
    <div className='main_page'>
        <div className="nav">
            <div className="main_links">
                <a href='#program' className="link">Программы</a>
                <a href='#price' className="link">Прайс</a>
                <a href='#about' className="link">О нас</a>
                <a href='#contact' className="link">Контакты</a>
            </div>
            <a href="https://www.instagram.com/alaqai_study/" className='inst'>
                <img src={inst} alt="" width={24}/>
                alaqai_study
            </a>
        </div>
        <div className="main_info">
            <div className="main_info-subtitle">Центр детского развития</div>
            <div className="geo">
                <img src={mark} alt="" width={24}/>
                Алматы
            </div>
            <div className='main_info-name'>Alaqai study</div>
            <a href='https://damubala.kz/' className="damu">Участник Программы "DamuBala"</a>
            <a href="https://wa.me/77016145222" className='wapp'>
                <img src={wapp} alt="" width={24}/>
                Свяжитесь с нами
            </a>
        </div>
        <div className="cards">
            <div className="card">
                <div className="card_title">Готовы к школе?</div>
                <div className="image-container">
                    <img src={card1} alt="" className='card_img' width={300}/>
                </div>
                <div className="card_desc">Интенсивные занятия для развития навыков чтения, письма и математики.</div>
            </div>
            <div className="card">
                <div className="card_title">Веселая Продленка</div>
                <img src={card2} alt="" className='card_img'/>
                <div className="card_desc">Игры и занятия после школы в безопасной и стимулирующей среде.</div>
            </div>
            <div className="card">
                <div className="card_title">Развивающие секции</div>
                <img src={card3} alt="" className='card_img'/>
                <div className="card_desc">Каратэ, Шахматы, Рисование, Современные танцы</div>
            </div>
        </div>
    </div>
  )
}

export default Main