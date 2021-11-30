import React from 'react'
import { Row, Col, Card, DatePicker } from 'antd'
interface Props {}

const ContactDetailSumaryKeyfield = (props: Props) => {
  const onChange = (date: any, dateString: string) => {
    // console.log(dateString)
  }
  return (
    <>
      <Card
        title={'Key Field'}
        bordered={false}
        style={{ marginBottom: '30px' }}
      >
        <div className="details-info-keyfield-row">
          <div className="label-name"> Fullname:</div>
          <span>samtest</span>
        </div>
        <div className="details-info-keyfield-row">
          <div className="label-name"> Phone number:</div>
          <span>06789012235</span>
        </div>
        <div className="details-info-keyfield-row">
          <div className="label-name"> Facebook:</div>
          <span className="details-info-keyfield-row-blue">---</span>
        </div>
        <div className="details-info-keyfield-row">
          <div className="label-name"> Ads:</div>
          <span>m28-váy</span>
        </div>
        <div className="details-info-keyfield-row">
          <div className="label-name"> Address:</div>
          <span></span>
        </div>
        <div className="details-info-keyfield-row">
          <div className="label-name"> Last contact on:</div>
          <span>24/11/2021 18:11</span>
        </div>
        <div className="details-info-keyfield-row">
          <div className="label-name"> Delivery:</div>

          <span>
            <DatePicker format={'YYYY/MM/DD'} onChange={onChange} />
          </span>
        </div>
        <div className="details-info-keyfield-row">
          <div className="label-name"> Stage:</div>
          <span className="details-info-keyfield-row-blue"> L7.1 </span>
        </div>
        <div className="details-info-keyfield-row">
          <div className="label-name"> Assigned to:</div>
          <span
            className="details-info-keyfield-row-blue"
            style={{ cursor: 'no-drop' }}
          >
            Unassign
          </span>
        </div>
        <div className="details-info-keyfield-row">
          <div className="label-name"> Assigned at:</div>
          <span>---</span>
        </div>
        <div className="details-info-keyfield-row">
          <div className="label-name"> Assigned by:</div>
          <span></span>
        </div>
        <div className="details-info-keyfield-row">
          <div className="label-name"> Note:</div>

          <span></span>
        </div>
      </Card>
    </>
  )
}

export default ContactDetailSumaryKeyfield
