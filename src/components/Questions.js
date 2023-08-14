import React, { useCallback, useEffect } from 'react'
import gfg_logo from '../assets/gfg_logo.png'
import lc_logo from '../assets/lc_logo.png'
import cn_logo from '../assets/cn_logo.jpeg'
import { useState } from 'react'

const Questions = ({questions, data, qindex, update_done_data}) => {

  const d = JSON.parse(localStorage.getItem("Data"));
  // console.log(data[qindex]);
  const que = d[qindex].questions;
  const arr = [];

  que.map((q)=>{
    arr.push(q.Done);
    // console.log(q.Done);
  });

  const [done, setDone] = useState(arr);

  const [totalDone, setTotalDone] = useState(0);

  function countDone(){
    let tDone = 0;
    // console.log(done);
    for(let i in done){
      if(done[i] == true)
      {
        tDone++;
        // console.log(tDone);
      }
    }
    setTotalDone(tDone);

    data[qindex].doneQuestions = tDone;
    update_done_data(data);
  }

  // countDone();

  function solveHandler(index,e){
    const d = data[qindex].questions[index].Done;
    data[qindex].questions[index].Done = !d;
    // console.log(e.target.value);

    done[index] = !d;
    setDone(done);
    update_done_data(data);
    countDone();
  }

  useEffect(()=>{

    countDone();

  },[])

  
  return (
    <div className='flex flex-col items-center justify-center my-10 gap-5'>
      <div className='text-2xl font-semibold tracking-widest'>Topic - <span className='text-rose-400 font-mono'>{`${data[qindex].topicName}`}</span></div>
      <div className='text-md  '>{`${totalDone}/${questions.length} - `}<span className='font-semibold text-sky-600'>Done</span></div>
      <table className='outline outline-2 outline-black w-[80%]'>
        <thead className='bg-cyan-400 text-md h-10'>
          <tr className='outline outline-1  outline-black'>
            <th className='outline outline-1 py-3 outline-black w-[5%]'>id</th>
            <th className='outline outline-1 outline-black w-[75%]'>Question</th>
            <th className='outline outline-1 outline-black'>Link</th>
            <th className='outline outline-1 outline-black '>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            questions.map((q, index)=>{
              // console.log(index);
              // console.log(q);
              const {Problem, URL} = q;
              return(
                <tr key={index} className={`outline-2 outline-black h-10 ${done[index]?'bg-green-100':'bg-slate-50'}`}>
                  <td className='outline outline-1 outline-black  mx-auto text-sm text-center'>{index}</td>
                  <td className='outline outline-1 outline-black  mx-auto text-sm px-5'>{Problem}</td>
                  <td className='outline outline-1 outline-black flex justify-center items-center'>
                    <a target='_blank' href={`${URL}`}>
                      {URL.includes("leetcode") ? <img src={lc_logo} className=' w-10 rounded-full bg-white border-none p-2'/> 
                      : URL.includes("codingninjas") ? <img src={cn_logo} className=' w-10 rounded-full bg-white border-none p-2'/> 
                      : <img src={gfg_logo} className=' w-10 rounded-full bg-white border-none p-2'/>}
                    </a></td>
                  <td className={`outline outline-1 outline-black  mx-auto text-sm text-center ${done[index]?'bg-green-100':'bg-slate-100'}`}>
                    <select className={`w-full h-full px-4  outline-none text-sm mx-auto ${done[index]?'bg-green-100':'bg-slate-100'} cursor-pointer`} value={done[index]} onChange={(e)=>solveHandler(index,e)}>
                      <option value={false} >Unsolved</option>
                      <option value={true}>Solved</option>
                    </select>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Questions