import React from 'react'
import { Breadcrumb, Typography, Row, Col, Tabs, Layout } from 'antd'
import ContactDetailSumaryKeyfield from './ContactDetails/ContactDetailSumaryKeyfield'
import ContactDetailSumaryInvoice from './ContactDetails/ContatcDetailSumaryInvoice'
import ContactDetailSumaryActivity from './ContactDetails/ContactDetailSumaryActivity'
import ContactDetailProductDetail from './ContactDetails/ContactDetailProductDetail'
import ContactDetailStrategy from './ContactDetails/ContactDetailStrategy'
import ContactDetailReturnLead from './ContactDetails/ContactDetailReturnLead'

interface Props {}

const ContactsDetail = (props: Props) => {
  const { TabPane } = Tabs
  const { Content } = Layout

  return (
    <div className="details-contact">
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Leads</Breadcrumb.Item>
        <Breadcrumb.Item>test</Breadcrumb.Item>
      </Breadcrumb>
      <div className="details-info-header-title">
        <Typography.Title level={4}>test title</Typography.Title>
        <Row className="details-info-header-detail-item">
          <Col span={8}>
            Campaign: <span>m28-váy</span>
          </Col>

          <Col span={8}>
            Date <span>19/11/2021</span>
          </Col>
          <Col span={8}>
            Created by: <span>admin</span>
          </Col>
        </Row>
      </div>
      <Tabs defaultActiveKey="1" className="details-info-header-tab">
        <TabPane tab="Sumary" key="1">
          <Row style={{ padding: '10px 30px' }} gutter={[30, 0]}>
            <Col span={12}>
              <ContactDetailSumaryKeyfield />
              <ContactDetailSumaryInvoice />
            </Col>
            <Col span={12}>
              <ContactDetailSumaryActivity />
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Product Detail" key="2">
          <ContactDetailProductDetail />
        </TabPane>
        <TabPane tab="Sale Strategy" key="3">
          <ContactDetailStrategy />
        </TabPane>
        <TabPane tab="Marketing target" key="4">
          <ContactDetailStrategy />
        </TabPane>
        <TabPane tab="FAQ" key="5">
          <ContactDetailProductDetail />
        </TabPane>
        <TabPane tab="Activity histories" key="6">
          <ContactDetailProductDetail />
        </TabPane>
        <TabPane tab="Return lead" key="7">
          <ContactDetailReturnLead />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default ContactsDetail
