import { Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getClientHoldingsByID } from '../../util/getClientHoldingsByID';
import { getTokenByUID } from '../../util/getTokenByUID';
import { clientIDSimulator } from '../../util/Authentication/clientIdSimulator';


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


const TokenTable3 = (props) => {
    const clientID = clientIDSimulator()
    const holdings = getClientHoldingsByID(clientID, "tokens")
    const dataArray = holdings.map((ele, ind) => {
        console.log("map test", ele.id,  getTokenByUID(ele.id))
        const entry = {
            key : ind,
            name : ele.name,
            quantity : ele.quantity,
            price: "$" + getTokenByUID(ele.id)?.price,
            link: ele.id
        }
        return entry
    })

    const navigate = useNavigate();
    console.log("test321", props, props.w_size);
    return (<Table
        columns={columns}
        dataSource={dataArray}
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
export default TokenTable3;