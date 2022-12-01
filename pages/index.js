import React from 'react'
import Episode from '../components/Episode'

import SEO from '../components/SEO'
import { loadRSSFeedFromDisk, loadRSSFeedToDisk } from '../lib'

export default function Index({ episodes }) {
	return (
		<>
			<SEO />
			<article className='md:mt-8'>
				<ul>
					{episodes.length === 0 ? (
						<h2>
							ترقبوا الحلقة القادمة يوم الثلاثاء{' '}
							<span role='img' aria-label='Grinning face'>
								😀
							</span>
						</h2>
					) : null}
					{episodes.map(ep => (
						<li className='list-none m-0' key={ep.id}>
							<Episode episode={ep} link={`/episodes/${ep.id}`} listing />
						</li>
					))}
				</ul>
			</article>
		</>
	)
}

export async function getStaticProps() {
	await loadRSSFeedToDisk()
	const episodes = Array.from(loadRSSFeedFromDisk().channel.item).reverse()

	return {
		props: { episodes }
	}
}

export const config = {
	unstable_runtimeJS: false
}
