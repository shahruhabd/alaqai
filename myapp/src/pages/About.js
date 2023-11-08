import React from 'react'
import img1 from '../img/about/1.png'
import img2 from '../img/about/2.png'
import '../css/about.css'

function About() {
  return (
    <div className='about_wrapper' id='about'>
        <div className="about_header">
            <div>О нас</div>
        </div>
        <div className="about_content">
            <div className='about_prg'>
                <div className='about_prg_title'>Наш детский образовательный центр: Развитие, Учеба и Веселье в Гармонии</div>
                <div className='about_prg_text'>Добро пожаловать в наш детский образовательный центр, где мы стремимся создать уникальное пространство для всестороннего развития вашего ребенка. Наш центр предлагает широкий спектр программ, направленных на умственное, творческое и физическое развитие детей в приятной и поддерживающей атмосфере.</div>
            </div>
            <div className='about_prg'>
                <div className='about_prg_title'>Наш подход к обучению:</div>
                <div className='about_prg_text'>Мы верим в баланс между академическими занятиями и игровым обучением. В нашем центре ребенок может открыть для себя мир каратэ, шахмат, рисования и современных танцев в руках опытных наставников. Мы создаем условия, при которых каждый ученик может ощутить ауру знаний и вдохновения.</div>
            </div>
            <div className='about_prg'>
                <div className='about_prg_title'>Присоединяйтесь к нам:</div>
                <div className='about_prg_text'>Мы приглашаем вас и вашего ребенка на бесплатное пробное занятие, чтобы лично убедиться в теплой и дружественной атмосфере нашего центра. Свяжитесь с нами, чтобы узнать больше о том, как мы можем вместе помочь вашему ребенку достичь новых высот!</div>
            </div>
        </div>
        <div className="about_photos">
            <img src={img1} alt="" />
            <img src={img2} alt="" className='about_second_img'/>
        </div>
    </div>
  )
}

export default About