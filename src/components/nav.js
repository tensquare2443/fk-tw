import React, {Component} from 'react';

class Nav extends Component {
  render() {
    return(
      <div className="nav">
        <div className="nav-items-row">
          <div
            className="toggle-options-container"
            onClick={this.props.toggleOptions}
          >
            <img
              src={require('../img/drawer.png')}
              className="nav-drawer"
            />
          </div>
          <div className="nav-img-container">
            <img
              src={require('../img/twitter.png')}
              className="nav-img"
            />
          </div>
          <div className="nav-title">Not Twitter</div>
        </div>
      </div>
    );
  }
}

export default Nav;
