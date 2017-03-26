/**********************************
请求数据库文件
**********************************/
function requestDatabase() {
	loading(true);
	cmd("正在读取数据库...");
	xmlRequest('girl');
	xmlRequest('buff');
	xmlRequest('skill');
	var done = 0; //监听函数完成情况
	function xmlRequest(filename) {
		var object = filename;
		var rawFile = new XMLHttpRequest(); //请求数据库文件
		var rawFileURL = "./model/" + filename + ".csv"; //HTML REQUEST
		rawFile.open("GET", rawFileURL, true);
		rawFile.send(null);
		rawFile.onreadystatechange = function(filename) {
			if (rawFile.readyState == 4) {
				if (rawFile.status == 200) {
					var str = rawFile.responseText;
					str = str.replace("\r\n","\n").replace("\r","\n").split("\n"); //兼容win，mac与linux的换行，以linux为最终标准。切割，现在每一行是一个小姐姐/装备的的数据
					for (var i = 0; i < str.length; i++) {
						str[i] = str[i].split(","); //切割，现在为二维数组，第二维是每个小姐姐/装备的小数据
					}
					callNext(); //函数完成
					if (object == "girl") { //开始回传数据
						db_girl = str;
					}
					if (object == "buff") {
						db_buff = str;
					}
					if (object == "skill") {
						db_skill = str;
					}
					
				}
			}
			
		}
	}
	function callNext() {
		done ++;
		if (done == 3) { //如果函数全部完成，执行下一步
			cmd("数据库读取完成");
			loading(false);
			databaseDecode();
		}
	}		
}