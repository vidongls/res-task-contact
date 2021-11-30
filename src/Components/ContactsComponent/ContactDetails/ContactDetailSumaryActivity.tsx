import React, { useEffect } from 'react'
import {
  Card,
  DatePicker,
  Table,
  Typography,
  Steps,
  Timeline,
  Tag,
  Row,
  Col,
} from 'antd'

interface Props {}
interface IDataTimeLine {
  time: string
  title: string
}
const ContactDetailSumaryActivity = (props: Props) => {
  const data: IDataTimeLine[] = []

  for (let index = 0; index < 30; index++) {
    data.push({
      time: `18:23 29/11/2021${index}`,
      title: `Ads m-${index}`,
    })
  }

  return (
    <>
      <Card
        title={'Activities'}
        bordered={false}
        // style={{ marginBottom: '30px' }}
        className="details-sumary-activity"
      >
        <Timeline mode="left">
          {data &&
            data.map((item, index) => (
              <Timeline.Item
                className="details-sumary-activity-timeline"
                key={index}
                label={
                  <Col span={5}>
                    <span className="details-sumary-activity-time">
                      {item.time}
                    </span>
                  </Col>
                }
              >
                <Col span={19}>
                  <Tag color="#27ae60" style={{ borderRadius: '4px' }}>
                    Agree
                  </Tag>
                </Col>
                Ads : {item.title}
              </Timeline.Item>
            ))}
        </Timeline>
      </Card>
    </>
  )
}

export default ContactDetailSumaryActivity
