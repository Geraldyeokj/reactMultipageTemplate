import { Table } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { AssetRedirect } from './AssetRedirect';


const columns = [
{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
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
    link: "UID_1",
},
{
    key: '2',
    name: 'VBux Mutual Fund',
    quantity: 107,
    price: '$419.99',
    link: "UID_2",
},
{
    key: '3',
    name: 'Post-Renaissance Technologies',
    quantity: 107,
    price: '$1.99',
    link: "UID_3",
},
{
    key: '4',
    name: 'S&P -500',
    quantity: 107,
    price: '$0.99',
    link: "UID_4",
},
];


const TokenTable2 = (w_size) => {
    const navigate = useNavigate();
    console.log("test321");
    return (<Table
        columns={columns}
        dataSource={data}
        scroll={w_size}
        onRow={(record, rowIndex) => {
            return {
                onClick: () => {
                    alert("clicked!" + record.link);
                    navigate(record.link);
                }, // click row
            };
        }}
    />);
    };
export default TokenTable2;