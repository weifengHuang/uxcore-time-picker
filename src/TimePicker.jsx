/**
 * TimePicker Component for uxcore
 * @author eternalsky
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';

import RcTimePicker from 'rc-time-picker';
import moment from 'moment';
import PropTypes from 'prop-types';

class TimePicker extends React.Component {
  static defaultProps = {
    ...RcTimePicker.defaultProps,
    align: {
      offset: [0, 0],
    },
    locale: 'zh-cn',
    prefixCls: 'uxcore-time-picker',
    transitionName: 'timePickerSlideUp',
  };

  static propTypes = {
    ...RcTimePicker.propTypes,
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object,
    ]),
    defaultValue: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object,
    ]),
    locale: PropTypes.string,
  };

  static displayName = 'TimePicker';

  render() {
    const { value, defaultValue, defaultOpenValue, onChange, locale } = this.props;
    const otherProps = {
      onChange: (change) => {
        if (typeof onChange === 'function') {
          onChange(change.valueOf());
        }
      },
      defaultOpenValue: moment(defaultOpenValue).locale(locale),
    };
    if (value) {
      otherProps.value = moment(value).locale(locale);
    }
    if (defaultValue) {
      otherProps.defaultValue = moment(defaultValue).locale(locale);
    }
    return (
      <RcTimePicker
        {...this.props}
        {...otherProps}
      />
    );
  }
}

export default TimePicker;

