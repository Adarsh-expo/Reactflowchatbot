import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { Handle, Position } from '@xyflow/react';

function Optionclick({id, data, selected, deletenode }) {

const fileinputref=useRef(null);
const fileinputref2=useRef(null);
const fileinputref3=useRef(null)



  const[contents,setcontents]=useState([])
  const[showinput,setshowinput]=useState(false)
  const[value,setvalue]=useState('')
  const[pic,setpic]=useState('')
  const[video,setvideo]=useState('')
  const[doc,setdoc]=useState('')

const changehandler=(e)=>{
const {value}=e.target;
setvalue(value)

}

useEffect(()=>{console.log(`node updated with:${contents}`)},[contents])

  const submit=()=>{
if(value){
  
setcontents((pre)=>[...pre,value])
setvalue('')

}


  }
  const remove=(ele)=>{

const filterarray=contents.filter((val)=>val!==ele);
setcontents(filterarray)


  }

  const [showdelete,setshowdelete]=useState(false)
  return (
   
    <> <Handle type="target" position={Position.Top} />
    <div className='bg-white w-fit flex flex-col  shadow-lg rounded-lg'>

    <div className='bg-[#E95B69] flex justify-between rounded-lg w-[100%] h-fit '><i class="ri-add-circle-line text-[2vw] text-white"></i> <button onClick={()=>{setshowdelete((pre)=>!pre)}} ><i class="ri-more-2-fill text-black"></i></button>{showdelete && <div  onClick={()=>{deletenode(id)}} className='hover:cursor-pointer text-center rounded-lg bg-white h-[100%] shadow-2xl shadow-black w-[10vw] text-[1.6vw] top-[33%] left-[95%] absolute'>delete</div>}</div>
    <div>{id}</div>
    {contents.map((ele,index)=><div key={index} className='w-[97%]  mx-auto flex items-center justify-between'><div>{ele }</div><button onClick={()=>{remove(ele)}}><i class="ri-close-line text-[1.7vw] text-[#E95B69]"></i></button>    </div>)}
    {showinput &&
     <input type='text' value={value} onChange={changehandler} className='border-[1px] w-[97%] mx-2 rounded outline-none mt-20 mb-2  border-blue-300' />} 
  
     <input type='file'   hidden ref={fileinputref}  accept='image/*' onChange={(e)=>{setpic(URL.createObjectURL(e.target.files[0]))}} className='border-[1px] w-[97%] mx-2 rounded outline-none mt-20 mb-2  border-blue-300' />
     {pic&& <img className='w-[97%] h-[10vw] object-cover' src={pic}/>}
     
     <input type='file' hidden ref={fileinputref2}  accept='application/pdf' onChange={(e)=>{setdoc(URL.createObjectURL(e.target.files[0]))}} className='border-[1px] w-[97%] mx-2 rounded outline-none mt-20 mb-2  border-blue-300' />
    
{doc && <a className='text-blue-400 flex gap-1' href={doc}><i class="ri-file-list-line"></i> Document</a>

}

   
     <input type='file' hidden ref={fileinputref3}  accept='video/*' onChange={(e)=>{setvideo( URL.createObjectURL(e.target.files[0]) )}} className='border-[1px] w-[97%] mx-2 rounded outline-none mt-20 mb-2  border-blue-300' />
    {video && <video controls className='w-[30%] h-[10vw]'> 
<source  src={video}></source>

    </video> }
    
    
    
    <div className='mb-3 mx-auto w-[100%] px-2  flex gap-2 break-words text-blue-500'>
    <button onClick={()=>{setshowinput((pre)=>!pre);submit()}} >Add Message</button>
    <button  onClick={()=>{fileinputref.current.click();setshowinput(false);}}   >Upload Image</button>
    <button  onClick={()=>{fileinputref2.current.click();setshowinput(false)}}   >Upload Document</button>
    <button  onClick={()=>{fileinputref3.current.click();setshowinput(false)}}    >Upload Video</button>
    
    
    </div>
</div>

<Handle type="source" position={Position.Bottom} id="a" />

</>
  )
}

export default Optionclick