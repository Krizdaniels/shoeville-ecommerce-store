const { verify } = require('jsonwebtoken');
import { findOne } from '../models/user'
const auth = async(req, res, next) => {
try {
  const token = req.header('Authorization').replace('Bearer ', '')
  const decoded = verify(token, process.env.JWT_SECRET)
  const user = await findOne({ _id: decoded._id, 'tokens.token':token })
if(!user) {
throw new Error
}
  req.token = token
  req.user = user
next()
} catch (error) {
res.status(401).send({error: "Authentication required"})
 }
}
export default auth
