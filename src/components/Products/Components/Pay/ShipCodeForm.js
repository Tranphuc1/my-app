import React from 'react';
import * as yup from 'yup';
import { withFormik, Form, Field } from 'formik';


const ShipCodeForm = props => {
    const {
        touched,
        errors,
        isSubmitting,
    } = props;


    return (
        <Form className="form-shipcode">
                <h2 className="text-center"></h2>
        </Form>
    );
 }