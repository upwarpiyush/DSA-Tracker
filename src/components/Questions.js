import React from 'react'
import gfg_logo from '../assets/gfg_logo.png'
import lc_logo from '../assets/lc_logo.png'
import cn_logo from '../assets/cn_logo.jpeg'
import { useState } from 'react'

const Questions = ({questions, data, qindex, update_done_data}) => {
  // console.log(questions);
  // const [done, setDone] = useState(false)
  const arr = [];
  
  questions.map((q)=>{
    arr.push(q.Done);
  });

  const [done, setDone] = useState(arr);
  // console.log(done);
  // console.log(done);
  // const solveHandler = (event) =>
  // {
  //   // console.log(questions[index])
  //   console.log(event);
  //   console.log(event.target);
  //   console.log(event.target.value);
  //   console.log(event.target.i);
  //   // console.log(event.index);

  //   // setDone(event.target.value);
  //   // const q = don;
  //   // console.log(done);
  // }
  function solveHandler(index,e){
    const d = data[qindex].questions[index].Done;
    data[qindex].questions[index].Done = !d;
    console.log(e.target.value);

    done[index] = !d;
    setDone(done);
    // setDone(e.target.value);
    // setDone(!d);
    // console.log(d);
    // console.log(!d);
    update_done_data(data);

    // return data;
    // console.log(questions[index].Done);
    // console.log(event);
  }
  return (
    <div className='flex flex-col items-center justify-center my-20'>
      {/* <div>Questions</div> */}
      <table className='outline outline-2 outline-black w-[80%]'>
        <thead className='bg-cyan-300 text-md h-10'>
          <tr className='outline outline-1 outline-black'>
            <th className='outline outline-1 outline-black w-[5%]'>id</th>
            <th className='outline outline-1 outline-black w-[75%]'>Question</th>
            <th className='outline outline-1 outline-black'>Link</th>
            <th className='outline outline-1 outline-black'>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            questions.map((q, index)=>{
              // console.log(index);
              // console.log(q);
              const {Problem, URL} = q;
              return(
                <tr key={index} className='outline-2 outline-black h-10 '>
                  <td className='outline outline-1 outline-black  mx-auto text-sm text-center'>{index}</td>
                  <td className='outline outline-1 outline-black  mx-auto text-sm px-5'>{Problem}</td>
                  <td className='outline outline-1 outline-black flex justify-center items-center'>
                    <a target='_blank' href={`${URL}`}>
                      {URL.includes("leetcode") ? <img src={lc_logo} className=' w-10 rounded-full bg-white border-none p-2'/> 
                      : URL.includes("codingninjas") ? <img src={cn_logo} className=' w-10 rounded-full bg-white border-none p-2'/> 
                      : <img src={gfg_logo} className=' w-10 rounded-full bg-white border-none p-2'/>}
                      {/* <img src={gfg_logo} className=' w-10 rounded-full bg-white border-none'/> */}
                    </a></td>
                  <td className='outline outline-1 outline-black  mx-auto text-sm text-center'>
                    <select className='w-[80%] outline-none text-sm mx-auto' value={done[index]} onChange={(e)=>solveHandler(index,e)}>
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