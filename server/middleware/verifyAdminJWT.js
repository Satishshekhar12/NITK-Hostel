import jwt from 'jsonwebtoken';

const verifyAdminJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(403);
	//return res.sendStatus(401);
    console.log(authHeader);
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            // if token expired, return 403
            if (err)
                return res.sendStatus(403);
            req.adminInfo = decoded;
            return next();
        }
    );
}

export default verifyAdminJWT;