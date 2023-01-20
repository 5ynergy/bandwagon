//javascript connected
console.log("JS connected")

//accessing inputs and submit button
const event_name = document.getElementById("event_name")
const event_date = document.getElementById("event_date")
const address = document.getElementById("address")
const content = document.getElementById("content")
const event_picture = document.getElementById("event_picture")
const createEventButton = document.getElementById("createEventButton")

//converter function to convert image to base-64 format
const convertBase64 = (file) => {
    //if it's successful or if there's an error
    return new Promise((resolve, reject) => {
        //similar to node fs but for JS; will just read through the image file
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        //on load eventListener - particular to file readers
        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}

const submitEvent = (data) => {
    axios.post("/dashboard", data)
    .then((results) => {
        console.log(results.data)
        //if the results are okay redirect to the dashboard
        document.location.replace("/dashboard")
    }).catch((error) => {
        alert("There was a problem with creating the event. Please try again later.")
        console.log(error)
    })
}

createEventButton.addEventListener("click", async (e) => {
    e.preventDefault()
    const file = event_picture.files
    // console.log(file)
    if (file.length === 1) {
        const event_pic = await convertBase64(file[0])
        // console.log(profile_pic)
        const data = {
            event_name: event_name.value, 
            date: event_date.value, 
            address: address.value, 
            content: content.value, 
            artist_id: req.session.user_id, 
            event_image: event_pic};
        submitEvent(data);
    }
})


//unsure why I have this error:
// message: 'Missing required parameter - file',
// name: 'Error',
// http_code: 400