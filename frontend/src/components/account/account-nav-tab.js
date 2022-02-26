import * as React from 'react';
import { AppBar, Box, Tab, Tabs } from '@mui/material';
import { Link } from 'react-router-dom';
import { AccountLoginForm } from './account-login-form';
import { AccountRegisterForm } from './account-register-form';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

return <Box {...other}>{value === index && <Box p={2}>{children}</Box>}</Box>;
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      component={Link} to={props.url}
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

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

// return <Box {...other}>{value === index && <Box p={2}>{children}</Box>}</Box>;
// }

// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       //component={Link} to="/account/register"
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
//       <AppBar position="static" sx={{ width: '100%', bgcolor: 'background.paper', backgroundColor: 'rgba(0,0,0,0.0)' }}>
//         <Tabs variant="fullWidth" value={value} onChange={handleChange}>
//           <LinkTab label="Page One" href="/foo" />
//           <LinkTab label="Page Two" href="/bar" />
//         </Tabs>
//       </AppBar>

//       <TabPanel value={value} index={0}>
//         Page One
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Page Two
//       </TabPanel>
//     </>
//   );
// }






// import * as React from 'react';
// import { Box, Tabs, Tab } from '@mui/material';
// import { Link } from 'react-router-dom';



// export function AccountNavTab() {
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     return (
//         <>
//             <Box sx={{ width: '100%', bgcolor: 'background.paper', backgroundColor: 'rgba(0,0,0,0.0)' }}>
//                 <Tabs
//                     value={value}
//                     onChange={handleChange}
//                     centered
//                     variant='fullWidth'
//                 >

//                     <Tab label="Sign In" sx={{ color: 'lightgrey' }} />
//                     <Tab label="Register" sx={{ color: ' lightgrey' }} />

//                 </Tabs>
//             </Box>
//         </>
//     )
// }