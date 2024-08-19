import { Response, NextFunction } from "express";

export const administrador = (req: any, res: Response, next: NextFunction) => {
    if(req.user.role !== 'admin') {
        return res.sendStatus(403);
    }
    next();
}

export const autenticado = (req: any, res: Response, next: NextFunction) => {
    if(!req.user) {
        return res.sendStatus(401);
    }
    next();
}

export const perfil = (req: any, res: Response, next: NextFunction) => {
    if (req.user.id !== req.params.id && req.user.role !== 'admin') {
        return res.sendStatus(403);
      }
      next();
}