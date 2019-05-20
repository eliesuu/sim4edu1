//Functions for 
//1.Reading files 2. Dom loading 3. Attribute query 4. Show the result and info 5.Download the result

//Read File
function readAsText(){  

	var result=document.getElementById("result"); 
	var output = document.getElementById("output");
	var Goback = document.getElementById("Goback");
	let files = event.target.files;
	//read all the file by each
	for (let i=0; i<files.length; i++) {

      var file = document.getElementById("file").files[i];  

        var name = file.name;
        var reader = new FileReader();  

        //read file as the text 
        reader.readAsText(file);  
        reader.onload=function(f){  

            //show all the files resource code
            result.innerHTML=result.innerHTML +" "+ this.result;  

            var string = event.target.result;
            //dom loading
            var doc = new DOMParser().parseFromString( string, 'text/html' );
            

var oInp1 = document.getElementById("input1");

//get the input 
if("oninput" in oInp1){
    oInp1.addEventListener("input",getWord,true);
}
function getWord(){
  	document.getElementById("input1").onclick();
}


//transfer the input to the query function
    var getName = oInp1.value;

    function getNameFunc() {

        var TransName1 ='[';
        var TransName2 = getName;
        var TransName3 ="]";
        var TransName =TransName1+TransName2+TransName3;
        return TransName;
        
    }
           
	//query
            var el = doc.querySelectorAll( getNameFunc());
            for (var j = 0; j < el.length; j++) {
                 var elem = el[j]

                 // show the modified number
                 var x = j+1;
                 //show  the file number
                 var y = i + 1;

                 var z = 0; 
                 z < el.length;
	             z= z+1;
                 
//show the query result and info
                output.textContent = output.textContent + "\nModified No. "+ x + "-->\nFile No. "+ y + "\nFile Name: " + files[i].name + "\nFile Path: " + files[i].webkitRelativePath + "-->\n------------------------------- \n \n "+ el[j].outerHTML + "\n \n<<------------------------------->> \n";
// create button
// document.getElementById("Goback").innerHTML += "\n" + "</br><input name=\"Go to change the file-->\" type=\"button\" onClick=\"clic()\" value=\"Go to change the file-->\"><\/input>" + "\n";

//create info
//document.getElementById("Goback").innerHTML += "\n" + z + "\nModified No. "+ x + "-->\nFile No. "+ y + "\nFile Name: " + files[i].name + "\nFile Path: " + files[i].webkitRelativePath + "\n";

//create textare
// document.getElementById("Goback").innerHTML += "\n" + "</br><textarea id=\"result\" cols=\"20\" rows=\"20\" id=\"msg\" class=\"comments\"><\/textarea>" + "\n";
// result.innerHTML= files[i].result;
                                                      
            }
 
        }  

    }
  }  
// alert info for the input
function saveWord(){
	alert("Input has been Saved!");

}


var eleTextarea = document.querySelector('textarea');
var eleButton = document.querySelector('input[type="button"]');

// File Download
var funDownload = function (content, filename) {
    var eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    // String content to blob adress
    var blob = new Blob([content]);
    eleLink.href = URL.createObjectURL(blob);
    // click trigger 
    document.body.appendChild(eleLink);
    eleLink.click();
    // and remove
    document.body.removeChild(eleLink);
};

if ('download' in document.createElement('a')) {
    // download as html
    eleButton.addEventListener('click', function () {
        funDownload(eleTextarea.value, 'test.html');    
    });
} else {
    eleButton.onclick = function () {
        alert('Browser not support');    
    };
}
    /*******************************************************************************
 * Generate the file from text
 *
 * @param {string} filename - Name of the file
 * @param {string} text - Content of the file
 ******************************************************************************/
// let generateTextFile = function ( ModifiedSearch, text ) {
//   let defData, defFile, defURL;

//   defData = new Blob( [ text ], { type: "text/html" } );

//   defURL = window.URL.createObjectURL( defData );

//   defFile = document.createElement( "a" );
//   defFile.setAttribute( "style", "display: none" );
//   defFile.setAttribute( "href", defURL );
//   defFile.setAttribute( "download", filename );
//   document.body.appendChild( defFile );
//   defFile.click();
//   window.URL.revokeObjectURL( defURL );
//   defFile.remove();
// }


 //次数
// var getFunCallTimes = (function() {
    
//     // 装饰器，在当前函数执行前先执行另一个函数
//     function decoratorBefore(fn, beforeFn) {
//         return function() {
//             var ret = beforeFn.apply(this, arguments);

//             // 在前一个函数中判断，不需要执行当前函数
//             if (ret !== false) {
//                 fn.apply(this, arguments);
//             }
//         };
//     }
    
//     // 执行次数
//     var funTimes = {};
    
//     // 给fun添加装饰器，fun执行前将进行计数累加
//     return function(fun, funName) {
//         // 存储的key值
//         funName = funName || fun;
        
//         // 不重复绑定，有则返回
//         if (funTimes[funName]) {
//             return funTimes[funName];
//         }
        
//         // 绑定
//         funTimes[funName] = decoratorBefore(fun, function() {
//             // 计数累加
//             funTimes[funName].callTimes++;

//             console.log('count', funTimes[funName].callTimes);
//         });
        
//         // 定义函数的值为计数值（初始化）
//         funTimes[funName].callTimes = 0;

//         return funTimes[funName];
//     }
// })();