//javascript connected
console.log("JS connected");

//accessing inputs and submit button
const event_name = document.getElementById("event_name");
const event_date = document.getElementById("event_date");
const time = document.getElementById("time");
const address = document.getElementById("address");
const content = document.getElementById("content");
const event_picture = document.getElementById("event_picture");
const createEventButton = document.getElementById("createEventButton");
const artist_id = document.getElementById("artist-id");
let chosenDate;
let splitDate;
let finalDate;
let chosenTime;
let finalTime;

//Turn date into SQL format YYYY-MM-DD

event_date.addEventListener("change", (e) => {
  chosenDate = e.target.value;
  // splitDate = chosenDate.split("-")
  // console.log(chosenDate)
  // finalDate = `${splitDate[2]}-${splitDate[0]}-${splitDate[1]}`
  // console.log(typeof chosenDate)
});

time.addEventListener("change", (e) => {
  chosenTime = e.target.value;
  finalTime = tConvert(chosenTime);
});

//Turn time into AM/PM format
function tConvert(time) {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ];

  if (time.length > 1) {
    // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(""); // return adjusted time or original string
}

//converter function to convert image to base-64 format
const convertBase64 = (file) => {
  //if it's successful or if there's an error
  return new Promise((resolve, reject) => {
    //similar to node fs but for JS; will just read through the image file
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    //on load eventListener - particular to file readers
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

const submitEvent = (data) => {
  axios
    .post("/dashboard", data)
    .then((results) => {
      console.log(results.data);
      //if the results are okay refresh
        document.location.reload();
    })
    .catch((error) => {
      alert(
        "There was a problem with creating the event. Please try again later."
      );
      console.log(error);
    });
};

createEventButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const file = event_picture.files;
  if (file.length === 1) {
    const event_pic = await convertBase64(file[0]);
    const data = {
      event_name: event_name.value,
      date: chosenDate,
      time: finalTime,
      address: address.value,
      content: content.value,
      artist_id: null,
      event_image: event_pic,
    };
    console.log(data);
    submitEvent(data);
  }
});

//unsure why I have this error:
// message: 'Missing required parameter - file',
// name: 'Error',
// http_code: 400
