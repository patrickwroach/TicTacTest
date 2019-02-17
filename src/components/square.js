import React, {Component} from 'react';

export class Square extends React.Component {
  
  render() {
    return (
      <div className={"square " + this.props.status} onClick={() => this.props.onClick()}>
          <div class="status-container">
          <div class="x-shape">
            <div class="slash"></div>
            <div class="slash"></div>
          </div>
          <div class="o-shape"></div>
        </div>        
      </div>
    );
  }
}
