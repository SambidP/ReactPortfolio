import Sidebar from '../Sidebar'
import './index.scss'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <> <div className='App'>
      <Sidebar />
<div className='page'>
    <span className='tags top-tags'>&lt;body&gt;</span>

    <Outlet />

    <span className='tags top-tags'>
        &lt;body&gt;
        <br />

    </span>
    <span className='bottom-tag-html'>
&lt;body&gt;
    </span>
</div>
    </div>
    </>
  )
}

export default Layout
