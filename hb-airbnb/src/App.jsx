import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import useScrollTop from './hooks/useScrollTop'
import routes from './router'

const App = memo(() => {
  useScrollTop()

  return (
    <div className='App'>
      <div className='header'>
        <AppHeader/>
      </div>
      <Suspense fallback="loading">
        <div className='content'>
          {useRoutes(routes)}
        </div>
      </Suspense>
      <div className='footer'>
        <AppFooter/>
      </div>
    </div>
  )
})

export default App