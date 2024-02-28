import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {
    const navigate = useNavigate();
    const [age, setage] = useState('');

    const entered = () => {
        if (age > 0 && age < 120) {
            navigate('/project');
        }
    };

    const errorMessage = age <= 0 || age >= 120 ? 'Geçerli bir sayı giriniz..' : '';

    return (
        <div className="container3 d-flex justify-content-center align-items-center vh-100">
            <div className="input-container">
                <h1 className='text-center baslik'>Yaşınızı giriniz</h1>
                <input
                    className="form-control input"
                    id='input'
                    type="number"
                    value={age}
                    onChange={(e) => setage(e.target.value)}
                    placeholder='Yaşınızı yazın...'
                />
                <button
                    className="btn btn-primary btn-block mt-3"
                    onClick={entered}
                >
                    Giriş
                </button>
                <br />
                {errorMessage && (
                    <div className="text-center mt-3">
                        <p>{errorMessage}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
