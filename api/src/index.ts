import express, { Request, Response } from 'express';
import cors from 'cors';
import { prisma } from './prismaClient';
import { tarotCards } from './seed';

const app = express()

const port = 8080

app.use(cors());
app.use(express.json())   

// READ
app.get('/', (req: Request, res: Response) => {
  (async () => {
    try {
      const spreads = await prisma.tarotSpread.findMany()
      return res.send({
          success: true,
          data: spreads
      });
    } catch (error) {
      console.log(error)
      return res.json({
          success: false,
          message: error
      });
    }
  })()})

type TarotCard = typeof tarotCards[number]['name'];

// CREATE
app.post('/api/spread/create', (req: Request, res: Response) => {
  console.log(req.body);
  (async () => {
    try {
      const { name, notes, cards} = req.body;

      const newSpread = await prisma.tarotSpread.create({
        data: {
          name,
          notes,
          cards: {
            create: cards.map((cardName: TarotCard) => ({
              name: cardName,
            })),
          }
        },
        include: {cards: true}
      });

      return res.send({
          success: true,
          data: newSpread
      });
    } catch (error) {
      console.log(error)
      return res.json({
          success: false,
          message: error
      });
    }
  })()})

  // UPDATE
  app.put('/api/spread/:id', (req: Request, res: Response) => {
    console.log(req.body);
    const { id } = req.params;
    (async () => {
      try {
        const { name, notes, cards} = req.body;

        const updateSpread = await prisma.tarotSpread.update({
          where: {
            id: parseInt(id),
          },
          data: {
            name,
            notes,
            cards: {
              create: cards?.map((cardName: TarotCard) => ({
                name: cardName,
              })),
            }
          },
          include: {cards: true}
        })
  
        return res.send({
            success: true,
            data: updateSpread
        });
      } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: error
        });
      }
    })()})

  // DELETE
  app.delete('/api/spread/:id', (req: Request, res: Response) => {
    console.log(req.body);
    const { id } = req.params;
    (async () => {
      try {
        const deleteSpread = await prisma.tarotSpread.delete({
          where: {
            id: parseInt(id)
          },
        })
  
        return res.send({
            success: true,
            data: deleteSpread
        });
      } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: error
        });
      }
    })()})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})