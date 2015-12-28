import React, { Component } from 'react';
import Counter from './Counter';
import { NICE, SUPER_NICE } from '../constants/Colors';

export default class Counters extends Component {
  render() {
    return (
      <div>
        <Counter increment={-10} color={NICE}/>
        <Counter increment={11} color={SUPER_NICE}/>
      </div>
    );
  }
}
