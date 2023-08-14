import React, { useCallback, useEffect, useState } from "react";
import {Routes, Route} from "react-router-dom";
import Data from "./data";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Questions from "./components/Questions";
import Footer from "./components/Footer";



function App() {
  const [data, setData] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [qindex, setQIndex] = useState(0);
  const [updata, setUpData] = useState(data);
  // localStorage.setItem("Data", JSON.stringify(Data));



  function getData()
  {
    // console.log(localStorage.getItem("Data"));
    if(localStorage.getItem("Data") === null)
    {
      localStorage.setItem("Data", JSON.stringify(Data));
    }
    const d = JSON.parse(localStorage.getItem("Data"));
    // console.log(Data);
    // console.log(d);
    return d;
  }

  function appendQuestions(index)
  {
    setQIndex(index);
    // setQuestions(data[qindex].questions);
    // setI(index);
    // console.log(data[index]);
    // console.log(i);
  }

  useEffect(()=>{
    // const d = JSON.parse(localStorage.getItem("Data"));
    setQuestions(data[qindex]?.questions);
    // console.log(data[qindex]?.questions);
  },)

  const update_done_data = useCallback(
    (updatedData)=>
  {
    // console.log(data);
    // const p = {
    //   ...JSON.parse(localStorage.getItem('Data')),
    //     ...updatedData
    // };
    // console.log(updatedData);
    localStorage.setItem('Data', JSON.stringify(updatedData));
    setUpData(updatedData);
    // const d = JSON.parse(localStorage.getItem("Data"));
    // setData(d);
  });

  useEffect(()=>{
    const dat = getData();
    setData(data=>(dat));
    // getData();
  },[updata, setQuestions])

  return (
    <div>
      <Header/>

      <Routes>
        <Route path="/" element={<Landing data={data} setData={setData} appendQuestions={appendQuestions}/>}/>
        <Route path="/questions" element={<Questions questions={questions} data={data} qindex={qindex} update_done_data={update_done_data}/>}/>
      </Routes>

      <Footer/>
      {/* <Landing data={data} setData={setData}></Landing> */}
    </div>
    
  );
}

export default App;
