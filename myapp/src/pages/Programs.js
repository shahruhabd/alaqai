import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../css/programs.css'
import karate from '../img/programs/karate.png'
import draw from '../img/programs/draw.png'
import chess from '../img/programs/chess.png'
import dance from '../img/programs/dance.png'

function Programs() {
    const cards = [
        { title: "Каратэ", image: karate, description: "Программа каратэ направлена на физическое развитие детей, улучшение координации движений и воспитание уверенности в себе. Занятия строятся на основе японских боевых искусств и включают в себя изучение базовых техник, ката и спарринга. Программа способствует развитию дисциплины и уважения к окружающим." },
        { title: "Рисование", image: draw, description: "Программа рисования направлена на развитие творческих способностей и воображения. Дети изучают различные техники рисования, работу с цветом и композицией. Занятия помогают формировать эстетический вкус и способствуют релаксации и самовыражению." },
        { title: "Современные танцы", image: dance, description: "Танцевальная программа включает в себя изучение различных стилей современного танца. Занятия способствуют улучшению физической формы, развитию ритма и музыкальности. Танцы дают возможность для социализации и развития творческих способностей детей." },
        { title: "Шахматы", image: chess, description: "Шахматная программа разработана для развития логического и стратегического мышления детей. Шахматы учат планированию, принятию решений и умению анализировать последствия своих действий. Занятия включают изучение шахматных правил, отработку игровых комбинаций и участие в турнирах." },
    ];
  
    return (
      <div className='programs_page' id='program'>
        <div className='programs_title'>Программы</div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 5000, 
            disableOnInteraction: false, 
          }}
          pagination={{ clickable: true }}
          className='slider_wrap'
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
              navigation: false
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
              navigation: true 
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
              navigation: true 
            },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index} className='slider_card'>
              <h3 className='programm_card_title'>{card.title}</h3>
              <img src={card.image} alt={card.title} className='slider_img'/>
              <p className='programm_card_desc'>{card.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
  
export default Programs;