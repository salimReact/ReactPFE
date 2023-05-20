import React, { Fragment } from 'react'

export default function RateUs() {
  return (
    <Fragment>
    <div className='rate'>
    <h1>Rate Us</h1>
    <h2>
      Feel free to rate our service
    </h2>
    <div className='ratestar-source'>
    <svg>
    <linearGradient
               x1='50%'
               y1='5.41294643%'
               x2='87.5527344%'
               y2='65.4921875%'
               id='grad'
             >
    <stop stopColor='#bf209f' offset='0%'></stop>
    <stop stopColor='#d62a9d' offset='60%'></stop>
    <stop stopColor='#ED009E' offset='100%'></stop>
    </linearGradient>
    <symbol id='ratestar' viewBox='153 89 106 108'>
    <polygon
                 id='ratestar-shape'
                 stroke='url(#grad)'
                 strokeWidth='5'
                 fill='currentColor'
                 points='206 162.5 176.610737 185.45085 189.356511 150.407797 158.447174 129.54915 195.713758 130.842203 206 95 216.286242 130.842203 253.552826 129.54915 222.643489 150.407797 235.389263 185.45085'
               ></polygon>
    </symbol>
    </svg>
    </div>
    <div className='ratestar-container'>
    <input type='radio' name='ratestar' id='five' />
    <label htmlFor='five'>
    <svg className='ratestar'>
    <use xlinkHref='#ratestar' />
    </svg>
    </label>
    <input type='radio' name='ratestar' id='four' />
    <label htmlFor='four'>
    <svg className='ratestar'>
    <use xlinkHref='#ratestar' />
    </svg>
    </label>
    <input type='radio' name='ratestar' id='three' />
    <label htmlFor='three'>
    <svg className='ratestar'>
    <use xlinkHref='#ratestar' />
    </svg>
    </label>
    <input type='radio' name='ratestar' id='two' />
    <label htmlFor='two'>
    <svg className='ratestar'>
    <use xlinkHref='#ratestar' />
    </svg>
    </label>
    <input type='radio' name='ratestar' id='one' />
    <label htmlFor='one'>
    <svg className='ratestar'>
    <use xlinkHref='#ratestar' />
    </svg>
    </label>
    </div>
    </div>
    </Fragment>
  )
}
