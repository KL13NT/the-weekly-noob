import React from 'react'

import SEO from '../components/SEO'

const NotFoundPage = () => (
	<>
		<SEO title='404: غير موجود' />
		<div className='text-center'>
			<h1>
				{'<'}غير_موجود{'>'}
			</h1>
			<p>
				هذه الصفحة غير موجودة
				<br />
				<a href='/'>ارجع لصفحة البداية</a>
			</p>
		</div>
	</>
)

export const config = {
	unstable_runtimeJS: false
}

export default NotFoundPage
