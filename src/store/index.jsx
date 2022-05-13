import { useState } from 'react'
import Context from '../context'

export default ({ children }) => {
  const [num, setNum] = useState(0)
  const [text, setText] = useState('initValue')
  return <Context.Provider value={{
    num,
    setNum,
    text,
    setText
  }}>
    {children}
  </Context.Provider>
}