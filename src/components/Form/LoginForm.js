import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { twoFactorAuthLink } from "../../util/internalLinks";
import { loginLink } from '../../util/internalLinks';
import verifyLogin from '../../util/Authentication/verifyLogin';


const onFinishFailed = (navigate) => {
    navigate(loginLink, { 
        state: { 
            notificationMessage : "Log In Details Incorrect",
            notificationType : "error",
            notificationPresent : true,
        }
    });
};

function LoginForm() {

    const navigate = useNavigate();

    function onFinish (navigate, loginInfo) {
        //INSERT API LOG IN AUTHENTICATION CALL
        const valid = verifyLogin(loginInfo);
        
        if (valid) {
            navigate(twoFactorAuthLink, { 
				state: { 
					notificationMessage : "Log In Details Correct",
					notificationType : "success",
					notificationPresent : true,
				}
			});
        } else {
            onFinishFailed(navigate);
            return false
        }
    
    };
    
    return (
        <Form 
            className='flex flex-col justify-center sm:w-9/12 md:w-9/12 w-1/2 pt-10'
            name="basic"
            labelCol={{
            span: 5,
            }}
            wrapperCol={{
            span: 0,
            }}
            style={{
            maxWidth: 600,
            }}
            initialValues={{
            remember: true,
            }}
            onFinish={() => {onFinish(navigate)}}
            onFinishFailed={() => onFinishFailed(navigate)}
            autoComplete="off"
        >
            <Form.Item
            label="Org ID"
            name="orgID"
            rules={[
                {
                required: true,
                message: 'Please input your Organization ID!',
                },
            ]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="User ID"
            name="userID"
            rules={[
                {
                required: true,
                message: 'Please input your User ID!',
                },
            ]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Password"
            name="password"
            rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
            ]}
            >
            <Input.Password />
            </Form.Item>

            <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
                offset: 5,
                span: 10,
            }}
            >
            <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
            wrapperCol={{
                offset: 5,
                span: 10,
            }}
            >
            <Button className="bg-blue-600" type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
        </Form>
    );
};
export default LoginForm;