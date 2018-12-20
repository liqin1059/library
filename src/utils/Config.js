export default {
  HTTPMOCK_ON: process.env.HTTPMOCK_ON,
  // ENV: process.env.ENV,
  UPLOAD_FILE_MAX_SIZE: process.env.UPLOAD_FILE_MAX_SIZE, // 上传文件限制，50M
  HTTPMOCK_TIMEOUT: process.env.HTTPMOCK_TIMEOUT,
  XHRLOG: process.env.XHRLOG, // 是否console出ajax的详细信息；右上角的Notice是否打印url和code
  HTTPBASEURL: process.env.HTTPBASEURL // 开发服务器
};
