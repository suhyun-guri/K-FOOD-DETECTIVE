// /signin 페이지. AccountNavTab 컴포넌트에 Login과 Register가 들어있다.

import { AccountBackBtn } from '../components/account/account-back-btn';
import { AccountNavTab } from '../components/account/account-nav-tab';
import { AccountBackground } from '../components/account/account-background';
import { AccountFormWrapper } from '../components/account/account-form-wrapper';

export default function SignInPage() {
  
  return (
    <>
      <AccountBackground />
      <AccountBackBtn />

      <AccountFormWrapper>
        <AccountNavTab/>
      </AccountFormWrapper>

    </>
  )
}
