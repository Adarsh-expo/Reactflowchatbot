import React from 'react'
import { Handle, Position } from '@xyflow/react';
import { useState } from 'react';
function Yesnoclickoption({id, data, selected, deletenode}) {

    const [showdelete,setshowdelete]=useState(false)
  return (
    <div className='bg-white w-[14vw] shadow-lg rounded-lg'>

        <div className='bg-[#FF9933] rounded-t-lg w-[100%] flex justify-between h-fit '><i class="ri-arrow-go-back-line text-[2vw] text-white"></i><button onClick={()=>{setshowdelete((pre)=>!pre)}} ><i class="ri-more-2-fill text-black"></i></button>{showdelete && <div  onClick={()=>{deletenode(id)}} className='hover:cursor-pointer text-center rounded-lg bg-white h-[50%] shadow-2xl shadow-black w-[10vw] text-[1.6vw] top-[33%] left-[95%] absolute'>delete</div>} </div>
        <div>{id}</div>
        <div className='mt-4 ml-2'>Click to edit me!</div>
        <div className='mb-3 mx-auto w-[100%] px-2 mt-20 flex flex-col gap-4   break-words text-blue-500'>
        <Handle type="source" position={Position.Left} id="a" />
            <button className=' bg-[#F9F9F9] border-[1px] mb-2  rounded-md text-[1.5vw] '>Yes</button>
        <button  className=' bg-[#F9F9F9]  border-[1px] mb-2 rounded-md text-[1.5vw] '>No</button>
        <Handle type="target" position={Position.Right}  />
        
        </div>
    </div>
  )
}

export default Yesnoclickoption