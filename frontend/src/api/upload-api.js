import { storage } from "../config/firebase";

/* function will store images in images directory  */
/* arguments : file to upload */
export const uploadImage = (data) => {
  return new Promise((resolve, reject) => {
    // const userId = localStorage.getItem("id");
    const userId = "123";
    if (userId == null) {
      reject(new Error("UserId is required."));
    } else {
      const uploadTask = storage.ref(`/images/${userId}.jpg`).put(data);
      uploadTask.on("state_changed", console.log, console.error, () => {
        storage
          .ref("images")
          .child(userId)
          .getDownloadURL()
          .then((url) => {
            resolve(url);
          })
          .catch(function (error) {
            reject(error);
          });
      });
    }
  });
};
