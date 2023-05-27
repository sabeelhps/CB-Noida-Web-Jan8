
function downloadFile(path, downloaded) {
    console.log(`started to download the file from path : ${path}`);
    setTimeout(() => {
        downloaded(path.split('/').pop());
    }, 3000);
}


function compressFile(fileName, compressed) {
    console.log(`starting to compress the file ${fileName}`);
    setTimeout(() => {
        compressed(fileName.split('.')[0] + '.zip');
    }, 2000);
}

function uploadFile(compressedFileName, compressed) {
    console.log(`starting to upload the file ${compressedFileName}`);
    setTimeout(() => {
        compressed('http://whatsapp.cloud/'+compressedFileName);
    }, 2000);
}

const URL = 'http://whatsapp.com/user/profile.jpg';


// Callback Hell
downloadFile(URL, function (fileName) {
    console.log(`file downloaded successfully as ${fileName}`);
    compressFile(fileName, function (compressedFileName) {
        console.log(`file compression complete ${compressedFileName}`);
        uploadFile(compressedFileName, function (uploadedPath) {
            console.log(`File uploaded successfully at path : ${uploadedPath}`);
        })
    });
});


// downloadFile('http://facebook.com/user/myimage.jpeg', function () {
    
// })

// compressFile('myimage.jpeg', function (compressedFileName) {
//     console.log(`file compression complete ${compressedFileName}`);
// })