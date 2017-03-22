// @flow
import React from 'react';
import { compose, withState, lifecycle } from 'recompose';

type Props = {
  color: string,
  increment: number,
}
type ComposedProps = {
  counter: string,
} & Props;

const Counter = ({ color, increment, counter }: ComposedProps) =>
  <h1 style={{ color }}>
    Counter {increment} <span>{counter}</span>
  </h1>;

export default (compose(
  withState('counter', 'updateCounter', 0),
)(Counter): Class<React$Component<void, Props, void>>);
