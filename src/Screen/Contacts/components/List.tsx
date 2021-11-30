import React, { useState } from 'react'
import { Table, Space, Button, Dropdown, Menu, Breadcrumb, Layout } from 'antd'

import { ColumnsType } from 'antd/es/table'
import { SettingOutlined, CloudUploadOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
interface User {
  key: string
  name: string
  phone: number
  campaign: string
  assignedTo?: string
  assignedAt?: string
}

const columns: ColumnsType<User> = [
  {
    title: 'Fullname',
    dataIndex: 'name',
    key: 'name',
    filterMultiple: false,
    onFilter: (value: any, record: any) => record.name.indexOf(value) === 0,
    sorter: (a: any, b: any) => a.name.length - b.name.length,
    sortDirections: ['descend', 'ascend'],
    render: (value: any, record: User, index: number) => (
      <div key={record['key']}>
        <span className="pointer"></span>
        <Link to={`/contacts/detailsContact/${record['key']}`}>{value}</Link>
      </div>
    ),
  },
  {
    title: 'Campaign',
    dataIndex: 'campaign',
  },
  {
    title: 'Phone number',
    dataIndex: 'phone',
    filterMultiple: false,
  },
  {
    title: 'Assigned to',
    dataIndex: 'assignedTo',
    filterMultiple: false,
  },
  {
    title: 'Assigned at',
    dataIndex: 'assignedAt',
    filterMultiple: false,
  },
]

const data: User[] = []

const menu = (
  <Menu>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
)

for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edward King ${i}`,
    phone: 32,
    campaign: `London, Park Lane no. ${i}`,
    assignedTo: 'Unassign	',
  })
}
function onChange(pagination: any, filters: any, sorter: any, extra: any) {
  console.log('params', pagination, filters, sorter, extra)
}

function List({}) {
  const { Content } = Layout
  return (
    <Content className="site-layout-background details-first">
      <Space
        style={{
          marginBottom: 16,
          padding: '8px',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <span style={{ fontSize: '14px' }}>Page 1/1 (6)</span>
        <div className="flex a-center" style={{ gap: '5px' }}>
          <Button type="primary">
            <CloudUploadOutlined />
            Export order
          </Button>
          <Button type="primary">
            <CloudUploadOutlined />
            Export contact
          </Button>
          <Button type="primary">Assign contact</Button>
          <SettingOutlined />
        </div>
      </Space>
      <Table
        rowSelection={{ type: 'checkbox' }}
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10 }}
        // onChange={onChange}
      />
    </Content>
  )
}

export default List
