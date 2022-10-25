import Slice from './slice'
import signatures from '../lib/state/signatures'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Slices = () => {
	const [rotate, setRotate] = useState(-180)
	const keys = [...Array(signatures.length).keys()].map((sig, idx) => {
		const item = signatures[idx]
		const newItem = {
			index: idx,
			position: idx,
			image: `${
				item.accidentals ? item.accidentals.count + item.accidentals.type : null
			}`,
			...item,
		}
		return newItem
	})

	function getRotate(e) {
		console.log(e.target)
		setRotate(e.target.value)
	}

	useEffect(() => {
		console.log(rotate)
	}, [rotate])

	return (
		<>
			<label htmlFor='rotate'>Rotate! {rotate}</label>
			<input
				type='text'
				name='range'
				id='rotate'
				value={rotate}
				onChange={(e) => setRotate(e.target.value)}
			/>
			<input
				// style={{ position: 'absolute' }}
				type='range'
				min='-180'
				max='180'
				value={rotate}
				onChange={(e) => getRotate(e)}
			/>
			<div className='sliceContainer'>
				<div
					className='slices'
					style={{
						transform: `rotate(${rotate}deg)`,
						// transformOrigin: 'center',
						// animation
						// transform: `rotate(${rotate}deg) `,
						// outline: `3px solid blue`,
						// top: '50%',
						// left: '55%',
					}}
				>
					{keys.map((item) => {
						return <Slice key={item.index} item={item} rotateDegree={rotate} />
					})}
				</div>
			</div>
		</>
	)
}

export default Slices
