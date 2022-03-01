import * as React from 'react';
import { AppBar, Box, Tab, Tabs } from '@mui/material';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
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
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function getTabIndex(str) {
  if (!str || str === 'signin') return 0
  return 1
} 

function getTabString(idx) {
  if (idx === 0) return 'signin'
  return 'register'
} 

export function AccountNavTab() {
  const location = useLocation();
  const [value, setValue] = React.useState(getTabIndex(new URLSearchParams(location.search).get('tab')));
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    const tab = searchParams.get('tab');
    const tabIndex = getTabIndex(tab);

    console.log(tab);

    if (tab === null) {
      navigate(`${location.pathname}?tab=signin`, { replace: true })
    } 
    else {
      setValue(tabIndex);
    }
  }, [searchParams])
 

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
    navigate(`${location.pathname}?tab=${getTabString(newValue)}`, { replace: true })
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