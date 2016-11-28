import React from 'react';

export class Banner extends React.Component {
  constructor() {
    super();
    this.assetsLib = '/dist/assets/images/default/images.jpg';
  }
  render() {
    return <div>
      <img src={this.assetsLib} alt="Banner image" />
    </div>
  }
}

module.exports = {
  banner : Banner
}