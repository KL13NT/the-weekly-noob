import Episode from '../../components/Episode'
import SEO from '../../components/SEO'
import { getItem, loadRSSFeedFromDisk, loadRSSFeedToDisk } from '../../lib'

export default function EpisodePage({ episode }) {
	return (
		<>
			<SEO
				path={`/episodes/${episode.id}`}
				title={`Episode ${episode.id}`}
				description={episode.description || episode['itunes:summary']}
			/>

			<article className='md:mt-8'>
				<Episode episode={episode} />
				<a href='/' className='text-center block mx-auto mt-10 text-2xl'>
					العودة للرئيسية
				</a>
			</article>
		</>
	)
}

export async function getStaticProps({ params: { id } }) {
	const episode = getItem(id)

	return {
		props: { episode }
	}
}

export async function getStaticPaths() {
	await loadRSSFeedToDisk()
	const rss = loadRSSFeedFromDisk()

	return {
		paths: rss.channel.item.map(item => ({
			params: {
				id: String(item.id)
			}
		})),
		fallback: false
	}
}

export const config = {
	unstable_runtimeJS: false
}
