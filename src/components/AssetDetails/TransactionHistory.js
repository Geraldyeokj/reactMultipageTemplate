import { Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import getClientTransactionsByID from '../../util/getClientTransactionsByID';
import { getAssetInfoByUID } from '../../util/getAssetInfoByUID';
import { clientIDSimulator } from '../../util/Authentication/clientIdSimulator';


const columns = [
{
    title: 'Index',
    dataIndex: 'index',
    key: 'index',
    fixed: 'left',
},
{
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
},
{
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
},
{
    title: 'Recipient Address',
    dataIndex: 'recipientAddress',
    key: 'recipentAddress',
}
];


const TransactionHistory = (props) => {
    const clientID = clientIDSimulator()
    var holdings = getClientTransactionsByID(clientID)

    console.log("transction hist", props)

    const targetAsset = props.targetAsset;

    holdings = holdings.filter((ele) => ele.assetId === targetAsset);
    const dataArray = holdings.map((ele, ind) => {
        console.log("map test", ele.id,  getAssetInfoByUID(ele.id))
        const entry = {
            index : ind + 1,
            date : ele.date,
            quantity : ele.quantity,
            recipientAddress: ele.recipient,
            link: ele.assetId,
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
                    navigate("../../assetTransactionDetails/" + record.link);
                }, // click row
            };
        }}
    />);
    };
export default TransactionHistory;