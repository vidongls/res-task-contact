import React, { useState, useEffect } from 'react'
import {
  Row,
  Col,
  Button,
  Form,
  Input,
  Select,
  DatePicker,
  InputNumber,
  Cascader,
  Layout,
} from 'antd'
import {
  SearchOutlined,
  SettingOutlined,
  UpOutlined,
  DownOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { Checkbox, Divider } from 'antd'

const plainOptions = [
  'L1',
  'L1.3',
  'L2.1',
  'L2.2',
  'L2.3',
  'L3.1',
  'L6.1',
  'L7.1',
  'L7.3',
  'L7.10',
  'L8.1',
  'L8.3',
]

function Filter() {
  //
  const CheckboxGroup = Checkbox.Group
  const { Option } = Select
  const { RangePicker } = DatePicker
  const [show, setShow] = useState<boolean>(false)
  const [checkedList, setCheckedList] = useState<string[]>([])
  const [indeterminate, setIndeterminate] = useState<boolean>(true)
  const [checkAll, setCheckAll] = useState<boolean>(false)
  const { Content } = Layout
  const children = []

  for (let i = 10; i < 36; i++) {
    children.push(
      <Option value={i} key={i.toString(36) + i}>
        {i.toString(36) + i}
      </Option>
    )
  }

  const selectBefore = (
    <Select defaultValue="search" style={{ width: 200 }}>
      <Option value="search">Search</Option>
      <Option value="equal">Equal</Option>
      <Option value="greater-than">Great than or equal</Option>
      <Option value="less-than">Less than or equal</Option>
      <Option value="between">Between</Option>
    </Select>
  )
  const handleShow = () => {
    setShow(!show)
  }
  const handleChange = (value: any) => {
    console.log([...value])
  }

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const onChange = (list: any) => {
    setCheckedList(list)
    setIndeterminate(!!list.length && list.length < plainOptions.length)
    setCheckAll(list.length === plainOptions.length)
    console.log(list)
  }

  const onCheckAllChange = (e: any) => {
    setCheckedList(e.target.checked ? plainOptions : [])
    setIndeterminate(false)
    // setCheckedList
    setCheckAll(e.target.checked)
    console.log(plainOptions)
  }

  return (
    <Content className="site-layout-background details-first">
      State:
      <Checkbox
        // indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
        style={{ margin: '0 15px' }}
        className="checkbox-all ant-btn ant-btn-sm"
      >
        {checkAll ? 'Un check' : 'All State'}
      </Checkbox>
      <CheckboxGroup
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      />
      <Divider style={{ borderTop: '1px dashed #ccc' }} />
      <Form
        name="basic"
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        autoComplete="off"
      >
        <Row gutter={[16, 8]}>
          <Col className="gutter-row" span={8}>
            <Form.Item label="Fullname / Phone number" name="username">
              <Input
                placeholder="Fullname / Phone number"
                suffix={<SearchOutlined />}
              />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={8}>
            <Form.Item label="Campaign">
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Select Campaign"
                defaultValue={[]}
                onChange={handleChange}
              >
                {children}
              </Select>
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={8}>
            <Form.Item label="Products">
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Select Products"
                defaultValue={[]}
                onChange={handleChange}
              >
                {children}
              </Select>
            </Form.Item>
          </Col>
          {show && (
            <>
              <Col className="gutter-row" span={8}>
                <Form.Item label="Created at">
                  <RangePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={8}>
                <Form.Item label="Assigned at">
                  <RangePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={8}>
                <Form.Item label="Ad Created By">
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Select Ad Created By"
                    defaultValue={[]}
                    onChange={handleChange}
                  >
                    {children}
                  </Select>
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={8}>
                <Form.Item label="Delivery">
                  <RangePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={8}>
                <Form.Item label="Contact has an appointment at">
                  <RangePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={8}>
                <Form.Item label="Last call">
                  <RangePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={8}>
                <Form.Item label="Status">
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Select status"
                    defaultValue={[]}
                    onChange={handleChange}
                  >
                    {children}
                  </Select>
                </Form.Item>
              </Col>{' '}
              <Col className="gutter-row" span={8}>
                <Form.Item label="Calls">
                  <InputNumber
                    // style={{ width: 150 }}
                    min={0}
                    addonBefore={selectBefore}
                    defaultValue={1}
                  />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={8}>
                <Form.Item label="Assigned to">
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Select assigned to"
                    defaultValue={[]}
                    onChange={handleChange}
                  >
                    {children}
                  </Select>
                </Form.Item>
              </Col>
            </>
          )}
        </Row>
        <Form.Item className="details-filter-gruop-btn">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button>Clear all filters</Button>
          <Link to="#" style={{ fontSize: '14px' }} onClick={handleShow}>
            {show ? (
              <>
                Less <UpOutlined />
              </>
            ) : (
              <>
                More <DownOutlined />
              </>
            )}
          </Link>
        </Form.Item>
      </Form>
    </Content>
  )
}

export default Filter
