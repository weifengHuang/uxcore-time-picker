/**
 * TimePicker Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import TimePicker from '../src';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: new Date().getTime(),
    };
  }

  render() {
    return (
      <div style={{ width: 200 }}>
        <h1>基本使用</h1>
        <TimePicker />
        <h1>受控模式</h1>
        <TimePicker
          value={this.state.value}
          onChange={(value) => {
            console.log(value);
            this.setState({ value });
          }}
        />
        <h1>选择时分</h1>
        <TimePicker showSecond={false} />
        <h1>12H</h1>
        <TimePicker use12Hours />
      </div>
    );
  }
}

export default Demo;
