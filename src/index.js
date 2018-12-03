import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

//const store = storeFactory()

window.React = React
//window.store = store

render(
			<App />,
	document.getElementById('react-container')
)

