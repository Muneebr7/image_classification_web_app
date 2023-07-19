"use client";

import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

function cat_dogs() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState([]);
  const [preview, setPreview] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    axios
      .post("https://cors-anywhere.herokuapp.com/https://muneebr7.com/cats-dogs", formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          setUploadProgress(progress);
        },
      })
      .then((res) => setResult(res.data))
      .catch((err) => console.log(err))
      .finally(() => {
        setIsUploading(false);
        setUploadProgress(0);
      });

    const newfile = URL.createObjectURL(file);
    setPreview(newfile);
    setIsUploading(true);
  };

  const reset = () => {
    setPreview("");
    setResult("");
  };

  return (
    <div className="container flex flex-col">
      <h1 className="text-center text-4xl font-bold text-yellow-300 uppercase mt-16">
        Cat or Dog Image Predictions
      </h1>
      <span className="text-center text-lg mt-5">
        A machine learning model that distinguishes between cats and dogs by
        analyzing visual features. Trained on labeled images, it accurately
        identifies whether an image contains a cat or a dog.
      </span>

      <div className="flex mt-10 justify-center gap-6">
        <div className="w-[25%]  border-white relative">
          {isUploading ? (
            <div className="relative w-[100%] h-[300px] border-[5px] border-dotted">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2/3 bg-gray-300 h-2 rounded">
                  <div
                    className="bg-yellow-300 h-2 rounded"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <div className="text-white mt-2">
                  {uploadProgress}% Uploaded
                </div>
              </div>
            </div>
          ) : preview ? (
            <div className="h-[300px]">
              <img src={preview} alt="preview" className="h-[100%] w-[100%]" />
            </div>
          ) : (
            <div className="relative w-[100%] h-[300px] border-[5px] border-dotted">
              <label className="absolute inset-0 cursor-pointer p-2 flex flex-col items-center justify-center">
                <FontAwesomeIcon icon={faUpload} className="h-20 mb-4" />
                <h2 className="text-center">
                  Drag/Drop or Click To Upload Your Photo
                </h2>
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>
            </div>
          )}

          <div className="flex flex-col">
            <button
              className="mt-4 py-2 px-10 bg-yellow-300 text-black w-[100%]"
              onClick={handleSubmit}
            >
              Let's Predict
            </button>
            <button
              className="mt-4 py-2 px-10 bg-yellow-300 text-black w-[100%]"
              onClick={reset}
            >
              Test Again
            </button>
          </div>
        </div>
        <div className="w-[50%]">
          <span className="text-red-700 font-bold text-lg">Disclaimer:</span>
          <span>
            Accuracy Limitations of the Machine Learning Model Please note that
            our X-ray image classification system is based on a machine learning
            model. While we have taken utmost care in training and fine-tuning
            the model, it is essential to understand its limitations.
          </span>
          <h3 className="text-2xl text-yellow-300 font-bold uppercase mt-28">
            Prediction: {result.result}
          </h3>
          <h3 className="text-xl text-yellow-300">
            Prediction Accuracy : {result.resultInPercentage} %
          </h3>
        </div>
      </div>
    </div>
  );
}

export default cat_dogs;
