import React from 'react'
import Link from 'next/link'

import SEO from '../components/SEO'

const NotFoundPage = () => (
	<>
		<SEO title='404: Not found' />
		<div className='text-center'>
			<h1>
				{'<'}NOT_FOUND{'>'}
			</h1>
			<p>
				You just hit a route that doesn't exist... the sadness.
				<br />
				<Link href='/'>
					<a>Go home</a>
				</Link>
			</p>
		</div>
	</>
)

export default NotFoundPage
