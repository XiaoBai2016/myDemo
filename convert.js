var pdf2png = require("./lib/pdf2png.js");
var fs = require("fs");

var projectPath = __dirname.split("\\");
const  pdfPath= 'D:\\vscodeWrokspace\\Pdf2PngforWindows-master\\xiaobai.pdf'
projectPath.pop();
projectPath = projectPath.join("\\");

var gsPath = projectPath + "\\executables\\ghostScript";

// Rewrite the ghostscript path
pdf2png.ghostscriptPath = gsPath;

// Most simple example
pdf2png.convert(pdfPath, function(resp){

	if(!resp.success){
		console.log("Something went wrong: " + resp.error);

		return;
	}
	fs.writeFile("test/"+resp.imgNum+".png", resp.data, function(err) {
		if(err) {
			console.log(err);
		}
	});
});
