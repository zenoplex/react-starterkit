// @flow
import React from 'react';
import Counter from './Counter';
import { NICE, SUPER_NICE } from '../constants/Colors';

const Counters = () =>
  <div>
    <Counter increment={-10} afe="nice" color={NICE}/>
    <Counter increment={11} color={SUPER_NICE}/>
  </div>;

export default Counters;