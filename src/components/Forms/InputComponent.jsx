import React from 'react';
import PropTypes from 'prop-types';

import '../../common/forms.scss';

const InputComponent = ({
  input, placeholder, wrapperClassName, inputClassName, errorClassName, showErrorText,
  type, id, labelText, labelClass, meta: { touched, error }, focus, additional, disabled,
  secondLabelText, setFieldToBeFocused, disableTouchValidation,
}) => {
  const touchedValidation = touched || disableTouchValidation;

  return (
    <div className={`${wrapperClassName} ${touchedValidation && error ? 'wrapper-error' : ''}`}>
      <div className="input-values">
        {labelText && <label className={labelClass} htmlFor={id || ''}>{ labelText }</label>}
        {/* { icon && <span className={`${touched && error ? 'icon-error' : ''} input-icon`}>{icon}</span> } */}
        <input
          {...input}
          {...additional}
          placeholder={placeholder}
          id={id || ''}
          className={`${inputClassName} ${touchedValidation && error ? errorClassName : ''}`}
          type={type}
          ref={input => setFieldToBeFocused(input)}
          autoFocus={focus}
          disabled={disabled}
        />
        { secondLabelText && <div className="second-label">{secondLabelText}</div> }
      </div>

      {touchedValidation && ((error && showErrorText && <div className={errorClassName}>{error}</div>))}
    </div>
  );
};

InputComponent.defaultProps = {
  type: 'text',
  labelText: '',
  secondLabelText: '',
  labelClass: '',
  id: '',
  placeholder: '',
  showErrorText: false,
  disableTouchValidation: false,
  focus: false,
  disabled: false,
  additional: {},
  wrapperClassName: 'form-item-wrapper',
  inputClassName: 'form-item',
  errorClassName: 'form-item-error',
  setFieldToBeFocused: () => {},
  // icon: <div />,
};

InputComponent.propTypes = {
  input: PropTypes.any.isRequired,
  placeholder: PropTypes.string,
  wrapperClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  errorClassName: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  labelText: PropTypes.string,
  secondLabelText: PropTypes.string,
  labelClass: PropTypes.string,
  meta: PropTypes.object.isRequired,
  showErrorText: PropTypes.bool,
  focus: PropTypes.bool,
  disabled: PropTypes.bool,
  disableTouchValidation: PropTypes.bool,
  additional: PropTypes.object,
  setFieldToBeFocused: PropTypes.func,
  // icon: PropTypes.node,
};

export default InputComponent;
