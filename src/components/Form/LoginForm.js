import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { assetsLink } from "../../util/internalLinks";


function onFinish (values) {
    //INSERT API LOG IN AUTHENTICATION CALL
    
    if (values.orgID === "geraldyeo") {
        console.log('Success:', values);
        return true;
    } else {
        onFinishFailed("Incorrect Log In Information.");
        return false
    }

};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function LoginForm() {

    const [redirectLanding, setRedirectLanding] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (redirectLanding) {
            navigate(assetsLink);
        };
    });
    
    return (
        <Form 
            className='flex flex-col justify-center sm:w-1/2 md:w-9/12 w-1/2 pt-10'
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
            onFinish={(val) => {
                    if (onFinish(val)) {
                        setRedirectLanding(true);
                    }
                }
            }
            onFinishFailed={onFinishFailed}
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