import { Table } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

export function AssetRedirect(props) {
    const navigate = useNavigate();
    alert("clicked!" + props.record);
    navigate(props.record);
}