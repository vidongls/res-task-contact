import React from 'react'
import { Card, DatePicker, Table, Typography, Steps, Layout } from 'antd'
import { ColumnsType } from 'antd/es/table'

interface Props {}
interface TableData {
  key: string
  properties: string
  unitPrice: number
  quantity: number
  price: number
}

const columns: ColumnsType<TableData> = [
  {
    title: 'Fullname',
    dataIndex: 'fullname',
  },
  {
    title: 'Phone number',
    dataIndex: 'phone',
  },
  {
    title: 'Note',
    dataIndex: 'note',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Created at',
    dataIndex: '	CreatedAt',
  },
]

const data: TableData[] = []
const ContactDetailReturnLead = (props: Props) => {
  const { Text } = Typography
  const { Step } = Steps
  const { Content } = Layout
  return (
    <>
      <Content className="details-info-content">
        <Card>
          {' '}
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered={false}
            style={{ width: '100%' }}
          />
        </Card>
      </Content>
    </>
  )
}

export default ContactDetailReturnLead
