import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginImg from "../../assets/images/login_image.jpg"
import "./index.scss"
import { Link, useLocation } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

Auth.propTypes = {

};

function Auth(props) {
    const location = useLocation();
    const currentPath = location.pathname.slice(1);

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
    });

    const onSubmit = (values) => {
        console.log(values);
    };
    console.log("aaa")

    return (
        <div className="auth">
            <div className="row">
                <div className="col-8">
                    <div className="left">
                        <img src={LoginImg} />
                        <div className="list_btn">
                            <div className={`auth_btn my-2 ${currentPath === "login" ? "active_btn" : ""}`}>
                                <Link to="../login">LOGIN</Link>
                            </div>
                            <div className={`auth_btn my-2 ${currentPath !== "login" ? "active_btn" : ""}`}>
                                <Link to="../register">REGISTER</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 p-5">
                    <div className="right py-5">
                        <h2 className='text-center fw-bolder'>LION STAR</h2>
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                            {({ isSubmitting }) => (
                                <Form className='py-5'>
                                    <div className="form-group my-4">
                                        <label htmlFor="email">Email</label>
                                        <Field type="email" name="email" className="form-control" />
                                        <ErrorMessage name="email" className="text-danger" />
                                    </div>

                                    <div className="form-group my-4">
                                        <label htmlFor="password">Password</label>
                                        <Field type="password" name="password" className="form-control" />
                                        <ErrorMessage name="password" className="text-danger" />
                                    </div>
                                    {currentPath === "login" ? 
                                        <div className='login my-4'>
                                            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                                LOGIN
                                            </button>
                                        </div>
                                        :
                                        <div className='register my-4 d-flex align-items-center justify-content-between'>
                                            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                                REGISTER
                                            </button>
                                            <span className='d-flex align-items-center'>
                                                <input type='checkbox' style={{width:"20px", height:"20px"}} className='me-2' />
                                                <span style={{fontSize:"1rem"}}>I agree the term of services</span>
                                            </span>
                                        </div>
                                    }
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;