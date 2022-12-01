function Header() {
	return (
		<>
			<header className='flex flex-col md:flex-row items-center text-center md:text-right'>
				<picture className='w-4/5 md:ml-8'>
					<source srcSet='/tag.webp' />
					<img src='/tag.png' alt='Header' />
				</picture>
				<div>
					<p>
						مدونة صوتية اسبوعية (كل ثلاثاء) تغطي كل جديد في عالم تطوير البرمجيات
						وتطرَّقَ لمواضيع هامة للطلبة.
					</p>
					<p className='text-xl mt-8'>
						يقدمها لكم <a href='https://iamnabil.netlify.app'>نبيل ثروت</a>.
					</p>
					<p className='text-xl mt-8'>
						يمكنكم توجيه اسئلتكم لهذا{' '}
						<a href='https://forms.gle/9TjeDoWQxiLEHm8eA'>الإستبيان</a>.
					</p>
					<div className='mt-8 flex justify-center md:justify-start'>
						<a
							className='block ml-4'
							href='https://www.breaker.audio/the-weekly-noob'
						>
							<img
								src='/breaker.svg'
								alt='available on Breaker'
								className='w-8'
							/>
						</a>
						<a
							className='block ml-4'
							href='https://open.spotify.com/show/01Fkw58Q5S8JHmnt5PPJ1g'
						>
							<img
								src='/spotify.svg'
								alt='available on Spotify'
								className='w-8'
							/>
						</a>
						<a
							className='block ml-4'
							href='https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8zOThkNjFiNC9wb2RjYXN0L3Jzcw=='
						>
							<img
								src='/google-podcasts.svg'
								alt='available on Google Podcasts'
								className='w-8'
							/>
						</a>
						<a className='block ml-4' href='https://pca.st/5jlhy563'>
							<img
								src='/pocket_casts.svg'
								alt='available on PocketCasts'
								className='w-8'
							/>
						</a>
						<a
							className='block ml-4'
							href='https://radiopublic.com/the-weekly-noob-6pkXeN'
						>
							<img
								src='/radiopublic.svg'
								alt='available on RadioPublic'
								className='w-8'
							/>
						</a>
						<a
							className='block ml-4'
							href='https://anchor.fm/s/398d61b4/podcast/rss'
						>
							<img src='/rss.svg' alt='RSS feed' className='w-8' />
						</a>
					</div>
				</div>
			</header>
			<hr className='mt-16' />
		</>
	)
}

export default Header
