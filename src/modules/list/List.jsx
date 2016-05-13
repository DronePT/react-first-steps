/* global componentHandler*/
import React from 'react'

/* import css */
import '../../../static/assets/css/list.css'

/* libs */
import classNames from 'classnames'

class List extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      lastRowClicked: null,
      data: []
    }
  }

  applyComponentHandler (tries = 0) {
    // wait 10 seconds and then throw an error
    if (tries > 100) throw new Error('we couldn\'t find componentHandler, check if it is being loaded')
    if (!window.componentHandler) setTimeout(() => this.applyComponentHandler(tries + 1), 100)
    else {
      componentHandler.upgradeDom()
      console.log('componentHandler.upgradeDom() executed!')
    }
  }

  componentDidUpdate () {
    console.info('component did update!')
    // window.componentHandler.upgradeAllRegistered()
    this.applyComponentHandler()
  }

  componentDidMount () {
    console.info('component has mounted')
    // TODO: Obter os dados atraves de XHR request à API
    this.setState({
      data: [
        { open: false, label: 'John Doe', value: 'JohnDoe' },
        { open: false, label: 'Jane Doe', value: 'JaneDoe' },
        { open: false, label: 'Andre Alves', value: 'AndreAlves' },
        { open: false, label: 'Foo bar', value: 'FooBar' }
      ]
    })
  }

  handleClickRow (event, index) {
    let { data } = this.state
    data[index].open = !data[index].open
    this.setState({ data, lastRowClicked: index })
  }

  renderOption (data) {
    return data.map((option, i) => {
      let className = classNames({
        'mdl-list__item inbox': true,
        'mdl-shadow--2dp': !option.open,
        'open mdl-shadow--6dp': option.open
      })

      return (
          <li key={i} className={className} onClick={(event) => this.handleClickRow(event, i)}>
            <span className='mdl-list__item-primary-content'>
              <i className='material-icons  mdl-list__item-avatar'>person</i>
              {option.label} - {option.open ? 'aberto' : 'fechado'}
            </span>
          </li>
      )
    })
  }

  render () {
    const { lastRowClicked, data } = this.state

    return (
        <div>
            <ul className='demo-list-control mdl-list'>
                {this.renderOption(data)}
            </ul>
            <pre>Último elemento pressionado: {lastRowClicked}</pre>
        </div>
    )
  }
}

export default List
