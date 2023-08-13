import React from 'react'
import Card from './Card'

const Landing = ({data, setData, appendQuestions}) => {
  return (
    <div className='flex justify-center items-center flex-col'>

        {/* Topic Cards */}
        <div className='flex items-center justify-center flex-wrap '>
          {
                data.map((card)=>{
                    return (typeof(card) == "object")?(<Card cardData={card} setCardData={setData} appendQuestions={appendQuestions} key={card.position}></Card>)
                    :(<div>NaN</div>)
                })
            }
        </div>
    </div>
  )
}

export default Landing