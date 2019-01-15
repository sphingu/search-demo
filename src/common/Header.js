import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleStackable extends Component {
  render() {
    return (
      <Menu stackable>
        <Menu.Item>
          <img alt="logo" style={{width:'auto'}} src='https://simility.com/wp-content/uploads/2015/12/large-logo-simility.png' />
        </Menu.Item>
      </Menu>
    )
  }
}