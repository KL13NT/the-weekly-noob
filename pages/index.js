import parser from 'fast-xml-parser'
import React from 'react'

import SEO from '../components/SEO'

export default function Blog({ episodes }) {
	return (
		<>
			<SEO title='Blog' />
			<header className='flex flex-col items-center text-center'>
				<img src='/tag.webp' className='w-4/5' />
				<div>
					<p className='text-2xl'>
						مدونة صوتية اسبوعية (كل ثلاثاء) تغطي كل جديد في عالم تطوير البرمجيات
						وتطرَّقَ لمواضيع هامة للطلبة.
					</p>
					<p className='text-xl mt-8'>
						يقدمها لكم <a href='https://iamnabil.netlify.app'>نبيل ثروت</a>
					</p>
				</div>
			</header>
			<article>
				<ul>
					{episodes.map((ep, index) => (
						<li className='list-none text-center'>
							<hr />
							<h4 className='mt-8' dir='auto'>
								{ep.title}
							</h4>
							<p>
								الحلقة {(index + 1).toLocaleString('ar-EG')} —{' '}
								{new Date(ep.pubDate).toLocaleDateString('ar-EG', {
									day: 'numeric',
									weekday: 'long',
									month: 'long',
									year: 'numeric'
								})}
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
						</li>
					))}
				</ul>
			</article>
			<footer className='mt-16 text-center'>
				<p className='text-sm'>
					الاستضافة باستخدام <a href='https://vercel.com'>Vercel</a>. مفتوح
					المصدر على{' '}
					<a href='https://github.com/kl13nt/the-weekly-noob'>GitHub</a>.
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
