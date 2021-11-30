import React, { useState } from 'react'
import './App.scss'
import { Layout, Menu, Breadcrumb, Dropdown } from 'antd'
import {
  DashboardOutlined,
  MenuFoldOutlined,
  IdcardOutlined,
  SkinOutlined,
  SolutionOutlined,
  NotificationOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  LineChartOutlined,
  ShopOutlined,
  SettingOutlined,
  GlobalOutlined,
  UserOutlined,
} from '@ant-design/icons'
import logo from './resources/images/logo.png'
import logo2 from './resources/images/logo-small.png'
import { Link } from 'react-router-dom'
import RouterNavigation from './Routes'

function App() {
  const { Header, Sider } = Layout
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const toggle = () => {
    setCollapsed(!collapsed)
  }
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">VietNam</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.antgroup.com">English</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a href="https://www.antgroup.com">Indonesia</a>
      </Menu.Item>
      <Menu.Item key="4">
        <a href="https://www.antgroup.com">Thailand</a>
      </Menu.Item>
    </Menu>
  )
  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <img
              className={collapsed ? 'img-colapsed' : 'img-uncolapsed'}
              src={collapsed ? logo2 : logo}
              alt=""
            />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              <Link to="/"> Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<IdcardOutlined />}>
              <Link to="/contacts"> Contacts</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<IdcardOutlined />}>
              All contacts
            </Menu.Item>
            <Menu.Item key="4" icon={<IdcardOutlined />}>
              Return lead
            </Menu.Item>
            <Menu.Item key="5" icon={<IdcardOutlined />}>
              Telesale
            </Menu.Item>
            <Menu.Item key="6" icon={<SkinOutlined />}>
              Warehouse
            </Menu.Item>
            <Menu.Item key="7" icon={<SolutionOutlined />}>
              Orders
            </Menu.Item>
            <Menu.Item key="8" icon={<SolutionOutlined />}>
              All Orders
            </Menu.Item>
            <Menu.Item key="9" icon={<DashboardOutlined />}>
              Product
            </Menu.Item>
            <Menu.Item key="10" icon={<NotificationOutlined />}>
              Campaign
            </Menu.Item>
            <Menu.Item key="11" icon={<TeamOutlined />}>
              Groups
            </Menu.Item>
            <Menu.Item key="12" icon={<LineChartOutlined />}>
              Statistic
            </Menu.Item>
            <Menu.Item key="13" icon={<ShopOutlined />}>
              Vendor
            </Menu.Item>
            <Menu.Item key="14" icon={<SettingOutlined />}>
              Setting
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{ padding: '0 30px' }}
          >
            {collapsed ? (
              <MenuUnfoldOutlined className="trigger" onClick={toggle} />
            ) : (
              <MenuFoldOutlined className="trigger" onClick={toggle} />
            )}
            <div className="header-right">
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key="0">
                      <a href="https://www.antgroup.com">Logout</a>
                    </Menu.Item>
                  </Menu>
                }
                trigger={['click']}
                placement="bottomCenter"
              >
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <UserOutlined />
                </a>
              </Dropdown>
              <Dropdown
                overlay={menu}
                trigger={['click']}
                placement="bottomCenter"
              >
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <GlobalOutlined />
                </a>
              </Dropdown>
            </div>
          </Header>
          <div className="content">
            <RouterNavigation />
          </div>
        </Layout>
      </Layout>
    </>
  )
}

export default App
