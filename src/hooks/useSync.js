import { useRef, useEffect, useState } from 'react'

export default function(callBack, deep) {
  const args = useRef([])
  const [queue, setQueue] = useState([])

  useEffect(() => {
    while(queue.length) {
      queue.shift()(...deep, ...args.current)
    }
  }, deep)

  const pushQueue = (..._args) => {
    args.current = _args
    queue.push(callBack)
    setQueue([...queue])
  }

  return pushQueue
}