import { Button, Input, Space } from 'antd';
const WalletAddress = () => (
  <Space direction="vertical" size="middle" className='pb-5'>
    <Space.Compact
      style={{
        width: '100%',
      }}
    >
      <Input defaultValue="Your Wallet Address" />
      <Button className="bg-blue-600 flex text-base text-center" type="primary">Copy</Button>
    </Space.Compact>
  </Space>
);
export default WalletAddress;