let Left_data = {
	"博客类":{
		"博客园":"https://www.cnblogs.com",
		"CSDN":"https://www.csdn.net/",
		"segmentfault":"https://segmentfault.com/",
		"linux公社":"https://www.linuxidc.com/"
	},
	"视频类":{
		"百度传课":"https://chuanke.baidu.com/",
		"腾讯课堂":"https://ke.qq.com/",
		"MOOC大学":"https://www.icourse163.org",
		"mooc学院":"https://mooc.guokr.com/",
		"mooc中国":"http://www.mooc.cn/",
		"爱慕课":"https://www.imooc.com/",
		"学堂在线":"http://www.xuetangx.com/",
		"网易云课堂":"http://study.163.com/",
		"51CTO":"http://www.51cto.com/"
	},
	"文档教程":{
		"菜鸟教程":"http://www.runoob.com/",
		"w3school":"http://www.w3school.com.cn/",
		"Liunx手册":"http://man.linuxde.net/",
		"实验楼":"https://www.shiyanlou.com/"
	},
	"资源下载":{
		"脚本之家":"http://www.jb51.net/",
		"GitBook":"https://www.gitbook.com/",
		"看云":"https://www.kancloud.cn/explore"
	},
	"论坛社区":{
		"开源中国":"https://www.oschina.net/"
	},
	"工具":{
		"GitHub":"http://www.github.com",
		"UbuntuPaste":"https://paste.ubuntu.com/",
		"格式转换":"https://www.bejson.com/"
	},
	"论文":{
		"中国知网":"http://www.cnki.net/",
		"小木虫":"http://muchong.com/",
		"维普":"http://www.cqvip.com/"
	},
};

let Right_data = {
	"前端":{
		"bootstrap":"http://www.bootcss.com/",
		"Semantic UI":"https://semantic-ui.qyears.com/",
		"jQuery":"https://www.jquery123.com/",
		"React.js":"https://www.reactjscn.com/",
		"vue.js":"https://vuejs.bootcss.com/",
		"Less":"http://www.bootcss.com/p/lesscss/",
		"Sass":"https://www.sasscss.com/"
	},
	"JavaScript":{
		"ES6.0入门":"http://es6.ruanyifeng.com/",
	},
	"PHP":{
		"PHP手册":"http://php.net/manual/zh/",
		"PHP之道":"https://laravel-china.github.io/php-the-right-way/",
		"CI框架":"http://codeigniter.org.cn/",
		"Yii框架":"http://www.yiichina.com/",
		"Yii高级":"http://www.yii-china.com/doc/yii2-windows.html?id=286",
		"phpspider":"http://www.beanbun.org/#/",
		"Swoole":"https://wiki.swoole.com/",
		"Workerman":"http://www.workerman.net/"
	},
	"Python":{
		
	},
	"Golang":{
		"Go中文网":"https://studygolang.com/",
		"Go高级编程":"https://books.studygolang.com/advanced-go-programming-book/",
		"Effective Go":"https://bingohuang.gitbooks.io/effective-go-zh-en/content/",
		"Go知识图谱":"https://www.processon.com/view/link/5a9ba4c8e4b0a9d22eb3bdf0",
	},
	"Java":{
		"并发编程":"http://ifeve.com/java-7-concurrency-cookbook/",
		"虚拟机并发":"http://ifeve.com/jvm-concurrency/",
	},
	"Linux/Shell":{
		"就该这么学":"https://www.linuxprobe.com/chapter-00.html",	
	},
};

$(document).ready(function(){
	let l_ul = document.createElement("ul");
	for(let item in Left_data){
		let li = document.createElement("li");		
		$(li).data({"cate":item,"data-content":Left_data[item]});
		$(li).text(item);
		$(li).appendTo(l_ul);
	}
	$(l_ul).appendTo($("#left"));

	let r_ul = document.createElement("ul");
	for(let item in Right_data){
		let li = document.createElement("li");		
		$(li).data({"cate":item,"data-content":Right_data[item]});
		$(li).text(item);
		$(li).appendTo(r_ul);
	}
	$(r_ul).appendTo($("#right"));

	$("li").each(function(item){
		$(this).on("mouseenter",function(){
			$("li").removeClass("active");
			$(this).addClass("active");
			$("#content").text("");
			$("#xyz").hide();
			let data_content = $(this).data("data-content")
			for(let item in data_content){
				let a = document.createElement("a");
				let link = data_content[item];
				$(a).html(item).appendTo($("#content"));
				$(a).on("click",function(){
					window.location.href=link;
				});
				$(a).on("mouseenter",function(){
					$(this).addClass("active");
				});
				$(a).on("mouseout",function(){
					$(this).removeClass("active");
				});
			}
		});
	})
});