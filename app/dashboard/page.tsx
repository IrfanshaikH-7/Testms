import { DataTable } from '../students/data-table'
import { columns } from '../students/columns'
import { db } from '@/lib/db'
import { setUpUser } from '@/lib/setUp'

const page = async () => {

  const profile = await setUpUser();
  // console.log(profile.roletag)
  if (profile.roletag === 'ADMIN') {



    const studentsData = await db.student.findMany();
    const employees = await db.profile.findMany({
      where: {
        roletag: 'GUEST'
      }
    })


    return (
      studentsData && (
        <div>
          <DataTable
            columns={columns}
            data={studentsData}
            employees={employees}
          />
        </div>
      )

    )
  }else {

    return (
      <div>
        You are not a admin
      </div>
    )
  }
}

export default page
