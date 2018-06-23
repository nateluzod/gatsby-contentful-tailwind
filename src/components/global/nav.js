import React from 'react'
import Link from 'gatsby-link'
import classnames from 'classnames'

export default class Nav extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {active: false}
  }

  click() {
    alert('test')
    // if(this.state = {active: false}) {
    //   this.setState({active: true})
    // } else {
    //   this.setState({active: false})
    // }
  }

  render () {
    let classes = classnames('nav', {active: this.state.active})
    
    return (
      <div className='fixed pin-t pin-r'>
        <a 
          onClick={this.click.bind(this)}
          href='#' 
          className='fixed pin-t pin-r z-20'>
          Nav
        </a>
        <nav role="navigation"
          className={classes}
          // 'fixed pin-t pin-r pin-b bg-red p-50px z-10'
          >
          <ul className='list-reset p-6'>
            <li>
              <Link to="/" className='text-white'>Home</Link>
            </li>
            <li>
              <Link to="/blog/" className='text-white'>Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}