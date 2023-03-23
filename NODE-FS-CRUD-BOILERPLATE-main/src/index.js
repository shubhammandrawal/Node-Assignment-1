const { writeFile } = require('fs')
const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	const writer = fs.writeFile("./newfile", "Hello from NewFile")
	// console.log(writer)
}
// myFileWriter()
const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	 fs.readFile('./newfile', 'utf-8', function(err, data){
			console.log(data)
	});
}
	// myFileReader()

const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile('./newfile', 'World', 'utf-8')
}

// myFileUpdater()

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink('./newfile');
}

// myFileDeleter()



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }