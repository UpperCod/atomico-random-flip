import { h } from 'atomico'

export default function Logo ({ size = 200, color = 'black' }) {
  return (
    <svg width={size} viewBox='0 0 743 542'>
      <g transform='translate(99.03 100)'>
        <path
          d='M448.071,206a33.317,33.317,0,0,0,24.4-10.4l-4.7-4.2a27.262,27.262,0,0,1-19.7,8.4c-15.7,0-28-13.1-28-29.1s12.3-29.1,28-29.1a27.093,27.093,0,0,1,19.7,8.4l4.7-4.2a33.314,33.314,0,0,0-24.4-10.4c-19.3,0-34.6,15.8-34.6,35.3S428.77,206,448.071,206Zm-413.8-69.9,26.2,68.9h-6.9l-6.9-18.3h-31.8L7.971,205h-7l26.3-68.9h7Zm343.9,0V205h-6.6V136.1Zm-250.2,0v6.2h-22V205h-6.6V142.3H77.47v-6.2Zm166.1,54.7,26.5-54.7h6.1l8.6,68.9h-6.5l-7.1-57.1-24.5,50h-6.1l-24.7-50.2-7.1,57.3h-6.4l8.5-68.9h6.2l26.5,54.7Zm-249.7-10-13.6-35.9-13.6,35.9h27.2Z'
          fill='#fff'
          fill-rule='evenodd'
        />
        <g id='orbita'>
          <path
            d='M515.676,150a165.034,165.034,0,0,0-323.539-20H185.96a171.022,171.022,0,0,1,335.755,20ZM352,336A165.016,165.016,0,0,0,515.9,190h6.039A171.021,171.021,0,0,1,186.2,213h6.2A165.065,165.065,0,0,0,352,336Z'
            fill='#fff'
            fill-rule='evenodd'
          />
          <path
            d='M519,196a24.995,24.995,0,1,0-24.992-24.96A24.8,24.8,0,0,0,519,196Zm0-6A19,19,0,1,0,500,171.03,18.849,18.849,0,0,0,519,190Z'
            fill='#fff'
            fill-rule='evenodd'
          />
          <path
            d='M186.493,215a44.5,44.5,0,1,0-44.506-44.441A44.162,44.162,0,0,0,186.493,215Zm0-6a38.5,38.5,0,1,0-38.506-38.449A38.208,38.208,0,0,0,186.494,209Z'
            fill='#fff'
            fill-rule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}