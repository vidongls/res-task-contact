import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Screen/Dashboard/Dasboard'
import Contacts from './Screen/Contacts'
import ContactsDetail from './Components/ContactsComponent/ContactsDetail'
function RouterNavigation() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route
          path="/contacts/detailsContact/:contactID"
          element={<ContactsDetail />}
        />
        {/* <Route path="/recovery-password" element={<RecoveryPassword />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  )
}

export default RouterNavigation
