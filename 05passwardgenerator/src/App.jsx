import { useCallback, useEffect, useRef, useState } from 'react'


function App() {

  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed]=useState(false)
  const [charAllowed, setcharAllowed] =useState(false)
  const[passward,setPassward]=useState("")

  //  useRef

  const passRef = useRef(null)

  const passwardGenerator=useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str+="0123456789"
  if(charAllowed) str+="!@#$&*{}()~"
    
  for (let i = 1; i <length; i++) {
    const char = Math.floor(Math.random()*str.length+1);
    pass += str.charAt(char)
  }
  setPassward(pass)

  },
  [length , numberAllowed, charAllowed , setPassward])

  const copyPasswardToClickBoard = useCallback(()=>{
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,100)
      window.navigator.clipboard.writeText(passward)
  },[passward])



  useEffect(()=>{ 
    passwardGenerator()
  } ,[ length,charAllowed, numberAllowed , passwardGenerator])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md 
     rounded-lg px-4 py-3 my-8  bg-gray-700 text-orange-500 '>
       <h1 className='text-white  text-center m-3'>Passward generator </h1>
      <div className='flex shadow rounded-lg overflow-hidden  mb-4'>
        <input type="text"
        className='outline-none w-full py-1 px-3' 
        value={passward}
        placeholder='Passward' 
        readOnly
        ref={passRef}
        
        />

        <button 
        onClick={copyPasswardToClickBoard}
        className='outline-none bg-blue-500 shrink-0 text-white px-3 py-0.5'
        >copy</button>
      </div> 
       
       <div className=' flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length} 
          className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}}
            />
            <label>Length:{length}</label>
        </div>

 <div className='flex items-center gap-x-1'>
    <input
         type="checkbox" 
        defaultChecked={numberAllowed}
       id='numberInput'
       onChange={()=>{
       setnumberAllowed((prev)=>!prev);
       }}
    />
       <label htmlFor="numberInput">Number</label>
  </div>
  <div className='flex items-center gap-x-1'>
      <input
       type="checkbox" 
       defaultChecked={charAllowed}
       id='charInput'
       onChange={()=>{
        setcharAllowed((prev)=>!prev);
       }}
       />
       <label htmlFor="charInput">Charcter</label>
 </div>


       </div>
     </div>
    </>
  )
}

export default App
