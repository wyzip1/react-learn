import React, { useContext } from 'react'
import Context from '../../context'

export default function Test2(props) {
	const {text, setText} = useContext(Context)
	return <div>
    {text}
    <input type="text" value={text} onChange={e => setText(e.target.value)} />
  </div>
}
