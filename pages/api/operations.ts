

import { PrismaClient } from '@prisma/client'
import { NextApiResponse, NextApiRequest } from 'next'

const prisma = new PrismaClient({ log: ['query', 'info'] })



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const users = await prisma.user.findMany({
        include: { operations: true }
    })
    res.status(200).json(users)
}