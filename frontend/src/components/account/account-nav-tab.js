import * as React from 'react';
import { AppBar, Box, Tab, Tabs } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AccountLoginForm } from './account-login-form';
import { AccountRegisterForm } from './account-register-form';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

return <Box {...other}>{value === index && <Box p={2}>{children}</Box>}</Box>;
}

function LinkTab(props) {

  console.log(props.url)
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export function AccountNavTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };


  return (
    <>
      <AppBar position="static" sx={{ width: '100%', my: 3, bgcolor: 'background.paper', backgroundColor: 'rgba(0,0,0,0.0)' }}>
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <LinkTab label="Sign In" url="/account/signin" />
          <LinkTab label="Register" url="/account/register" />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <AccountLoginForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AccountRegisterForm />
      </TabPanel>
    </>
  );
}





// import * as React from 'react';
// import { AppBar, Box, Tab, Tabs } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { AccountLoginForm } from './account-login-form';
// import { AccountRegisterForm } from './account-register-form';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

// return <Box {...other}>{value === index && <Box p={2}>{children}</Box>}</Box>;
// }

// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       component={Link} to={props.url}
//       onClick={event => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

// export function AccountNavTab() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <>
//       <AppBar position="static" sx={{ width: '100%', my: 3, bgcolor: 'background.paper', backgroundColor: 'rgba(0,0,0,0.0)' }}>
//         <Tabs variant="fullWidth" value={value} onChange={handleChange}>
//           <LinkTab label="Sign In" url="/account/signin" />
//           <LinkTab label="Register" url="/account/register" />
//         </Tabs>
//       </AppBar>

//       <TabPanel value={value} index={0}>
//         <AccountLoginForm />
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         <AccountRegisterForm />
//       </TabPanel>
//     </>
//   );
// }
