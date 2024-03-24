import { prisma } from '@/src/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const users = await prisma.user.findMany()

  if (!users) {
    console.log('Erro ao trazer books')
    return
  }

  return res.status(200).json({ users })
}
