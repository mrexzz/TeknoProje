import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS dosyasını projeye ekleyin
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function PageQuestionInput() {
  const [text, setGeneratedText] = useState('');
  const [answertext, setAnswerText] = useState('');


  const genAI = new GoogleGenerativeAI('AIzaSyA2vdutgmI6H61Ero8-tAzEQe60OHWb41k');

  async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = "1 tane matematik problemi yaz ilkokul düzeyinde ";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    setGeneratedText(text);
  }
  async function answer() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt1 = `${text} sorulan soruları tekrar yazmadan sırasıyla çözümü basamak basamak anlatarak cevapla`;

    const sonuc = await model.generateContent(prompt1);
    const cevap = await sonuc.response;
    const answertext = await cevap.text();

    setAnswerText(answertext);
  }

  return (
    <>
      <div className="container">
        <div className="container3 d-flex justify-content-center align-items-center vh-100">
          <div className="input-container">
            <input className="form-control" placeholder="Sorunuz:" ></input>
            <button className="btn btn-primary btn-block mt-3" onClick={run}>Giriş</button>
            <p>{text}</p>
            <button className="btn btn-primary btn-block mt-3" onClick={answer}>Answer</button>
            <p>{answertext}</p>
          </div>
        </div>
      </div>
    </>
  );
}
