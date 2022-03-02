import * as React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Box, Button, TextField } from '@mui/material';

export function AccountLoginForm() {
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
        onSubmit: () => { }
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
                >
                    Log In
                </Button>

            </Box>
        </>
    )
}