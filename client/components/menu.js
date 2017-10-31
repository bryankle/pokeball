import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';

export default class MenuExamplePointing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home'
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing>

          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick} />

          <Menu.Item
            name="profile"
            active={activeItem === 'profile'}
            onClick={this.handleItemClick} />

          <Menu.Menu position="right">

            <Menu.Item className="item">
              <Button as="a">Log In</Button>
            </Menu.Item>

            <Menu.Item>
              <Button as="a" primary>Sign Up</Button>
            </Menu.Item>

            <div class="ui vertical animated button" tabindex="0">
              <div class="hidden content">Shop</div>
              <div class="visible content">
                <i class="shop icon"></i>
              </div>
            </div>

          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
