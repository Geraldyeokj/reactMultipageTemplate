import { Table } from 'antd';
const columns = [
{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
},
{
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
},
{
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
}
];
const data = [
{
    key: '1',
    name: 'Wine ETF',
    quantity: 32,
    price: '$97.32',
},
{
    key: '2',
    name: 'VBux Mutual Fund',
    quantity: 107,
    price: '$419.99',
},
{
    key: '3',
    name: 'Post-Renaissance Technologies',
    quantity: 107,
    price: '$1.99',
},
{
    key: '4',
    name: 'S&P -500',
    quantity: 107,
    price: '$0.99',
},
];
const TokenTable2 = (w_size) => (
  <Table
    columns={columns}
    dataSource={data}
    scroll={w_size}
  />
);
export default TokenTable2;