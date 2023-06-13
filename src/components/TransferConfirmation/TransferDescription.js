import { Descriptions} from 'antd';
const TransferDescription = (props) => (
  <div className='py-5'>
    <Descriptions
      bordered
      column={{
        xxl: 1,
        xl: 1,
        lg: 1,
        md: 1,
        sm: 1,
        xs: 1,
      }}
    >
      <Descriptions.Item label="Your Address">{props?.userAddress}</Descriptions.Item>
      <Descriptions.Item label="Recipient Address">{props?.recipientAddress}</Descriptions.Item>
      <Descriptions.Item label="Amount">{props?.amountToSend}</Descriptions.Item>
    </Descriptions>
  </div>
);
export default TransferDescription;