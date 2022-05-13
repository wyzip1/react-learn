import { useState, useEffect, useRef } from 'react'

export default function(initValue) {
  const call = useRef(() => {});
  const [data, setData] = useState(initValue);
  const setDataCall = (newValue, callBack) => {
    setData(newValue)
    call.current = callBack
  }

  useEffect(() => {
    const callBack = call.current
    callBack && callBack(data)
  }, [data])

  return [data, setDataCall]

}