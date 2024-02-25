import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Form() {
    const navigate = useNavigate();
    const [age, setage] = useState([]);

    const Entered = () => {
        if (age > 0 && age < 120) {
            navigate('/project');
        }

    };

    return (
        <div className='container' style={{ marginBottom: '20%' }}>
            <h1 className='text-center baslik'>Yaşınızı giriniz</h1>
            <label>
                <input id='input'
                    className='input'
                    type="number"
                    value={age}
                    onChange={(e) => setage(e.target.value)}
                    placeholder='Yaşınızı yazın...'
                />
            </label>
            <br />
            <br />
            <button onClick={Entered} className="btn btn-primary">Gir</button>
            <br />
            {age <= 0 && (
                <p>
                    Geçerli Bir Sayı Giriniz..
                </p>
            )}
            {age >= 120 && (
                <p>
                    Geçerli Bir Sayı Giriniz..
                </p>
            )}

        </div>
    );
}

