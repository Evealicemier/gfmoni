/**********************************
初始化
**********************************/
function inilization() {
	//Ajax用页面切换器
	page_content = document.getElementById("content");
	page_loading = document.getElementById("loading");
	loading(false);
	//初始化js函数
	cmd("正在初始化...");
	requestDatabase();
}

function cmd(string) {
	document.getElementById("footline").innerHTML = string;
}
function loading(statue) {
	if (statue) {
		page_loading.style.opacity = "1";
	}
	else {
		page_loading.style.opacity = "0";
	}
}