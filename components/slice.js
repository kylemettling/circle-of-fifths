import Image from 'next/image'
import SignatureSVG from './SignatureSVG'
const Slice = ({ item }) => {
	const accidentalCoords = [
		{ x: '730', y: '540' },
		{ x: '942', y: '810' },
		{ x: '1154', y: '450' },
		{ x: '1366', y: '720' },
		{ x: '1578', y: '990' },
		{ x: '1790', y: '630' },
		{ x: '2002', y: '900' },
	]
	const position = {
		height: '720px',
		width: '720px',
	}
	return (
		<div className='slice'>
			{/* <pre>{JSON.stringify(item, null, 4)}</pre> */}
			<SignatureSVG
				index={item.index}
				type={item.accidentals.type}
				count={item.accidentals.count}
				accidentalCoords={accidentalCoords}
				position={position}
			/>
			{/* <Image
				alt={item.major}
				src={`/images/${item.accidentals.count + item.accidentals.type}.svg`}
				height={'100px'}
				width={'300px'}
				style={{ stroke: 'red', fill: 'blue' }}
			></Image> */}
		</div>
	)
}

export default Slice
