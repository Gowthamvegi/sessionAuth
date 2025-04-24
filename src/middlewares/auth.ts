
import { Request, Response, NextFunction } from 'express';

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (req.session.user) {
        return next();
    }
    return res.status(401).json({ success: false, message: 'Unauthorized' });
};

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (req.session.user?.role === 'admin') {
        return next();
    }
    return res.status(403).json({ success: false, message: 'Forbidden: Admins only' });
};
