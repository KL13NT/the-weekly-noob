import fs from 'fs'

import parser from 'fast-xml-parser'
import path from 'path'

export async function loadRSSFeedToDisk() {
	const res = await fetch('https://anchor.fm/s/398d61b4/podcast/rss')
	const xml = await res.text()

	const parsed = parser.parse(xml, {
		parseAttributeValue: true,
		ignoreAttributes: false
	})

	parsed.rss.channel.item.reverse()

	const rss = {
		...parsed.rss,
		channel: {
			...parsed.rss.channel,
			item: parsed.rss.channel.item.map((item, index) => ({
				...item,
				id: index + 1,
				season: item['itunes:summary']
			}))
		}
	}

	fs.writeFileSync(path.resolve(process.cwd(), 'rss.json'), JSON.stringify(rss))
}

let cache = null
export function loadRSSFeedFromDisk() {
	cache = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'rss.json')))

	return cache
}

export function getItem(id) {
	if (!cache) loadRSSFeedFromDisk()

	return cache.channel.item[id - 1]
}
