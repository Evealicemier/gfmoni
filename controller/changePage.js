/**********************************
Ajax换页
**********************************/
function changePage(to) {
	loading(true);
	cmd("页面切换中");
	if (to == 2) {
		var url = './format.html';
	}
	else if (to == 1) {
		var url = './girl.html';
	}
	else { //defult = 0
		var url = './home.html';
	}
	var rawFile = new XMLHttpRequest(); //请求HTML文件
	rawFile.open("GET", url, true);
	rawFile.send(null);
	rawFile.onreadystatechange = function(filename) {
		if (rawFile.readyState == 4) {
			if (rawFile.status == 200) {
				page_content.innerHTML = rawFile.responseText;
				cmd("就绪");
				loading(false);
			}
		}
	}
}