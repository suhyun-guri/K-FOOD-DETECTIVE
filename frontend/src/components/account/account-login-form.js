import * as React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Box, Button, TextField } from '@mui/material';
import { useHistory } from "react-router-dom";

export function AccountLoginForm() {
    //글로벌 전역 상태값 setUser를 받기
    //로그인이 성공적으로 이루어지면 user에 상태값을 넣어줘야지 나중에 다른 컴포넌트에서도 user값을 이용하여 다른 것들을 할 수 있음
//     const { setUser } = useUserContext();

//     //url 이동을 위한 useHistory
//     const history = useHistory();

//     //input에서 입력한 아이디와 비밀번호 정보를 담기위한 state
//   const [account, setAccount] = useState({
//     username: "",
//     password: "",
//   });

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
        // onSubmit: () => {
        //   router.push('/');
        // }
    });

    return (
        <>
            <Box
                component="form"
                sx={{
                    width: '100%',
                    my: '10%'
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