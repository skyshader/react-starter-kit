// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import type { SampleType } from '../../flow/types/SampleType';
import type { StateType } from '../../flow/types/StateType';
import type { DispatchType } from '../../flow/types/DispatchType';
import { sampleAction } from '../../actions';

type SampleContainerPropType = {
  sample: SampleType,
  onSampleAction: (message: string) => any
};

class SampleContainer extends Component {
  static displayName: string = 'SampleContainer';

  static propTypes = {
    sample: PropTypes.shape({
      message: PropTypes.string,
    }).isRequired,
    onSampleAction: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.onSampleAction('hello world from redux');
  }

  shouldComponentUpdate(nextProps: SampleContainerPropType): boolean {
    return (nextProps.sample.message !== this.props.sample.message);
  }

  render(): Component {
    return (
      <div className="Sample-Container">
        { this.props.sample.message }
      </div>
    );
  }
}

const mapStateToProps = (state: StateType): { sample: SampleType } => {
  return {
    sample: state.sample,
  }
};

type MapDispatchToPropsReturnType = { onSampleAction: (message: string) => any };
const mapDispatchToProps = (dispatch: DispatchType): MapDispatchToPropsReturnType => {
  return {
    onSampleAction: (message: string) => {
      dispatch(sampleAction(message))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SampleContainer);
