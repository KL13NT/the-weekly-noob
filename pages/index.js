import parser from 'fast-xml-parser'
import React from 'react'

import SEO from '../components/SEO'

export default function Index({ episodes }) {
	return (
		<>
			<SEO />
			<header className='flex flex-col md:flex-row items-center text-center md:text-right'>
				<picture className='w-4/5 md:ml-8'>
					<source srcSet='/tag.webp' />
					<img src='/tag.png' alt='Header image' />
				</picture>
				<div>
					<p>
						مدونة صوتية اسبوعية (كل ثلاثاء) تغطي كل جديد في عالم تطوير البرمجيات
						وتطرَّقَ لمواضيع هامة للطلبة.
					</p>
					<p className='text-xl mt-8'>
						يقدمها لكم <a href='https://iamnabil.netlify.app'>نبيل ثروت</a>.
					</p>
				</div>
			</header>
			<hr className='mt-16' />
			<article className='md:mt-8'>
				<ul>
					{episodes.length === 0 ? (
						<h2>ترقبوا الحلقة القادمة يوم الثلاثاء 😀</h2>
					) : null}
					{episodes.reverse().map(ep => (
						<li className='list-none text-center'>
							<a href={ep.link} className='mt-8'>
								<span className='text-link text-2xl'>
									الحلقة #{' '}
									{Number(ep['itunes:episode']).toLocaleString('ar-EG')}
								</span>
								<h2 className='text-2xl' dir='auto'>
									{ep.title}
								</h2>
							</a>
							<p>
								—{' '}
								{new Date(ep.pubDate).toLocaleDateString('ar-EG', {
									day: 'numeric',
									weekday: 'long',
									month: 'long',
									year: 'numeric'
								})}{' '}
								—
							</p>
							<audio
								className='mx-auto mt-4'
								src={ep.enclosure['@_url']}
								preload='none'
								controls
							/>
							<div
								className='mt-4'
								dangerouslySetInnerHTML={{
									__html: ep.description || ep['itunes:summary']
								}}
							/>
							<hr className='mt-16' />
						</li>
					))}
				</ul>
			</article>
			<footer className='mt-16 text-center'>
				<p className='text-sm'>
					الاستضافة باستخدام{' '}
					<a
						href='https://netlify.com'
						rel='noopener'
						target='_blank'
						referrerPolicy='no-referrer'
						className='text-white'
					>
						Netlify
					</a>
					. مفتوح المصدر على{' '}
					<a
						href='https://github.com/kl13nt/the-weekly-noob'
						rel='noopener'
						target='_blank'
						referrerPolicy='no-referrer'
						className='text-white'
					>
						GitHub
					</a>
					.
				</p>
			</footer>
		</>
	)
}

export async function getStaticProps() {
	const res = await fetch('https://anchor.fm/s/398d61b4/podcast/rss')
	const xml = await res.text()

	const { rss } = parser.parse(xml, {
		parseAttributeValue: true,
		ignoreAttributes: false
	})

	if (!rss?.channel?.item) return { props: { episodes: [] } }
	if (!Array.isArray(rss?.channel?.item))
		return {
			props: { episodes: [rss.channel.item] }
		}

	return {
		props: { episodes: rss.channel.item }
	}
}

export const config = {
	unstable_runtimeJS: false
}
