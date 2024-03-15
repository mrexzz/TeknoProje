import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";


export default function InputPage() {
    const [nameText,setNameText] = useState("");
    const genAI = new GoogleGenerativeAI("AIzaSyA2vdutgmI6H61Ero8-tAzEQe60OHWb41k");

    async function fileToGenerativePart(file) {
        const base64EncodedDataPromise = new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result.split(',')[1]);
            reader.readAsDataURL(file);
        });
        return {
            inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
        };
    }

    async function run() {
        const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

        const prompt = "Görseldeki problemi anlatarak çöz";

        const fileInputEl = document.querySelector("input[type=file]");
        const imageParts = await Promise.all(
            [...fileInputEl.files].map(fileToGenerativePart)
        );

        const result = await model.generateContent([prompt, ...imageParts]);
        const response = await result.response;
        const text = response.text();
        setNameText(text);
    }
    return (
        <>
            <h1 className="h1-input">InputPage</h1>
            <div className="imginput">
                <br></br>
                <input type="file"></input>
                <button onClick={run}>Run</button>  
                <div>
                    {nameText && (
                        <div>
                            {nameText.split('\n').map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
