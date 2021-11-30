import React, { useState } from 'react'
import { Layout } from 'antd'
import Filter from './components/Filter'
import List from './components/List'
import { ModalHeader } from './components/ModalHeader'

export default function Contacts() {
  return (
    <>
      <>
        <ModalHeader />
      </>
      <div className="details">
        <Filter />

        <>
          <List />
        </>
      </div>
    </>
  )
}
