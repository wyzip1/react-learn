import React from 'react'
import Test2 from './components/Test2'
import Test1 from './components/Test1'
import { useStateCall, useSync } from './hooks'

function App() {
	const [str, setStr] = useStateCall('')
	const logStr = useSync((str, s) => console.log(str, s), [str])

	return (
		<main>
			<Test1></Test1>
			<Test2></Test2>
			<div>{str}</div>
			<input type="text" onChange={e => {
				setStr(e.target.value)
				// setStr(e.target.value, (s) => {
				// 	console.log(s)
				// })
				// logStr('hhjhj')
			}} />
		</main>
	)
}

export default App
