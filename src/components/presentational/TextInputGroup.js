import React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

const TextInputGroup= ({
    label,
    name,
    value,
    placeholder,
    type,
    onChange,
    error
}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                className={classnames('form-control form-control-lg', {
                    'is-invalid': error
                })}
                placeholder={placeholder}
                value={value}
                onChange ={onChange}
            />
        </div>
    );
};
TextInputGroup.propTypes = {
    label: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    placeholder: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    error: propTypes.string,
};
TextInputGroup.defaultProps = {
    type: 'text'
  };
export default TextInputGroup;