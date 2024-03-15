import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function App() {
  const [text, setGeneratedText] = useState('');
  const [answertext, setAnswerText] = useState('');


  const genAI = new GoogleGenerativeAI('AIzaSyA2vdutgmI6H61Ero8-tAzEQe60OHWb41k');

  async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = "10 tane Edebiyat sorusu yaz ";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    setGeneratedText(text);
  }
  async function answer() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt1 = `${text} sorulan soruları tekrar yazmadan sırasıyla cevapla`;

    const sonuc = await model.generateContent(prompt1);
    const cevap = await sonuc.response;
    const answertext = await cevap.text();



    setAnswerText(answertext);
  }

  return (
    <>
      <div className="container">
        <h1>Edebiyat</h1>
        <h3>Soru Yapıcı</h3>
        <div className="mt-5 mb-5" id="buton1">
          <div>
            <button onClick={run} type="submit" className="btn btn-primary mt-3 col-lg-12">
              Soru Üret
            </button>
          </div>
        </div>
        <div className="try">
          {text && (
            <div>
              {text.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="container">
        <div className="mt-5 mb-5">
          <div>
            <button type="submit" onClick={answer} className="btn btn-primary mt-3 col-lg-12">
              Soruyu Cevapla
            </button>
          </div>
        </div>
        <div className="try">
          {text && (
            <div>
              {answertext.split('\n').map((answerLine, index) => (
                <p key={index}>{answerLine}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

