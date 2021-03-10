import React from 'react'
import {EuiInMemoryTable} from '@elastic/eui'

const PastOrdersGrid = ({orderList}) => {
    if (!orderList.length) return null;

    const renderCell = (data,column) => {
        switch (column){
            case 'ingredients':
                const ingredients = Object.keys(data).map(ingredient => {
                    return <li key={ingredient}>{ingredient + ': ' + data[ingredient]}</li>
                })
                return <ul>{ingredients}</ul>
            case 'deliveryTime':
                return data.local().format('YY-MM-DD HH:mm')
            case 'changeRequired':
                return data ? 'Yes' : 'No'
            default:
                return data
        }
    }

    const columns = [
        {
            field:'address',
            name:'Address',
            sortable:true,
            render:(data) => renderCell(data,'address')
        },
        {
            field:'zipCode',
            name:'Zip Code',
            sortable:true,
            render:(data) => renderCell(data,'zipCode')
        },
        {
            field:'name',
            name:'Name',
            sortable:true,
            render:(data) => renderCell(data,'name')
        },
        {
            field:'phoneNumber',
            name:'Phone Number',
            sortable:true,
            render:(data) => renderCell(data,'phoneNumber')
        },
        {
            field:'email',
            name:'Email',
            sortable:true,
            render:(data) => renderCell(data,'email')
        },
        {
            field:'ingredients',
            name:'Ingredients',
            sortable:false,
            render:(data) => renderCell(data,'ingredients')
        },
        {
            field:'changeRequired',
            name:'Change Required',
            sortable:false,
            render:(data) => renderCell(data,'changeRequired')
        },
        {
            field:'deliveryTime',
            name:'Delivery Time',
            sortable:true,
            render:(data) => renderCell(data,'deliveryTime')
        },
    ]

    const sorting = {
        sort: {
            field: 'deliveryTime',
            direction: 'asc'
        }
    }

    return(
        <EuiInMemoryTable 
            columns={columns}
            items={orderList}
            pagination={true}
            sorting={sorting}
        />
    )
}

export default PastOrdersGrid