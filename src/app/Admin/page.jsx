import AdminLayout from '@/components/layouts/AdminLayout/AdminLayout'
import Box from '@/components/template/admin/Box/Box'
import React from 'react'

function Admin() {
  return (
    <AdminLayout>
        <div className="flex items-center gap-6  mt-8">
            <Box title='تعداد کل در خواست ها' number="12"/>
            <Box title='تعداد پروژه ها' number="12"/>
            <Box title='درخواست های امروز' number="12"/>
        </div>
    </AdminLayout>
  )
}

export default Admin