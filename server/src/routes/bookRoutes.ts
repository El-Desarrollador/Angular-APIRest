import express, { Router } from 'express';

import bookController from '../controllers/bookController';

class BookRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', bookController.list);
        this.router.get('/:id', bookController.getOne);
        this.router.post('/', bookController.create);
        this.router.put('/:id', bookController.update);
        this.router.delete('/:id', bookController.delete);
    }

}

export default new bookRoutes().router;

