import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
import { useState,useEffect } from 'react';
 


 
function ChatbotoptionsNode({  id, data, selected, addnode }) {
   console.log(id)

    const handleAddNode = () => {
        if (id) {
          const value="optionclickoptions"
          addnode(value);
        }
        else{console.log("no props")}
      };
 
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className=' px-3 h-fit w-fit py-3 hover:scale-110 bg-white shadow-lg'>
        <div className=' h-[15vw] shadow-lg ml-3    flex flex-col justify-center items-center rounded-lg w-[20vw]'>
      

      <div className='bg-[#E95B69] mt-0 flex rounded-t-lg w-[100%] pl-2'>
        <button onClick={handleAddNode}><i class="ri-add-circle-line text-[2vw] text-white "></i></button></div>
         {/* <input id="text" name="text" onChange={onChange} className="nodrag" /> */}
     
        
        <div className=' text-blue-400 pl-3 text-[1.5vw]'>  <button  onClick={handleAddNode} className="nodrag rounded bg-white w-[40%] mr-2 h-[15%]">Message</button>
         <button  onClick={handleAddNode}    className="nodrag   rounded bg-white w-[40%] mr-2 h-[15%]  ">Image</button>
         <button   onClick={handleAddNode}    className="nodrag  rounded bg-white w-[40%] mr-2 h-[15%] ">Document</button>
         <button   onClick={handleAddNode}    className="nodrag  rounded bg-white w-[40%]  mr-2 h-[15%]   ">Video</button></div>
       
       </div></div>
      
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        
      />
    </>
  );
}


function Chatbottemplateoptions({ id, data, selected, addnode}) {
    
   console.log(id)
    const handleAddNode = () => {
      if (id) {
        const value="yesnooptions"
        addnode(value);
        
      }
      else{console.log("no props")}
    };


    return (
      <>
        <Handle type="target" position={Position.Top} />
        <div className='bg-white w-fit hover:scale-110  h-fit px-3 py-7 rounded-lg shadow-lg'>
          <div className=' h-[15vw] flex flex-col justify-center items-center shadow-lg rounded-lg w-[20vw] ml-4'>
         <div className='bg-[#FF9933] w-[100%]  rounded-t-lg'><button onClick={handleAddNode}><i class="ri-arrow-left-circle-fill  text-white text-[2.5vw]"></i></button></div>
          {/* <input id="text" name="text" onChange={onChange} className="nodrag" /> */}
          <div className='text-[1.5vw]'>Template</div>
          <div  className='flex flex-col text-blue-500  text-[1.3vw] w-[100%] h-[95%] items-center gap-4'>
            <button onClick={handleAddNode} className="nodrag rounded bg-white w-[40%] mr-2 h-[15%]">Yes</button>
          <button  onClick={handleAddNode} className="nodrag   rounded bg-white w-[40%] mr-2 h-[15%]  ">No</button></div>
          
          
        </div></div>
        
        <Handle type="source" position={Position.Bottom} id="a" />
        <Handle
          type="source"
          position={Position.Bottom}
          id="b"
          
        />
      </>
    );
  }
export {ChatbotoptionsNode,Chatbottemplateoptions}  ;