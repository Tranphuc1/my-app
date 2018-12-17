import React from 'react';
import * as yup from 'yup';
import { withFormik, Form, Field } from 'formik';
import * as routes from '../../Products/constants/Login';
import { NotificationManager } from 'react-notifications';
import { auth } from '../../../FirebaseConnect';

const SignUpForm = props => {
    const {
        touched,
        errors,
        isSubmitting,
    } = props;

    return (
        <Form className="form-signin">
            <h2 className="text-center">Đăng ký</h2>
            <label htmlFor="inputEmail">Email</label>
            <div className="form-label-group">
                <Field
                    type="text"
                    name="txtEmail"
                    placeholder="Email"
                    id="inputEmail"
                    className={errors.txtEmail && touched.txtEmail ? ('text-input error form-control') : ('form-control text-input')}
                />
                
            </div>
            {errors.txtEmail && touched.txtEmail && (<div className="alert alert-danger">{errors.txtEmail}</div>)}
            <label htmlFor="inputPassword">Mật khẩu</label>
            <div className="form-label-group">
                <Field
                    type="password"
                    name="txtPassword"
                    placeholder="Password"
                    id="inputPassword"
                    className={errors.txtPassword && touched.txtPassword ? ('text-input error form-control') : ('form-control text-input')}
                />
                
            </div>
            {errors.txtPassword && touched.txtPassword && (<div className="alert alert-danger">{errors.txtPassword}</div>)}
            <label htmlFor="inputConfirmPassword">Nhập lại mật khẩu</label>
            <div className="form-label-group">
            
                <Field
                    type="password"
                    name="txtConfirmPassword"
                    placeholder="Confirm Password"
                    id="inputConfirmPassword"
                    className={errors.txtConfirmPassword && touched.txtConfirmPassword ? ('text-input error form-control') : ('form-control text-input')}
                />
                
            </div>
            {errors.txtConfirmPassword && touched.txtConfirmPassword && (<div className="alert alert-danger">{errors.txtConfirmPassword}</div>)}

            <div className="field">
                <button disabled={isSubmitting} type="submit" className="btn btn-lg btn-success btn-block">Đăng ký</button>
            </div>
            {errors && errors.message && <div className="mt-2 mb-0 alert alert-danger">{errors.message}</div>}
        </Form>
    );
}

function equalTo(ref, msg) {
    return yup.mixed().test({
        name: 'equalTo',
        exclusive: false,
        message: msg || "${path} must be the same as ${reference}", // eslint-disable-line
        params: {
            reference: ref.path,
        },
        test: function (value) {
            return value === this.resolve(ref);
        },
    });
}
yup.addMethod(yup.string, 'equalTo', equalTo);

const EnhancedSignUpForm = withFormik({
    mapPropsToValues: (props) => ({
        txtEmail: '',
        txtPassword: '',
        txtConfirmPassword: '',
        history: props.history
    }),
    validationSchema: yup.object().shape({
        txtEmail: yup.string().email('Email không đúng định dạng').required('Vui lòng nhập địa chỉ email'),
        txtPassword: yup.string().required('Vui lòng nhập mật khẩu').min(6, 'Mật khẩu ít nhất 6 ký tự'),
        txtConfirmPassword: yup.string().equalTo(yup.ref('txtPassword'), 'Mật khẩu nhập lại không chính xác').required('Trường bắt buộc nhập')
    }),
    handleSubmit : (values, { setSubmitting, setErrors }) => {
        let email = values.txtEmail;
        let txtPassword = values.txtPassword;
        let history = values.history;
        setSubmitting(false);
        auth.createUserWithEmailAndPassword(email, txtPassword)
            .then((u)=>{
                NotificationManager.success('Đăng ký thành công!');
                history.push(routes.SIGN_IN);
            })
			.catch(error => {
                setErrors(error);
			});
    },
    displayName: 'SignUpForm', // helps with React DevTools
})(SignUpForm);


export default EnhancedSignUpForm;