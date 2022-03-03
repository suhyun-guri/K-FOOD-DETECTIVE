import * as React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Box, Button, TextField } from '@mui/material';
import { useHistory } from "react-router-dom";
import { register } from '../../utils/isLogin'; 

export function AccountRegisterForm() {
    //임시코드 시작
    const handleClick = ()=>{
        const values = {username: formik.values.username, email: formik.values.email, password: formik.values.password};
        register(values);
    }
    //임시코드 끝

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            changepassword: ''
        },
        validationSchema: Yup.object({
            username: Yup
                .string()
                .max(15)
                .required(
                    'Username is required'),
            email: Yup
                .string()
                .email(
                    'Must be a valid email')
                .max(100)
                .required(
                    'Email is required'),
            password: Yup
                .string()
                .max(20)
                .required(
                    'Password is required'),
            changepassword: Yup
                .string()
                .when(
                    'password',
                    {
                        is: val => (val && val.length > 0 ? true : false),
                        then: Yup.string().oneOf(
                            [Yup.ref("password")],
                            "Both password need to be the same"
                        )
                    }
                )
        }),
        onSubmit: (values) => { register(values) }
    });

    return (
        <>
            <Box
                component="form"
                sx={{
                    width: '100%',
                    overflow: 'auto'
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    error={Boolean(formik.touched.username && formik.errors.username)}
                    fullWidth
                    helperText={formik.touched.username && formik.errors.username}
                    label="Username"
                    margin="normal"
                    name="username"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.username}
                    variant="outlined"
                    sx={{
                        mb: 2
                    }}
                />

                <TextField
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email Address"
                    margin="normal"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                    variant="outlined"
                    sx={{
                        mb: 2
                    }}
                />
                <TextField
                    error={Boolean(formik.touched.password && formik.errors.password)}
                    fullWidth
                    helperText={formik.touched.password && formik.errors.password}
                    label="Password"
                    margin="normal"
                    name="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values.password}
                    variant="outlined"
                    sx={{
                        mb: 2
                    }}
                />

                <TextField
                    error={Boolean(formik.touched.changepassword && formik.errors.changepassword)}
                    fullWidth
                    helperText={formik.touched.changepassword && formik.errors.changepassword}
                    label="Confirm Password"
                    margin="normal"
                    name="changepassword"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values.changepassword}
                    variant="outlined"
                    sx={{
                        mb: 2
                    }}
                />

                <Button
                    variant='contained'
                    sx={{
                        width: '100%',
                        height: '6.8vh',
                        mt: 1
                    }}
                    onClick={handleClick}
                >
                    Register
                </Button>

            </Box>

        </>
    )
}