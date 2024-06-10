import { useState , useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [CharacterAllowed, setCharacterAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  //useRef hook
  const PasswordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (CharacterAllowed) str += "!@#$%^&*()[]{}_+~`|:;<>?,./"
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  
  },[length,numberAllowed, CharacterAllowed,setPassword] )

  const copyPasswordToClipboard = useCallback(() => {
    PasswordRef.current?.select();
    // PasswordRef.current?.setSelectionRange(0,12);
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(() => {passwordGenerator()}, [length,numberAllowed,CharacterAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-900'>
        <h1 className='text-white text-center my-4 text-xl'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-5'>
          <input type="text" 
          value={Password}
          className='outline-none w-[85%] py-2 px-3'
          placeholder='Password'
          readOnly
          ref={PasswordRef}/>
          <button 
          onClick={copyPasswordToClipboard}
          className='text-white bg-blue-500 px-4 font-semibold '>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
            <div className='flex item-center gap-x-1'>
              <input type="range"
              min = {8} 
              max = {100}
              value={length}
              className='cursor-pointer'
              onChange={(e) =>{setlength(e.target.value)}}
              />
              <label >Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked = {numberAllowed} 
              id='numberInput'
              onChange={() =>{setnumberAllowed((prev) => !prev)}}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked = {CharacterAllowed} 
              id='numberInput'
              onChange={() =>{setCharacterAllowed((prev) => !prev)}}
              />
              <label htmlFor="numberInput">Characters</label>
            </div>
          </div>

      </div>
    </>
  )
}

export default App
