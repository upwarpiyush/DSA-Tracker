import React,{useEffect, useState} from 'react'
import Card from './Card'

const Landing = ({data, appendQuestions}) => {
  // console.log(data);
  console.log(data);
  let a = 0;

  data.map((d)=>{
    // console.log(d.doneQuestions);
    a = a+d.doneQuestions;
  })

  console.log(a);

  let percentage = a/450 * 100;
  percentage = percentage.toFixed(2);
  // setDone(a);
  
  // const [done,setDone] = useState(a);

  // console.log(done);


  // useEffect(()=>{
  //   console.log(data);
  //   let a = 0;

  //   data.map((d)=>{
  //     // console.log(d.doneQuestions);
  //     a = a+d.doneQuestions;
  //   })
  
  //   console.log(a);
  //   setDone(a);
  //   console.log(done);
  // },[])

  return (
    <div className='flex justify-center items-center flex-col mb-10'>

      <div className='text-xl font-medium tracking-wider'>Your Getway To Crack DSA 😍</div>

        {/* No. of Questions Solved Part */}
        <div className=' text-md mt-7 flex items-center justify-center flex-col gap-3'>
          <div className='text-lg text-sky-800'>Total Questions Solved : <span> {a} </span> <span>{`( ${percentage}% Done )`}</span></div>
          <div className='w-[60vw]  h-4 bg-gray-100 border-2 border-emerald-900 rounded-sm'>
            <div style={{ width: `${percentage}%`}} className=' rounded-sm h-full bg-cyan-500'></div>
          </div>
        </div>

        {/* Topic Cards */}
        <div className='flex items-center justify-center flex-wrap '>
          {
                data.map((card)=>{
                    return (typeof(card) == "object")?(<Card cardData={card} appendQuestions={appendQuestions} key={card.position}></Card>)
                    :(<div>NaN</div>)
                })
            }
        </div>
    </div>
  )
}

export default Landing