import React, { useState } from 'react'

const Matrix = () => {

    const [clickCount, setClickCount] = useState(0)
    const [indexArray, setIndexArray] = useState([])
    const arr = [0,1,2,3,4,5,6,7,8]
    
    
    const handleBgChange =(index)=>{

        if(indexArray.includes(index)){
            return // Do nothing if the index is already clicked
        }

        document.getElementById(`${index}`).style.backgroundColor='green'
        setIndexArray([...indexArray, index])
        setClickCount(clickCount+1)
        if(clickCount == 8){

            console.log(indexArray.length)

            indexArray.forEach((items, i)=>
            setTimeout(()=>{
                document.getElementById(`${items}`).style.backgroundColor='orange'
            },500*(i)))
            setTimeout(() => {
                document.getElementById(`${index}`).style.backgroundColor = 'orange';
            }, 500 * indexArray.length);

            

            setClickCount(0);
            setIndexArray([]);
            // console.log(clickCount, index)
            // console.log(indexArray)
        }
       
    }
    
    const handleReset = ()=>{
      
       
        arr.map(index => {
          document.getElementById(`${index}`).style.backgroundColor = 'transparent';
      });
     
      setClickCount(0);
      setIndexArray([]);
    }


  return (
    <div>
      <div className='grid grid-cols-3'>
        {arr.map((items, index)=>
        <div id={index} className='box border border-white w-14 h-14 flex justify-center items-center cursor-pointer' onClick={()=>handleBgChange(index)} key={index}>
            <div className=''>
            {items +1}
            </div>
        </div>    
            )}
      </div>
            <div className='mt-10 mx-10 hover:bg-blue-900 hover:text-white duration-300 border flex justify-center items-center w-20'>
              <button onClick={handleReset}>Reset</button>
            </div>
    </div>
  )
}

export default Matrix
