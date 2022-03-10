import { useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField } from '@mui/material';

export function AccountProfileDetails(props) {
    console.log('Account Profile Details의 props : ', props.data)
    console.log('Account Profile Details의 nationlity : ', props.data.nationality)

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
                value={props.data.username}
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
                value={props.data.age}
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
                label="Nationality"
                name="nationality"
                onChange={handleChange}
                // required
                value={props.data.nationality}
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
                value={props.data.email}
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
                value={props.data.gender}
                variant="outlined"
              />
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