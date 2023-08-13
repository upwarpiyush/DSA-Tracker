import React from 'react'
import { useNavigate } from 'react-router-dom';

const Card = ({cardData, setCardData, appendQuestions}) => {
    let navigate = useNavigate();

    function clickHandler(index)
    {
        // console.log(index);
        appendQuestions(index);
        navigate('/questions');
    }
  return (
    <div className='w-[25%] h-40 border-2 m-5 rounded-xl p-3' onClick={() => clickHandler(cardData.position)} >
        <div>{cardData.topicName}</div>

        <div>Total Questions {cardData.questions.length}</div>
    </div>
  )
}

export default Card