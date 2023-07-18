"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

function covid() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState();
  const [preview, setPreview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("imageFile", file);

    axios
      .post("http://127.0.0.1:8000/upload", formData)
      .then((res) => setResult(res.data.result))
      .catch((err) => console.log(err));

    const newfile = URL.createObjectURL(file);
    setPreview(newfile);
  };

  const reset = () => {
    setPreview("");
  };

  return (
    <div className="container flex flex-col">
      <h1 className="text-center text-4xl font-bold text-yellow-300 uppercase mt-16">
        Covid 19 Prediction Using Xray
      </h1>
      <span className="text-center text-lg mt-5">
        Harness the power of artificial intelligence in our web application for
        X-ray image classification. By utilizing advanced machine learning
        algorithms, we accurately analyze X-ray images to classify various
        respiratory conditions, including pneumonia, tuberculosis, and COVID-19.
        Empower your healthcare practice with reliable and efficient diagnostic
        support for better patient outcomes.
      </span>

      <div className="flex mt-10 justify-center gap-6">
        <div className="w-[25%]  border-white relative">
          {preview == "" ? (
            <>
              <div className="relative w-[100%] h-[300px] border-[5px] border-dotted">
                <label className="absolute inset-0 cursor-pointer p-2 flex flex-col items-center justify-center">
                  <FontAwesomeIcon icon={faUpload} className="h-20 mb-4" />
                  <h2 className="text-center">
                    Drag/Drop or Click To Upload Your Chest Xray
                  </h2>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </label>
              </div>
            </>
          ) : (
            <>
              <div className="h-[300px]">
                <img
                  src={preview}
                  alt="preview"
                  className="h-[100%] w-[100%]"
                />
              </div>
            </>
          )}

          <div className="flex flex-col"> <button
            className="mt-4 py-2 px-10 bg-yellow-300 text-black w-[100%]"
            onClick={handleSubmit}
          >
            Lets Predict
          </button>
          <button
            className="mt-4 py-2 px-10 bg-yellow-300 text-black w-[100%]"
            onClick={reset}
          >
            Test Again
          </button></div>
         
        </div>
        <div className="w-[50%] ">
          <span className=" text-red-700 font-bold text-lg">Diclaimer: </span>
          Accuracy Limitations of the Machine Learning Model Please note that
          our X-ray image classification system is based on a machine learning
          model. While we have taken utmost care in training and fine-tuning the
          model, it is essential to understand its limitations. The
          classification results provided by the system are for scientific
          purposes only and should not be considered as a substitute for
          professional medical diagnosis or advice. The model's accuracy may
          vary, and it is imperative to consult qualified healthcare
          professionals for accurate diagnosis and treatment decisions. We
          strongly recommend using this application as a supportive tool
          alongside clinical expertise to enhance medical decision-making.
          <h3 className="text-2xl text-yellow-300 font-bold uppercase mt-10">
            Prediction : {result}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default covid;
