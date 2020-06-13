require('dotenv').config();
const superaent=require('superagent');
const users=require('../models/users-model.js');

const tokenServerUri='https://github.com/login/oauth/access_token';
const remoteAPI = 'https://api.github.com/user';
const CLIENT_ID=process.env.CLIENT_ID;
const CLIENT_SECRET=process.env.CLIENT_SECRET;
const API_SERVER=process.env.API_SERVER;

module.exports=async(req,res,next)=>{
  try{
    const code=req.query.code;
    console.log('cooode',code);
    const token=await getToken(code);
    console.log('token',token);
    const usrtInfo=await getUserInfo(token);
    console.log('user info',usrtInfo);
    const [user,tokendata]=await getUser(usrtInfo);
    req.user=user;
    req.tokendata=tokendata;
    next();
  }
  catch(err){console.log(err.message);}
};

async function getToken(code) {
  const token=await superaent.post(tokenServerUri).set({
    code:code,
    client_id:CLIENT_ID,
    client_secret:CLIENT_SECRET,
    redirect_uri:API_SERVER,
    grant_type:'authorization_code',
  });
  return token.body.access_token;
}
async function getUserInfo(token){
  const userRes=superaent.post(remoteAPI)
    .set('Authorization', `token ${token}`)
    .set('user-agent', 'express-app');
  const user=(await userRes).body;
  return user;
}
async function getUser(userInfo) {
  const userRecourd={
    username:userInfo.login,
    pasword:'anything',
  };
  const user=await users.save(userRecourd);
  const token=users.generateToken(user);
  return [user,token];
}