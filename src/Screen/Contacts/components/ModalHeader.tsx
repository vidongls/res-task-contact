import React, { useState } from 'react'
import {
  Layout,
  Button,
  Modal,
  Form,
  Input,
  Breadcrumb,
  Row,
  Col,
  Cascader,
  Upload,
} from 'antd'
import { CloudUploadOutlined, UploadOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
interface Props {}

export const ModalHeader = (props: Props) => {
  const [form] = Form.useForm()
  const { TextArea } = Input
  const { Content } = Layout

  const [isModalVisibleUpload, setIsModalVisibleUpload] =
    useState<boolean>(false)
  const [isModalVisibleContact, setIsModalVisibleContact] =
    useState<boolean>(false)

  const showModalUpload = () => {
    setIsModalVisibleUpload(true)
  }

  const handleOkUpload = () => {
    // setIsModalVisibleUpload(false)
  }

  const handleCancelUpload = () => {
    setIsModalVisibleUpload(false)
  }

  const showModalContact = () => {
    setIsModalVisibleContact(true)
  }

  const handleOkContact = (value: any) => {
    // setIsModalVisibleContact(false)
    console.log(value)
  }

  const handleCancelContact = () => {
    setIsModalVisibleContact(false)
  }
  const handleDownload = (file: any) => {
    console.log(file)
    // write how you want to download
  }
  return (
    <>
      <Row
        style={{
          backgroundColor: '#fff',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Col span={8}>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Leads</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col span={8} offset={8}>
          <div style={{ float: 'right', paddingRight: 30 }}>
            <Button type="primary" onClick={showModalContact}>
              Add Contact
            </Button>
            <Button type="primary" onClick={showModalUpload}>
              <CloudUploadOutlined />
            </Button>
          </div>
          <Modal
            title="Import Contact"
            visible={isModalVisibleUpload}
            onOk={handleOkUpload}
            onCancel={handleCancelUpload}
            footer={[
              <Button onClick={handleCancelUpload} key="back">
                Cancel
              </Button>,
              <Button type="primary" onClick={handleOkUpload}>
                Save
              </Button>,
            ]}
          >
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              accept=" .csv"
              // onPreview={handleDownload}
            >
              <Button icon={<UploadOutlined />}>
                Choose file *.csv from your computer
              </Button>
            </Upload>
            <Link
              to={'#'}
              onClick={handleDownload}
              style={{ marginBottom: '32px', display: 'block' }}
            >
              Download csv template
            </Link>
            <Cascader
              style={{ marginBottom: '32px', width: '100%' }}
              options={[]}
              placeholder="Select ads"
            />
          </Modal>
          <Modal
            title="Add Contact"
            visible={isModalVisibleContact}
            onCancel={handleCancelContact}
            footer={[
              <Button onClick={handleCancelContact} key="back">
                Cancel
              </Button>,
              <Button
                onClick={form.submit}
                key="submit"
                type="primary"
                form="contactForm"
              >
                Save
              </Button>,
            ]}
          >
            <Form
              form={form}
              layout="vertical"
              initialValues={{}}
              onFinish={handleOkContact}
              id="contactForm"
              // onValuesChange={}
              // requiredMark={}
            >
              <Form.Item
                label="Select Campaign"
                name={'campaign'}
                rules={[{ required: true, message: "Can't empty" }]}
              >
                {/* <Input placeholder="input placeholder" /> */}
                <Cascader options={[]} placeholder="Select Campaign" />
              </Form.Item>
              <Form.Item
                name={'fullname'}
                label="Fullname"
                rules={[{ required: true, message: "Can't empty" }]}
              >
                <Input placeholder="Fullname" />
              </Form.Item>
              <Form.Item
                name={'phone'}
                label="Phone number"
                rules={[{ required: true, message: "Can't empty" }]}
              >
                <Input placeholder="Phone number" />
              </Form.Item>
              <Form.Item name={'note'} label="Note">
                <TextArea rows={2} placeholder="Note" />
              </Form.Item>
            </Form>
          </Modal>
        </Col>
      </Row>
    </>
  )
}
