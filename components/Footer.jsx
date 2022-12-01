function Footer() {
	return (
		<footer className='mt-16 text-center'>
			<p className='text-sm'>
				الاستضافة باستخدام{' '}
				<a
					href='https://netlify.com'
					rel='noreferrer'
					target='_blank'
					referrerPolicy='no-referrer'
					className='text-white'
				>
					Netlify
				</a>
				. مفتوح المصدر على{' '}
				<a
					href='https://github.com/kl13nt/the-weekly-noob'
					rel='noreferrer'
					target='_blank'
					referrerPolicy='no-referrer'
					className='text-white'
				>
					GitHub
				</a>
				.
			</p>
		</footer>
	)
}

export default Footer
