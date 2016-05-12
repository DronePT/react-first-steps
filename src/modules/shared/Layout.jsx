import React from 'react'

class Layout extends React.Component {
  render () {
    const content = this.props.children
    return (
        <div className='mdl-layout mdl-js-layout'>
          <header className='demo-layout-transparent mdl-layout__header mdl-layout__header--transparent'>
            <div className='mdl-layout__header-row'>
              <span className='mdl-layout-title'>React Learning</span>
              <div className='mdl-layout-spacer'></div>
              <nav className='mdl-navigation'>
                <a className='mdl-navigation__link' href=''>Link</a>
                <a className='mdl-navigation__link' href=''>Link</a>
                <a className='mdl-navigation__link' href=''>Link</a>
                <a className='mdl-navigation__link' href=''>Link</a>
              </nav>
            </div>
          </header>
          <div className='mdl-layout__drawer'>
            <span className='mdl-layout-title'>Sidebar</span>
            <nav className='mdl-navigation'>
              <a className='mdl-navigation__link' href=''>Link SB #1</a>
              <a className='mdl-navigation__link' href=''>Link</a>
              <a className='mdl-navigation__link' href=''>Link</a>
              <a className='mdl-navigation__link' href=''>Link</a>
            </nav>
          </div>
          <main className='mdl-layout__content'>
              {content}
          </main>
        </div>
    )
  }
}

export default Layout
