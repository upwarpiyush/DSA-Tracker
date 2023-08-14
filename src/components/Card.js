import React from 'react'
import { useNavigate } from 'react-router-dom';

const Card = ({cardData, appendQuestions}) => {
    let navigate = useNavigate();

    let started = false;

    if(cardData.doneQuestions>0)
    {
      started = true;
    }

    let percentage = cardData.doneQuestions/cardData.questions.length * 100;
    percentage = percentage.toFixed(0);

    // console.log(cardData);

    function clickHandler(index)
    {
        // console.log(index);
        appendQuestions(index);
        navigate('/questions');
    }
  return (
    <div className={`w-[25%] h-40 border-2 m-5 rounded-xl p-3 px-5 ${started?'border-green-500 bg-green-50':'border-cyan-500 bg-cyan-50'} transition ease-in-out hover:scale-105 cursor-pointer`} onClick={() => clickHandler(cardData.position)} >

        <div className='text-lg font-semibold tracking-widest'>{cardData.topicName}</div>

        <div className='text-md my-1'>Total Questions {cardData.questions.length}</div>

        <div className='text-sm tracking-widest font-normal'> {started == true ? ( <span>{cardData.questions.length - cardData.doneQuestions} More to go</span>) : (<span>Not Started yet </span>)} </div>

        <div className='mt-4'>{
          started == true ? 
          (<div>
            <div className='text-xs font-medium tracking-wide m-1'>{`${percentage}% Done `}</div>
          
           <div className='w-full mx-auto   h-4 bg-gray-50 border-2 border-emerald-900 rounded-md'>
              <div style={{ width: `${percentage}%`}} className=' rounded-sm h-full bg-cyan-500'></div>
           </div>
           </div>)
          :null
        }</div>
 
    </div>
  )
}

export default Card