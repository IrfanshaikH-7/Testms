import { fetchGuests } from '@/lib/ServerActions'
import { db } from '@/lib/db'
import { Profile } from '@prisma/client'
import { create } from 'zustand'

interface ModelStore {
    profiles: Profile[],
    updateEmps: (profile:Profile[]) => void
}

export const useModel = create<ModelStore>((set) => ({
    profiles: [],
        // {
        //     id: '1',
        //     userId: "123",
        //     name: "123",
        //     email: "123",
        //     roletag: "GUEST",
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        // },
    updateEmps: (newProfiles: Profile[]) => set((state) => ({
        profiles:[...newProfiles]
    })),
    // fetchEmps: async () => {
    //     const employees = await db.profile.findMany({
    //         where: {
    //             roletag: 'GUEST'
    //         }
    //     })
    //     set(employees)
    // }
}))