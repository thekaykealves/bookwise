import { prisma } from '@/src/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const ratings = await prisma.rating.findMany({
    orderBy: {
      rate: 'desc',
    },
    take: 4,
  })

  const books = await prisma.book.findMany({})

  return res.json({ ratings, books })
}
