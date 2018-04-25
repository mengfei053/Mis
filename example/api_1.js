
/**
 * @apiDefine pagination
 * @apiParam {Number} pageSize=20 [可选]页面条数
 * @apiParam {Number} pageNumber=0 [可选]当前页面
 */


/**
 * @apiDefine listSuccess
 * @apiSuccess {String} id 唯一标识
* @apiSuccess {String} name 表名
* @apiSuccess {Number} total 总条数
* @apiSuccess {Number} length 返回个数
 */





/**
 * @apiDefine error
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "code": 404,
 *        "msg":''
 *     }
 */

   /**
 * @api {post} /task/deleteSheet  删除sheet
 * @apiGroup task
 * 
 * @apiParam {String} taskId 【必填】taskId
 * @apiParam {String} sheetId 【必填】sheetId
 * 
 */


/**
 * @api {post} /task/modify 增加或更新任务
 * @apiGroup task
 * @apiParam {String} taskName 【必填】任务名称
 * @apiParam {String} owner 【必填】任务所有人（需求方）
 * @apiParam {String} developer 【必填】开发者
 * @apiParam {Number} dueDate 【必填】到期时间
 * @apiParam {String} dataSource 【必填】选择数据源
 * @apiParam {String} demandNumber 【必填】关联需求号
 * @apiParam {Number} isRWExecute=0 【必填】是否允许立即执行
 * @apiParam {Array} dataResultInfo 【选填】数据结果页参数集合
 * @apiParam {String} sheetName 【选填】页面名
 * @apiParam {String} columnName 【选填】列名,逗号分隔，
 * 
 * @apiParam {String} selectableParams 【选填】可选参数
 * @apiParam {String} paramName 【选填】参数名
 * @apiParam {String} isRequired 【选填】可选参数是否必选
 * @apiParam {String} paramType 【选填】可选参数类型
 * @apiParam {String} dptDefault 【选填】可选参数调度默认值
 * @apiParam {String} sql 【必填】sql
 * @apiParam {String} isRequired 【选填】可选参数是否必选
 * @apiParam {Object} handUploadData 【选填】手工上传数据
 * @apiParam {String} tableName 【选填】
 * @apiParam {Array} fields 【选填】手工上传表字段描述
 * @apiParam {String} fieldName 【选填】字段名
 * @apiParam {String} fieldType 【选填】字段类型
 * @apiParam {String} fieldDesc 【选填】字段描述
 * @apiParam {Object} handUploadData 【选填】手工上传数据
 * @apiParam {Object} dptFrequency  【必填】调度频率是否必填，根据是否上传手工数据决定
 * @apiParam {String} dependencies 【选填】依赖项
 * 
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "id",//有id则修改，无id则添加
 *        "taskName" : "",
 *        "owner" : "",
 *        "developer" : "",
 *        "dueDate" : Number,
 *        "dataSource" : "sparkSQL",
 *        "demandNumber" : "",
 *        "isRWExecute" : 0,
 *        "desc":"",
 *        "dataResultInfo" : [
 *            {
 *                "sheetName":"",
 *                "columnName":"",
 *                "selectableParams":[
 *                    {
 *                        "paramDesc":"",
 *                        "paramName":"",
 *                        "paramType":"",
 *                        "dptDefault":"",
 *                        "isRequired":false,
 *                    },
 *                    {
 *                         "paramDesc":"",
 *                        "paramName":"",
 *                        "paramType":"",
 *                        "dptDefault":"",
 *                        "isRequired":false,
 *                    }
 *                 ],
 *                "sql":"",
 *                "handUploadData":{
 *                    "tableName":"",
 *                    "fields":[
 *                        {
 *                         "fieldName":"",
 *                          "fieldType":"",
 *                          "fieldDesc":"",
 *                        }
 *                    ]
 *                   
 *                }
 *                
 * 
 *            }
 * 
 *        ],
 *        "dptFrequency" : { 
 *            "zhexp":"每日18时10分",
 *             "cron":"0 0 5 ? * MON"
 *        },
 *        "dependencies" : "",
 *     }
 * 
 * 
 * 
 * 
 */

 /**
  * @api {get} /task/demandList 需求列表
  * @apiGroup task
  * @apiParam {String} name 【选填】模糊查询
  * 
  *   
 *   @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    [
 *      {
 *         demandName:'',
 *         demandNumber:'',
 *      }
 *    ]
  */

   /**
  * @api {get} /task/dependencies 依赖列表
  * @apiGroup task
  * 
  *  
 *   @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * 
 *    {
 *       "total": 20,
 *       "length": 50,
 *       "pageNumber": 1,
 *       "list": [
*         {
*           "id":'',
*           "param":'',
*         },
*         {
*           "id":'',
*           "param":'',
*         }
 *      ]
 *    }

  */


/**
 * @api {post} /task/querylist 查询任务列表
 * @apiGroup task
 * 

 * @apiParam {String} subum 【选填】订阅人UM
 * @apiParam {Number} pageSize=10 【选填】返回条目数
 * @apiParam {Number} pageNumber=1 【选填】当前页面
 * @apiParam {String} search【选填】搜索内容
 * 
 * @apiSuccess {Number} total 总条目数
 * @apiSuccess {Number} length  返回条数
 * @apiSuccess {Number} pageNumber  第几页
 * @apiSuccess {Array} list  返回列表
 * @apiSuccess {Array} list  返回列表
 * @apiSuccess {String} id 任务id
 * @apiSuccess {String} name 任务名称
 * @apiSuccess {String} desc 任务名称
 * @apiSuccess  {Number} status 状态
 * @apiSuccess  {Object} owner 所有人信息
 * @apiSuccess  {Object} developer 开发者信息
 * @apiSuccess  {String} dptFrequency 调度频率
 * 
 *   @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "total": 20,
 *       "pageNumber": 1,
 *        "list":[
 *          {
 *              id:"",
 *              taskName:'',
 *              desc:'',
 *              status:'',
 *              owner:{
 *                  realName:'',
 *                  umname:'',
 *              },
 *              developer:{
 *                   realName:'',
 *                  umname:'',
 *              },
 *              "dataResultInfo" : [
 *                {
 *            
 *                "sheetId":"",
 *                "SheetName":"",
 *                "columnName":"",
 *                "selectableParams":[
 *                    {
 *                        "paramDesc":"",
 *                        "paramName":"",
 *                        "paramType":"",
 *                        "dptDefault":"",
 *                        "isRequired":false,
 *                    },
 *                    {
 *                         "paramDesc":"",
 *                        "paramName":"",
 *                        "paramType":"",
 *                        "dptDefault":"",
 *                        "isRequired":false,
 *                    }
 *                 ],
 *                "sql":"",
 *                "handUploadData":{
 *                    "tableName":"",
 *                    "fields":[
 *                        {
 *                         "fieldName":"",
 *                          "fieldType":"",
 *                          "fieldDesc":"",
 *                        }
 *                    ]
 *                   
 *                }      
 *              }
 *           ],
 * 
 *            
 *          }
 *        ]
 *     }
 * 
 *  
 */








 /**
 * @api {post} /task/forbidden 任务归档
 * @apiGroup task
 * 
 * @apiParam {String} taskId 【必填】任务id
 */

 /**
 * @api {post} /task/execute 执行任务
 * @apiGroup task
 * 
 * @apiParam {String} taskId 【必填】任务id,
 * @apiParam {String} params 【必填】任务id,
 * @apiHeader {String} Content-Type multipart/form-data
 * 
 * @apiParamExample {Form-data} Request-Example:
 *     {
 *       "taskId": "id",//有任务id
 *        
 *        "dataResultInfo" : [
 *          {
 *               "sheetId":"",
 *                "selectableParams":[
 *                    {
    *                    "paramName":""
    *                    "paramValue":'',
 *                
 *                    },
 *                    {
    *                    "paramName":""
    *                    "paramValue":'',
 *                
 *                    }
 *                ]
 *                "uploadFile":fileBlob,
 *          },
 * 
 *        ],
 * 
 */

 /**
 * @api {post} /task/info 任务信息
 * @apiGroup task
 * 
 * @apiParam {String} taskId 【必填】任务id,
 * 
 * @apiSuccess {Object} baseInfo 基础信息
 * @apiSuccess {Object} dataResultInfo  返回条数
 * @apiSuccess {Object} dispatchInfo  第几页
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *        baseInfo:{
 *            owner:'',
 *            createTime:'',
 *            dueTime:'',
 *            developer:'',
 *            dataSource:'',
 *            desc:'',
 *        },
 *        "dataResultInfo" : [
 *            {
 *                "sheetId":"",
 *                "sheetName":"",
 *                "columnName":"",
 *                "selectableParams":[
 *                    {
 *                        "paramDesc":"",
 *                        "paramName":"",
 *                        "paramType":"",
 *                        "dptDefault":"",
 *                        "isRequired":false,
 *                    },
 *                    {
 *                        "paramDesc":"",
 *                        "paramName":"",
 *                        "paramType":"",
 *                        "dptDefault":"",
 *                        "isRequired":false,
 *                    }
 *                 ],
 *                "sql":"",
 *                "handUploadData":{
 *                    "tableName":"",
 *                    "fields":[
 *                        {
 *                         "fieldName":"",
 *                          "fieldType":"",
 *                          "fieldDesc":"",
 *                        }
 *                    ]
 *                   
 *                }
 * 
 *            }
 * 
 *        ],
 *        dispatchInfo:{
 *            "zhexp":"每日18时10分",
 *            "cron":"0 0 5 ? * MON",
 *            "status":"",
 *            "dptTaskId":""
 *          
 *        },
 *      }
 * 
 * 
 */


   /**
 * @api {post} /task/subscribePersonList  订阅人列表
 * @apiGroup task
 * 

 * @apiParam {String} taskId 【必填】taskId
 * @apiParam {Number} pageSize=10 【选填】返回条目数
 * @apiParam {Number} pageNumber=1 【选填】当前页面
 * 
 * @apiSuccess {Number} total 总条目数
 * @apiSuccess {Number} pageNumber  第几页
 * @apiSuccess {Array} list  订阅人列表
 * @apiSuccess {String} subscribeTime  创建时间
 * @apiSuccess {Object} subscribePerson  订阅人信息
 * @apiSuccess {Object} approver   审批人信息
 * @apiSuccess {Number} status   审批状态
 * 
 * *   @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "total": 20,
 *       "pageNumber": 1,
 *        "list":[
 *          {
 *              id:"",
 *              subDate:'',
 *              subUser:{
 *                  realName:'',
 *                  umname:'',
 *              },
 *              approver:{
 *                  realName:'',
 *                  umname:'',
 *              },
 *              status:'',
 *          },
 *          {
 *              id:"",
 *              subscribeTime:'',
 *               subscribePerson:{
 *                  name:'',
 *                  um:'',
 *              },
 *              approver:{
 *                  name:'',
 *                  um:'',
 *              },
 *              status:'',
 *          }
 *        ]
 *     }
 * 
 * 
 * 
 */



  /**
 * @api {post} /task/executeLogs  运行记录
 * @apiGroup task
 * 
 * @apiParam {String} taskId 【必填】任务id
 * @apiParam {Number} pageSize=10 【选填】返回条目数
 * @apiParam {Number} pageNumber=1 【选填】当前页面
 * 
 * @apiSuccess {Number} total 总条目数
 * @apiSuccess {Number} pageNumber  第几页
 * @apiSuccess {Array} list  运行记录列表
 * @apiSuccess {String} executeTime  运行时间
 * @apiSuccess {Object} operatePerson  订阅人信息
 * @apiSuccess {Object} params   运行参数
 * @apiSuccess {Number} status   审批状态
 * @apiSuccess {Number} duration   持续时间
 * @apiSuccess {String} downloadLink   下载链接
 * 
 *   @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "total": 20,
 *       "pageNumber": 1,
 *        "list":[
 *          {
 *              id:"",
 *              executeTime:'',
 *              optUser:{
 *                  realName:'',
 *                  umname:'',
 *              },
 *              params:[
 *                {
 *                    "sheetId":'',
 *                    "sheetName":'',
 *                    "params":[//json字符串
 *                        {
          *                  name:'',//参数名
          *                  type:'',//参数类型
          *                  value:'',//参数值
 *                        },
 *                        {
          *                  name:'',//参数名
          *                  type:'',//参数类型
          *                  value:'',//参数值
 *                        },
 *                    ],
 *                }
 *                
 *                
 *              ],
 *              downloadLink:'',
 *              status:''//成功1，失败0，运行中2,
 *              duration：''//毫秒
 *          },
 * 

 *        ]
 *     }
 * 
 * 
 */


  /**
 * @api {post} /task/subscribe  订阅
 * @apiGroup task
 * 
 * @apiParam {String} um 【必填】um账号
 * @apiParam {String} taskId 【必填】订阅任务id
 * @apiParam {String} optum 【必填】操作人
 * 
 * 
 */

   /**
 * @api {post} /task/cancleSub  取消订阅
 * @apiGroup task
 * 
 * @apiParam {String} umname 【必填】um账号
 * @apiParam {String} taskId 【必填】订阅任务id
 * 
 */




