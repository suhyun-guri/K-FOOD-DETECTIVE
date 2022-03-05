import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';
import {login, logout, refresh} from '../../utils/isLogin'; 

export function AccountLoginForm() {
    const navigate = useNavigate()

    //여기는 임시코드입니다.
    const handleClick = ()=>{
        const values = {username: formik.values.username, password: formik.values.password};
        login(values, navigate);
    }
    const handleLogout = ()=>{
        logout(navigate);
    }
    const handleRefresh = ()=>{
        refresh();
    }
    //임시코드 끝

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup
                .string()
                .max(15)
                .required(
                    'Username is required'),
            password: Yup
                .string()
                .max(20)
                .required(
                    'Password is required')
        }),
        onSubmit: (values) => { login(values) }
    });

    return (
        <>
            <Box
                component="form"
                sx={{
                    width: '100%',
                    my: '7%'
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
                        mb: 4
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
                        mb: 4
                    }}
                />

                <Button
                    variant='contained'
                    sx={{
                        mt: 1,
                        width: '100%',
                        height: '6.8vh'
                    }}
                    onClick={handleClick}
                >
                    Log In
                </Button>
                
                <Button
                    variant='contained'
                    sx={{
                        mt: 1,
                        width: '100%',
                        height: '6.8vh'
                    }}
                    onClick={handleLogout}
                >
                    Log out
                </Button>

                <Button
                    variant='contained'
                    sx={{
                        mt: 1,
                        width: '100%',
                        height: '6.8vh'
                    }}
                    onClick={handleRefresh}
                >
                    Refresh
                </Button>
            </Box>
        </>
    )
}