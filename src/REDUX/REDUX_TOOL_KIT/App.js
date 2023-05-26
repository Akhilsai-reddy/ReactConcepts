import React from 'react'
import Employee from './Employee'
import { Provider } from 'react-redux'
import { store } from './store'
const App = () => {
  return (
    <div>
        <Provider store={store}>
        <Employee/>
        </Provider>
        
    </div>
  )
}

export default App