import Slice from './slice'
import signatures from '../lib/state/signatures'
import Image from 'next/image'

const Slices = () => {
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
	return (
		<div className='slices'>
			{keys.map((item) => {
				return <Slice key={item.index} item={item} />
			})}
		</div>
	)
}

export default Slices
