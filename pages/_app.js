import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'

import '../styling/index.sass'

const link = 'https://twitter.com/trtworld/status/1391030130886201347'

function App({ Component, pageProps }) {
	return (
		<>
			<Banner>
				<a
					href={link}
					className='underline unicode-text'
					rel='noreferrer'
					target='_blank'
					referrerPolicy='no-referrer'
					dir='rtl'
				>
					# SaveSheikhJarrah{' '}
					<span role='img' aria-label='palestinian flag'>
						🇵🇸
					</span>
				</a>
			</Banner>
			<div
				className='font-display p-4 py-8 lg:p-8 lg:p-12 min-h-screen'
				dir='rtl'
			>
				<div className='lg:w-3/5 mx-auto'>
					<Header />
					<Component {...pageProps} />
					<Footer />
				</div>
			</div>
		</>
	)
}

export default App
