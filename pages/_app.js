import Banner from '../components/Banner'

import '../styling/index.sass'

const link =
	'https://twitter.com/trtworld/status/1391030130886201347'

function App({ Component, pageProps }) {
	return (
		<>
			<Banner>
				<a
					href={link}
					className='underline'
					rel='noreferrer'
					target='_blank'
					referrerPolicy='no-referrer'
				>
					# SaveSheikhJarrah 🇵🇸
				</a>
			</Banner>
			<div className='font-display p-4 py-8 lg:p-8 lg:p-12 min-h-screen'>
				<div className='lg:w-3/5 mx-auto'>
					<Component {...pageProps} />
				</div>
			</div>
		</>
	)
}

export default App
