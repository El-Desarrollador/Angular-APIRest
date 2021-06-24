import { Request, Response } from 'express';


import pool from '../database';

class BookController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM games');
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const books = await pool.query('SELECT * FROM Autores WHERE id = ?', [id]);
        console.log(book.length);
        if (games.length > 0) {
            return res.json(book[0]);
        }
        res.status(404).json({ text: "No es posible registrar el libro, se alcanzo el máximo permitido" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO Autores set ?', [req.body]);
        res.json({ message: 'Saved Book' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldbook = req.body;
        await pool.query('UPDATE Autores set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The Autores was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM Autores WHERE id = ?', [id]);
        res.json({ message: "The Autor was deleted" });
    }
}

const gamesController = new GamesController;
export default gamesController;