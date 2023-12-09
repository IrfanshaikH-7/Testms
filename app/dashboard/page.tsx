import { DataTable } from '../students/data-table'
import { columns } from '../students/columns'
import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { useEffect } from 'react'

const page = async() => {
  
  const studentsData = await db.student.findMany();

    
  return (
      studentsData && (
        <div>
      <DataTable
      columns={columns}
      data={studentsData}
      />
    </div>
      )
    
  )
}

export default page
