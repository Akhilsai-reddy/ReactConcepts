import React, { Suspense } from 'react'
import Comp from './Comp'
const Lazyc = React.lazy(()=>import('./Lazycomp'))

const App = () => {
  return (
    <div>
 <Suspense fallback={<h1 style={{color:'red'}}>loading......</h1>}>
    <Lazyc/>
   </Suspense>
   <Comp/>

    </div>
  )
}

export default App