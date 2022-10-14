import Head from 'next/head'
import Image from 'next/image'
import Slices from '../components/slices'

export default function Home() {
	return (
		<div className='container'>
			<Head>
				<title>Circle of Fifths</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<h1>welcome to the circle of fifths</h1>
				{/* <div
          style={{
            height: "300px",
            width: "500px",
            fontSize: "145px",
            color: "green",
          }}
        >
          &#x1D11E;
        </div> */}
			</main>
			{/* <Sharp stroke="blue" stroke-width="15px" color="green" fill="pink" /> */}
			<Slices />
		</div>
	)
}
