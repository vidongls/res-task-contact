import React from 'react'
import { Card, DatePicker, Table, Typography, Steps } from 'antd'
import { ColumnsType } from 'antd/es/table'
const { Text } = Typography
const { Step } = Steps

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
    title: 'Properties',
    dataIndex: 'properties',
  },
  {
    title: 'Unit price (PHP)',
    dataIndex: 'unitPrice',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
  },
  {
    title: 'Price (PHP)',
    dataIndex: 'price',
  },
]

const data: TableData[] = [
  {
    key: '1',
    properties: 'Xanh',
    unitPrice: 1.0,
    quantity: 2.0,
    price: 2.0,
  },
  {
    key: '2',
    properties: 'Đỏ',
    unitPrice: 1.0,
    quantity: 1.0,
    price: 1.0,
  },
]

const ContactDetailSumaryInvoice = (props: Props) => {
  return (
    <>
      <Card title={'Invoice'} bordered={false}>
        <div className="details-info-keyfield-row">
          <div className="label-name"> Order code: </div>
          <span className="details-info-keyfield-row-blue">
            8505-18919-1096077
          </span>
        </div>
        <div className="details-info-keyfield-row">
          <div className="label-name"> Phone number:</div>
          <span>NEW</span>
        </div>
        <div className="details-info-keyfield-row">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered={false}
            style={{ width: '100%' }}
            summary={(pageData) => {
              let totalQuantity = 0
              let totalPrice = 0

              pageData.forEach(({ quantity, price }) => {
                totalQuantity += quantity
                totalPrice += price
              })

              return (
                <>
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={1}></Table.Summary.Cell>
                    <Table.Summary.Cell index={2}>Total</Table.Summary.Cell>
                    <Table.Summary.Cell index={3}>
                      <Text>{totalQuantity}.00</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={4}>
                      <Text className="details-info-keyfield-row-blue">
                        {totalPrice}.00
                      </Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </>
              )
            }}
          />
        </div>
      </Card>
    </>
  )
}

export default ContactDetailSumaryInvoice
