import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField } from '@mui/material';


export function AccountProfileDetails(props) {
    console.log('Account Profile Details의 props : ', props.data)
    console.log('Account Profile Details의 nationlity : ', props.data.nationality)

    const [isError, setIsError] = useState(false);

    const [values, setValues] = useState({
        username: `${props.data.username}`,
        age: `${props.data.age}`,
        nationality: `${props.data.nationality}`,
        gender: `${props.data.gender}`,
        email: `${props.data.email}`
      });
    
      const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        });
      };
    
    return (
        <>
            <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider sx={{ mb: 3 }} />
        <CardContent sx={{ mx: 2 }}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="Username"
                name="username"
                onChange={handleChange}
                required
                value={values.username}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Age"
                name="age"
                onChange={handleChange}
                // required
                select
                SelectProps={{ native: true }}
                value={values.age}
                variant="outlined"
              >
                {age.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Nationality"
                name="nationality"
                onChange={handleChange}
                value={values.nationality}
                variant="outlined"
              />
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Gender"
                name="gender"
                onChange={handleChange}
                // required
                select
                SelectProps={{ native: true }}
                value={values.gender}
                variant="outlined"
              >
                {gender.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ mt: 3 }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
        </>
    )
}


const age = [
  {
    value: '0',
    label: '0 ~ 19'
  },
  {
    value: '1',
    label: '20 ~ 29'
  },
  {
    value: '2',
    label: '30 ~ 39'
  },
  {
    value: '3',
    label: '40 ~ 49'
  },
  {
    value: '4',
    label: '50 ~ 59'
  },
  {
    value: '5',
    label: '60 ~ 69'
  },
  {
    value: '6',
    label: '70 ~'
  }
]


const gender = [
  {
    value: '0',
    label: 'male'
  },
  {
    value: '1',
    label: 'female'
  },
  {
    value: '2',
    label: 'other'
  }
]

