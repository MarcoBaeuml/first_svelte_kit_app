import type { PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client';
import type { Actions } from './$types';

export const load = (async ({ params }) => {
  const prisma = new PrismaClient();
  const res = await prisma.article.findMany();

  return { res };
}) satisfies PageServerLoad;

export const actions = {
  create: async ({ cookies, request }) => {
    const data = await request.formData();
    const title: any = data.get('title');
    const content: any = data.get('content');
    const prisma = new PrismaClient();

    // const user = await db.getUser(email);
    // cookies.set('sessionid', await db.createSession(user));
    await prisma.article.create({
      data: {
        title,
        content,
      },
    });
    return { success: true };
  },
  delete: async ({ cookies, request }) => {
    const data = await request.formData();
    const id: number = Number(data.get('id'));
    const prisma = new PrismaClient();

    // const user = await db.getUser(email);
    // cookies.set('sessionid', await db.createSession(user));
    console.log(id);
    await prisma.article.delete({
      where: { id: id },
    });
    return { success: true };
  },
} satisfies Actions;
