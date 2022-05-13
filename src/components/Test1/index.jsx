import React, { useContext } from 'react'
import Context from '../../context'

export default function Test1(props) {
	const { num, setNum } = useContext(Context)
	return <div>
    {num}
    <button onClick={() => setNum(num + 1)}>add</button>
    <button onClick={() => setNum(num - 1)}>desc</button>
  </div>
}
