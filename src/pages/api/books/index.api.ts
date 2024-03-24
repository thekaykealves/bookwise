import { prisma } from '@/src/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const books = await prisma.book.findMany()

  if (!books) {
    console.log('Erro ao trazer books')
    return
  }

  return res.status(200).json({ books })
}
