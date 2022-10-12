import Image from 'next/image'
import SignatureSVG from './SignatureSVG'
const Slice = ({ item }) => {
	return (
		<div className='slice'>
			<span>Hello!</span>
			<pre>{JSON.stringify(item, null, 4)}</pre>
			<SignatureSVG
				type={item.accidentals.type}
				count={item.accidentals.count}
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
