import { Button, Input, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { isOTPValid } from '../../util/Authentication/isOTPValid';
import { assetsLink } from '../../util/internalLinks';
import { twoFactorAuthLink } from "../../util/internalLinks";
import { useState } from 'react';

const OneTimePassword = () => {
  const navigate = useNavigate();
  const [enteredOTP, setEnteredOTP] = useState("")
  function checkOTP(navigate, enteredOTP) {
    console.log("entered OTP", enteredOTP)
    const valid = isOTPValid(enteredOTP);
    if (valid) {
      navigate(assetsLink,  { 
				state: { 
					notificationMessage : "Log In Successful",
					notificationType : "success",
					notificationPresent : true,
				}
			});
    } else {
      navigate(twoFactorAuthLink,  { 
				state: { 
					notificationMessage : "Incorrect OTP. Please Try Again.",
					notificationType : "error",
					notificationPresent : true,
				}
			});
    }

  };

  return (
    <Space direction="vertical" size="middle" className='pb-5'>
      <Space.Compact
        style={{
          width: '100%',
        }}
      >
        <Input placeholder="Your OTP"onInput={e => setEnteredOTP(e.target.value)}/>
        <Button 
          className="bg-blue-600 flex text-base text-center" 
          type="primary"
          onClick={() => {checkOTP(navigate, enteredOTP)}}
        >
          Enter
        </Button>
      </Space.Compact>
    </Space>
  );
};
export default OneTimePassword;