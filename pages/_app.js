import Banner from '../components/Banner'

import '../styling/index.sass'

const link =
	'https://www.aljazeera.com./news/2020/10/25/social-meboycott-french-products-online-against-macrons-islam'

function App({ Component, pageProps }) {
	return (
		<>
			<Banner>
				<a
					href={link}
					className='underline'
					rel='noopener'
					target='_blank'
					referrerPolicy='no-referrer'
				>
					# مقاطعة المنتجات الفرنسية
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
