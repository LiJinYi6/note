## cors跨域资源共享
**响应头**
1. Access-Control-Allow-Origin
   格式如下
   ```js
   res.setHeader('Access-Control-Allow-Origin','http://itcast.cn')
   res.setHeader('Access-Control-Allow-Origin','*')
   ```
2. Access-Control-Allow-Headers
   ![alt text](image.png)  
    最多使用9个请求头，额外需要的必须要声明  
    ```js
     res.setHeader('Access-Control-Allow-Headers','Content-Type')
    ```
3. Access-Control-Allow-Methods
   ![alt text](image-1.png)

## cors请求分类
1. 简单请求
   ![alt text](image-2.png)
2. 预检请求
   ![alt text](image-3.png)
3. 区别
   ![alt text](image-4.png)


## JSONP接口
![alt text](image-5.png)
![alt text](image-6.png)
![alt text](image-7.png)
![alt text](image-8.png)