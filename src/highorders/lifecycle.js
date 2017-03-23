// @flow
/* eslint-disable immutable/no-this */
import { lifecycle } from 'recompose';

type FnProps = (Object) => any;
type FnWillReceive = (current: Object, nextProps: Object) => any;
type FnWillUpdate = (current: Object, nextProps: Object, nextState: Object) => any;
type FnDid = (current: Object, prevProps: Object, prevState: Object) => any;

export const willMount
: <T>(fn: FnProps) => (Component: T) => T
= fn => Component => lifecycle({
  componentWillMount() {
    fn(this.props);
  },
})(Component);

export const didMount
: <T>(fn: FnProps) => (Component: T) => T
= fn => Component => lifecycle({
  componentDidMount() {
    fn(this.props);
  },
})(Component);

export const willReceiveProps
: <T>(fn: FnWillReceive) => (Component: T) => T
= fn => Component => lifecycle({
  componentWillReceiveProps(nextProps) {
    fn(this.props, nextProps);
  },
})(Component);

export const willUpdate
: <T>(fn: FnWillUpdate) => (Component: T) => T
= fn => Component => lifecycle({
  componentWillUpdate(nextProps, nextState) {
    fn(this.props, nextProps, nextState);
  },
})(Component);

export const didUpdate
: <T>(fn: FnDid) => (Component: T) => T
= fn => Component => lifecycle({
  componentDidUpdate(prevProps, prevState) {
    fn(this.props, prevProps, prevState);
  },
})(Component);

export const willUnmount
: <T>(fn: FnDid) => (Component: T) => T
= fn => Component => lifecycle({
  componentWillUnmount(prevProps, prevState) {
    fn(this.props, prevProps, prevState);
  },
})(Component);
