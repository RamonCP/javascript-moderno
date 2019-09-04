const ExifImage = require('exif').ExifImage;
const fs = require('fs')

const imageName = './IMG_20190903_214015.jpg'

try {
    new ExifImage({ image : imageName }, function (error, exifData) {
        if (error){ 
            console.log('Error: '+error.message);
        }else {
            const exif = exifData.exif
            const createDate = exif.CreateDate

            let dateSplited = createDate.split(' ')
            dateSplited = dateSplited[0].split(':')
            dateSplited = `${dateSplited[2]}-${dateSplited[1]}-${dateSplited[0]}.jpg`

            fs.rename(imageName, dateSplited, function(err, data){
                if (err) console.error('ERROR: ', err)
            })
        }
    });
} catch (error) {
    console.log('Error: ' + error.message);
}