 /**
 * @apiDefine error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
 
 /**
 * @api {post} /user/login 登录
 * @apiGroup User
 * @apiParam {String} username [必填]域账号 
 * @apiParam {String} password [必填]开机密码
 * 
 * @apiDescription 返回用户基本信息，包括权限信息，设置cooike或者session
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          
 *     }
 *
 * @apiUse error
 */

  /**
 * @api {get} /user/info 获取用户信息
 * @apiGroup User
 * 
 *@apiDescription 根据cookie或者session信息返回用户信息，包括权限信息
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          
 *     }
 *
 * @apiUse error
 */

   /**
 * @api {get} /user/list 获取用户列表
 * @apiGroup User
 * 
 *@apiDescription 根据cookie或者session信息返回用户信息，包括权限信息
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          
 *     }
 *
 * @apiUse error
 */