import jwt from 'jsonwebtoken';

const secretKey = 'secret_key';

export const token = (payload: object) => {
    return jwt.sign(payload, secretKey, {expiresIn: '4h'});
}

export const verificarToken = (token: string) => {
    return jwt.verify(token, secretKey);
}

export const tokenDeAutenticacao = (req: any, res: any, next: any) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    
    jwt.verify(token, secretKey, (err: any, user: any) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    })
}