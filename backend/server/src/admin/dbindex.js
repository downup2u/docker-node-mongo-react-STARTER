let db = require('../db/models.js');

let dbs ={
  'about':{
    urlname:'/about',
    schema:db.AboutSchema,
    collectionname:'about',
  },
  'systemconfig':{
    urlname:'/systemconfig',
    schema:db.SystemConfigSchema,
    collectionname:'systemconfig',
  },
  'user':{
    urlname:'/user',
    schema:db.UserSchema,
    collectionname:'user',
  },
  'device':{
    urlname:'/device',
    schema:db.DeviceSchema,
    collectionname:'device',
  },
  'topic':{
    urlname:'/topic',
    schema:db.TopicSchema,
    collectionname:'topic',
  },
  'address':{
    urlname:'/address',
    schema:db.AddressSchema,
    collectionname:'address',
  },
  'comments':{
    urlname:'/comments',
    schema:db.CommentSchema,
    collectionname:'comments',
  },
  'notifymessage':{
    urlname:'/notifymessage',
    schema:db.NotifyMessageSchema,
    collectionname:'notifymessage',
  },
  'banner':{
    urlname:'/banner',
    schema:db.BannerSchema,
    collectionname:'banner',
  },
  'product':{
    urlname:'/product',
    schema:db.ProductSchema,
    collectionname:'product',
  },
  'category':{
    urlname:'/category',
    schema:db.CategorySchema,
    collectionname:'category',
  },
   'order':{
    urlname:'/order',
    schema:db.OrderSchema,
    collectionname:'order',
  },
  'express':{
    urlname:'/express',
    schema:db.ExpressSchema,
    collectionname:'express',
  },
  //  'coupon':{
  //   urlname:'/coupon',
  //   schema:db.CouponSchema,
  //   collectionname:'coupon',
  // },
  'mycoupon':{
    urlname:'/mycoupon',
    schema:db.MyCouponSchema,
    collectionname:'mycoupon',
  },
  'feedback':{
    urlname:'/feedback',
    schema:db.FeedbackSchema,
    collectionname:'feedback',
  },
  'news':{
    urlname:'/news',
    schema:db.NewsSchema,
    collectionname:'news',
  },
  'withdrawcash':{
    urlname:'/withdrawcash',
    schema:db.WithdrawcashapplySchema,
    collectionname:'withdrawcashapply',
  },
   'device':{
    urlname:'/device',
    schema:db.DeviceSchema,
    collectionname:'device',
  },
   'realtimedata':{
    urlname:'/realtimedata',
    schema:db.RealtimedataSchema,
    collectionname:'realtimedata',
  },
};

module.exports= dbs;
