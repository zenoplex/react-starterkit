// @flow
import React from 'react';
import { compose, withState } from 'recompose';
import { willMount, willUnmount } from 'highorders/lifecycle';

type Props = {
  color?: string,
  increment?: number,
}
type ComposedProps = {
  counter: number,
  updateCounter: Function,
  interval: ?number,
  updateInterval: Function,
} & Props;

const Counter = ({ color, increment, counter }: ComposedProps) =>
  <h1 style={{ color }}>
    Counter {increment} <span>{counter}</span>
  </h1>;

export default (compose(
  withState('counter', 'updateCounter', 0),
  withState('interval', 'updateInterval'),
  willMount(({ increment, updateCounter, updateInterval }: ComposedProps) => {
    const interval = setInterval(() => updateCounter(n => n + increment), 500);
    updateInterval(interval);
  }),
  willUnmount(({ interval }) => clearInterval(interval)),
)(Counter): Class<React$Component<void, Props, void>>);
