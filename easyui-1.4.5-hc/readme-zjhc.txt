# 特性
-- 1缺省界面主体换成bootstrap
-- 2字体改雅黑，字号变大（14px)
-- 3图标替换成fa(font-awesome）
-- 4删除了多余的源文件（如单个css，未压缩的js）

# 变动
-- 1缺省风格：themes\default与themes\bootstrap名称对调
-- 2中文大字：themes\default\easyui.css，font-size:12px-->font:size:14px
-- 3图标美化：
	将fa的资源（fonts目录）加到项目中；
	将font-awesome.css的内容添加到themes\icon.css中
	在jquery.easyui.min.js末尾添加了替换的脚本（同后面iconfa.js的内容）
	增加\iconfa.js，作用：在页面加载结束后，替换icons成fa风格


# 使用方法
- 完全与jeasyui1.5.4一致
-  如果页面有动态添加脚本的
		，需要在页面中引入iconfa.js放在后面，转换图标   <script type="text/javascript" src="../../iconfa.js"></script>


----------
BI of zjhcsoft.com
2016/3/22 19:21:48