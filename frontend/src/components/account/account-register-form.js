// /signin 페이지의 Register관련 form
// 아래 주석 코드는 현재 isLogin.js의 Register component의 alert 대신 Snackbar ui를 사용하려 했는데
// 이를 이 파일에 사용할지 아니면 isLogin.js에 작성해야할지 몰라 남겨둠

import * as React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Alert, Box, Button, TextField, Snackbar, MuiAlert } from '@mui/material';
import { Register } from '../../utils/isLogin'; 
import { useNavigate } from 'react-router-dom';

export function AccountRegisterForm() {
    const navigate = useNavigate()
    // const [open, setOpen] = React.useState(false);
    //임시코드 시작
    const handleClick = ()=>{
        const values = {username: formik.values.username, email: formik.values.email, password: formik.values.password};
        Register(values, navigate);
        // setOpen(true);
    }

    // const handleClose = (event, reason) => {
    //     if (reason === 'clickaway') {
    //         return;
    //     }
    //     setOpen(false);
    // }
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
        onSubmit: (values) => { Register(values) }
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
                {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert severity="success" onClose={handleClose} sx={{ width: '100%' }}>
                        This is a success message!
                    </Alert>
                </Snackbar> */}

            </Box>

        </>
    )
}