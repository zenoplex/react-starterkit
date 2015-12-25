import React, { Component } from 'react';
import Counter from '../components/Counter';
import { NICE, SUPER_NICE } from '../constants/Colors';

export default class App extends Component {
  render() {
    return (
      <div>
        <Counter increment={20} color={NICE}/>
        <Counter increment={5} color={SUPER_NICE}/>
      </div>
    );
  }
}
