/* global componentHandler*/
import React from 'react'

/* import css */
import '../../../static/assets/css/welcome.css'

/* libs */
import classNames from 'classnames'

class Welcome extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      selected: 0,
      data: [
          { open: false, label: 'John Doe', value: 'JohnDoe' },
          { open: false, label: 'Jane Doe', value: 'JaneDoe' },
          { open: false, label: 'André Alves', value: 'AndreAlves' },
          { open: false, label: 'Foo bar', value: 'FooBar' }
      ]
    }
  }

  componentDidUpdate () {
    console.info('component did update!')
    // window.componentHandler.upgradeAllRegistered()
    componentHandler.upgradeDom()
  }

  componentDidMount () {
    console.info('component has mounted')
    // setTimeout(() => {
    //   window.componentHandler.upgradeAllRegistered()
    // }, 250)
    // window.componentHandler.upgradeAllRegistered()
  }

  handleChangeOption () {
    // console.log(newValue)
    // this.setState({
    //   selected: newValue
    // })
  }

  handleClickRow (event, index) {
    console.log(event.target, index)
    let { data } = this.state
    data[index].open = !data[index].open
    this.setState({ data })
  }

  renderOption (data) {
    return data.map((option, i) => {
      const { selected } = this.state

      let className = classNames({
        'inbox': true,
        'mdl-list__item': true,
        'mdl-shadow--2dp': !option.open,
        'open mdl-shadow--6dp': option.open
      })

      return (
          <li key={i} className={className} onClick={(event) => this.handleClickRow(event, i)}>
            <span className='mdl-list__item-primary-content'>
              <i className='material-icons  mdl-list__item-avatar'>person</i>
              {option.label} - {option.open ? 'aberto' : 'fechado'}
            </span>
            <span className='mdl-list__item-secondary-action'>
              <label className='demo-list-radio mdl-radio mdl-js-radio mdl-js-ripple-effect' htmlFor='list-option-1'>
                <input
                    type='radio'
                    id='list-option-1'
                    className='mdl-radio__button'
                    name='options'
                    onClick={this.handleChangeOption}
                    defaultChecked={selected === i}
                />
              </label>
            </span>
          </li>
      )
    })
  }

  render () {
    const { selected, data } = this.state

    return (
        <div>
            <ul className='demo-list-control mdl-list'>
                {this.renderOption(data)}
            </ul>
            <pre>{selected}</pre>
        </div>
    )
  }
}

export default Welcome
