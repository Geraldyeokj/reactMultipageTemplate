import {Table, Tag } from 'antd';
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
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'Wine ETF',
    quantity: 32,
    price: '$97.32',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'VBux Mutual Fund',
    quantity: 107,
    price: '$419.99',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Post-Renaissance Technologies',
    quantity: 107,
    price: '$1.99',
    tags: ['loser'],
  },
  {
    key: '4',
    name: 'S&P -500',
    quantity: 107,
    price: '$0.99',
    tags: ['loser'],
  },
];
const TokenTable = () => <Table columns={columns} dataSource={data} />;
export default TokenTable;