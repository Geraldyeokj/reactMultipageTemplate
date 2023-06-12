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
    name: 'NFT A',
    quantity: 32,
    price: '$7.32',
},
{
    key: '2',
    name: 'NFT B',
    quantity: 107,
    price: '$9.99',
},
{
    key: '3',
    name: 'NFT C',
    quantity: 107,
    price: '$3.99',
},
{
    key: '4',
    name: 'NFT D',
    quantity: 107,
    price: '$91.12',
},
];
const NftTable = (w_size) => (
  <Table
    columns={columns}
    dataSource={data}
    scroll={w_size}
  />
);
export default NftTable;