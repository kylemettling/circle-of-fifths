import Slice from './slice'
import signatures from '../lib/state/signatures'
import Image from 'next/image'
import { useState } from 'react'

const Slices = () => {
	const keys = [...Array(12).keys()].map((idx) => {
		const item = signatures[idx]
		const newItem = {
			index: idx,
			image: `${
				item.accidentals ? item.accidentals.count + item.accidentals.type : null
			}`,
			...item,
		}
		return newItem
	})

	return (
		<div>
			{/* {items} */}
			{keys.map((item) => {
				return <Slice key={item.index} item={item} />
				// return (
				// 	<Image
				// 		src={`/images/${item.image}.svg`}
				// 		key={item.index}
				// 		alt='test'
				// 		height={'300px'}
				// 		width={'300px'}
				// 	/>
			})}
		</div>
	)
}

export default Slices
