import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { authenticationSimulator } from "../../util/Authentication/authenticationSimulator"
import { transferConfirmationLink } from '../../util/internalLinks';


function onFinish (values) {
    //INSERT API LOG IN AUTHENTICATION CALL
    
    if (authenticationSimulator()) {
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

function AssetTransfer(props) {
    const [userAddress, setUserAddress] = useState(props?.userAddress ?? "")
    const [recipientAddress, setRecipientAddress] = useState(props?.recipientAddress ?? "")
    const [amountToSend, setAmountToSend] = useState(props?.amountToSend ?? "")

    const [redirectLanding, setRedirectLanding] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(userAddress)
        if (redirectLanding) {
            navigate(transferConfirmationLink, {
                state: {
                    userAddress : userAddress,
                    recipientAddress : recipientAddress,
                    amountToSend : amountToSend,
                    assetToSend : props?.assetToSend,
                },
            });
        };
    });
    
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
            label="From"
            name="from"
            rules={[
                {
                required: true,
                message: 'Your Address.',
                },
            ]}
            >
            <Input value={userAddress} onInput={e => setUserAddress(e.target.value)}/>
            </Form.Item>

            <Form.Item
            label="To"
            name="to"
            rules={[
                {
                required: true,
                message: "Recipient's Address.",
                },
            ]}
            >
            <Input value={recipientAddress} onInput={e => setRecipientAddress(e.target.value)}/>
            </Form.Item>

            <Form.Item
            label="Amount"
            name="amount"
            rules={[
                {
                required: true,
                message: "Amount to Transfer.",
                },
            ]}
            >
            <Input value={amountToSend} onInput={e => setAmountToSend(e.target.value)}/>
            </Form.Item>

            <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
                offset: 5,
                span: 0,
            }}
            >
            <Checkbox>I accept the <a className='text-blue-500'>Terms and Conditions</a></Checkbox>
            </Form.Item>

            <Form.Item
            wrapperCol={{
                offset: 5,
                span: 0,
            }}
            >
            <Button className="bg-blue-600" type="primary" htmlType="submit">
                Send
            </Button>
            </Form.Item>
        </Form>
    );
};
export default AssetTransfer;