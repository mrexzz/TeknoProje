import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function App() {
    const [text, setGeneratedText] = useState('');
    const [answertext, setAnswerText] = useState('');
    const [loading, setLoading] = useState(false); 
    const [load, setLoad] = useState(false); 


    const genAI = new GoogleGenerativeAI('AIzaSyA2vdutgmI6H61Ero8-tAzEQe60OHWb41k');

    async function run() {
        setLoading(true); 
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = "10 tane matematik problemi yaz ilkokul düzeyinde ";
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        setGeneratedText(text);
        setLoading(false);
    }

    async function answer() {
        setLoad(true);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt1 = `${text} sorulan soruları tekrar yazmadan sırasıyla çözümü basamak basamak anlatarak cevapla`;
        const sonuc = await model.generateContent(prompt1);
        const cevap = await sonuc.response;
        const answertext = await cevap.text();
        setAnswerText(answertext);
        setLoad(false);
    }

    // Her satır için sabit şık listesi
    const options = [answertext, "Yanlış", "Belirsiz"];

    return (
        <>
            <div className="container">
                <h1>Project X</h1>
                <h3>Soru Yapıcı</h3>
                <div className="mt-5 mb-5" id="buton1">
                    <div>
                        <button onClick={run} type="submit" className="btn btn-primary mt-3 col-lg-12">
                            Soru Üret
                        </button>
                    </div>
                </div>
                {loading ? <div className="spinner-border text-primary" role="status">
                    <span className="sr-only"></span>
                </div> : ""}
                <div className="try">
                    {text && (
                        <div>
                            {text.split('\n').map((line, index) => (
                                <div key={index}>
                                    <p>{line}</p>
                                    <ul>
                                        {options.map((option, index) => (
                                            <li key={index}>
                                                <button onClick={answer} className="btn btn-secondary">{option}</button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
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
                {load ? <div className="spinner-border text-primary" role="status">
                    <span className="sr-only"></span>
                </div> : ""}
                <div className="try">
                    {answertext && (
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
