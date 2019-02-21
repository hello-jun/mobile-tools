# mobile-tools
	web前端移动端工具类
	version:1.0
	data:190221
	copyright：jetz1818

## 功能说明：
	1.增加任意方向防抖动功能

## 使用说明:
1. 引入mobile-tools.js
> [GitHub下载地址](https://github.com/Jetz1818/mobile-tools)
```
	//请在业务js前引入mobile-tool.js
	<script src="./js/mobile-tools.js"></script>
```

2. 在需要防抖动的元素标签上添加 `data-anti-shake="方向[x|y]"`
	
		/*示例
		* data-anti-shake="x" 表示x轴方向防抖动
		* data-anti-shake="y" 表示y轴方向防抖动
		*/
		<div class="content" data-anti-shake="x">
		//...业务代码
		<div>
	
3. 在业务js中，需要防抖动的逻辑部分上加上防抖动标识（data-anti-status）判断
	    wrap.addEventListener("touchmove", function (ev) {
	    	/*
	    	 * 1.data-anti-status="no",表示此时防抖动状态关闭，业务逻辑正常执行
	    	 * 2.data-anti-status="ok",表示此时防抖动状态开启，业务逻辑终止执行
	    	 */
	        if (this.dataset.antiStatus === "no") {
	            //...业务代码，如触摸滑屏
	        }
	    });

# **注意事项**
	1. 本工具js只适用于dom2及以上规范；
	2. 以下浏览器版本及更低版本可能存在兼容性问题：
		- Internet Explorer 11
		- Chrome 8
		- Firefox 6.0
		- Opera 11.10
		- Safari 6
