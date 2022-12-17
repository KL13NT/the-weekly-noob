/* eslint-disable jsx-a11y/media-has-caption */

function EpisodeContainer({ link, children }) {
	if (link) {
		return (
			<a href={link} className='mt-8'>
				{children}
			</a>
		)
	} else return <div className='mt-8'>{children}</div>
}

export function EpisodeIntro({ episode, link }) {
	return (
		<>
			<EpisodeContainer link={link}>
				<span className='text-link text-2xl'>
					الحلقة # {Number(episode['itunes:episode']).toLocaleString('ar-EG')}
				</span>
				<h2 className='text-2xl' dir='auto'>
					{episode.title}
				</h2>
			</EpisodeContainer>
			<p>
				—{' '}
				{new Date(episode.pubDate).toLocaleDateString('ar-EG', {
					day: 'numeric',
					weekday: 'long',
					month: 'long',
					year: 'numeric'
				})}{' '}
				—
			</p>
			<a href={episode.link} className='text-xl block mt-4 mx-auto'>
				رابط الحلقة على Anchor
			</a>
		</>
	)
}

function Episode({ episode, link }) {
	return (
		<div className='' key={episode.guid}>
			<div className='text-center'>
				<EpisodeIntro episode={episode} link={link} />
			</div>

			<audio
				className='mx-auto mt-4'
				src={episode.enclosure['@_url']}
				preload='none'
				controls
			/>
			<div
				className='mt-4'
				dangerouslySetInnerHTML={{
					__html: episode.description || episode['itunes:summary']
				}}
			/>
			<hr className='mt-16' />
		</div>
	)
}

export default Episode
