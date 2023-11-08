import React from 'react'
import '../css/price.css'

function Price() {
    const price = [
        {title: 'Летний лагерь', cost: 70},
        {title: 'Продленка', cost: 60},
        {title: 'Подготовка к школе', cost: 45},
        {title: 'Английский язык', cost: 18},
        {title: 'Шахматы', cost: 18},
        {title: 'Каратэ', cost: 18},
        {title: 'Современные танцы', cost: 18},
        {title: 'Рисование', cost: 18},
        {title: 'Логопед', cost: 7},
    ]
  return (
    <div className='price_wrapper'>
        <div className='price_container'>
            <div className='price_header'>
                <div className='price_fst-less'>
                    На секции пробное занятие <span style={{'color': '#F8F398'}}>бесплатное</span>
                </div>
                <div className='price_title'>
                    Наш прайс лист
                </div>
                <div className='price_alert'>
                    *цена указана за 1 месяц
                </div>
            </div>
            <div className='price_body'>
                {price.map((price, index) => (
                    <div className='price_card'>
                        <div>{price.title}</div>
                        <div>{price.cost}.000₸</div>
                    </div>
                ))}
            </div>
        </div>
    </div>

  )
}

export default Price