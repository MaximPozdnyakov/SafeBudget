import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

function FieldError({ error }) {
    if (!Array.isArray(error)) {
        return (
            <Form.Control.Feedback type="invalid">
                {error}
            </Form.Control.Feedback>
        );
    }
    return (
        <Form.Control.Feedback type="invalid">
            <ul className="pl-0 ml-3">
                {error.map(error => (
                    <li key={error}>{error}</li>
                ))}
            </ul>
        </Form.Control.Feedback>
    );
}

FieldError.propTypes = {
    error: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ])
};

export default FieldError;
