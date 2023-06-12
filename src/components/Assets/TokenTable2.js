import { Table } from 'antd';
import { useNavigate } from 'react-router-dom';

const columns = [
{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
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


const TokenTable2 = (props) => {
    const navigate = useNavigate();
    console.log("test321", props, props.w_size);
    return (<Table
        columns={columns}
        dataSource={data}
        scroll={{ x : props.w_size }}
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