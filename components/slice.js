import SignatureSVG from './SignatureSVG'
const Slice = ({ item }) => {
	const accidentalCoords = {
		sharp: [
			{ x: '730', y: '540' },
			{ x: '942', y: '810' },
			{ x: '1154', y: '450' },
			{ x: '1366', y: '720' },
			{ x: '1578', y: '990' },
			{ x: '1790', y: '630' },
			{ x: '2002', y: '900' },
		],
		flat: [
			{ x: '730', y: '900' },
			{ x: '919', y: '630' },
			{ x: '1108', y: '990' },
			{ x: '1297', y: '720' },
			{ x: '1486', y: '1080' },
			{ x: '1675', y: '810' },
			{ x: '1864', y: '1170' },
		],
	}
	const position = {
		height: '720px',
		width: '720px',
	}
	return (
		<div
			className='slice'
			style={
				{
					// rotate: `-${item.position * 8.333}deg`,
					// transform: `translateY(-${item.position * 8.333}%)`,
					// transform: `translate(8.333%, ${item.position * 8.333}%)`,
					// height: `calc(${'inherit'} + 500px)`,
					// top: '50%',
					// left: '50%',
				}
			}
		>
			<div
				className='sliceOuter'
				style={{
					// position: 'fixed',
					rotate: `${item.position * 25.75}deg`,
					transform: `translate(${item.position * 8.333}%, ${
						[8, 9, 10, 11, 12].includes(item.position)
							? -item.position * 8.333 + 12
							: item.position * 8.333 + 12
					}%)`,
				}}
			>
				<div
					className='topper'
					style={
						{
							// rotate: `${item.position * 25.75}deg`,
							// transform: `skew(-66deg)`,
						}
					}
				>
					HUH
				</div>
				<div
					className='sliceInner'
					style={
						{
							//   rotate: `${item.position * 25.75}deg`,
							// transform: "skewY(-66deg)",
						}
					}
				>
					<span>{item.position * 25.75}</span>
					{/* <div className="slice" style={{ rotate: `${item.position * 25.75}deg` }}> */}
					<SignatureSVG
						index={item.index}
						type={item.accidentals.type}
						count={item.accidentals.count}
						accidentalCoords={accidentalCoords}
						position={position}
						degrees={item.position * 25.75}
					/>
				</div>
			</div>
		</div>
	)
}

export default Slice
