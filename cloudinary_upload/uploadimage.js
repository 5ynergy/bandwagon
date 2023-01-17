const cloudinary = require("cloudinary")
const path = require("path")
require("dotenv").config({path: path.resolve(__dirname, "../.env")})

const cloudName = process.env.CLOUDINARY_CLOUD_NAME
const apiKey = process.env.CLOUDINARY_API_KEY
const apiSecret = process.env.CLOUDINARY_API_SECRET

cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret
})

const opts = {
    overwrite: true,
    invalidate: true,
    resource_type: "auto"
}

const uploadImage = (image) => {
    console.log("enteredinto")
    const submit = cloudinary.uploader.upload(image, opts)
    return submit;
    // return new Promise((resolve, reject) => {
    //     cloudinary.uploader.upload(image, opts, (error, result) => {
    //         if (result && result.secure_url) {
    //             console.log("enteredresults")
    //             console.log(result.secure_url) //one line link they'll send to us
    //             return resolve(result.secure_url)
    //         }
    //         console.log(error.message, "error")
    //         return reject({message: error.message})
    //     })
    // })
}

module.exports = uploadImage