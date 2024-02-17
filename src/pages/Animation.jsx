import { TypeAnimation } from 'react-type-animation';

const Animation = () => {
  return (
    
    <TypeAnimation
      sequence={[
        'Sizin İçin Teknoloji İnovasyon Ve Çalışma',
        1000, 
        'Sizin için Üretiyoruz Ve Çalışıyoruz',
        1000,
      ]}
      wrapper="span"
      speed={40}
      style={{ fontSize: '1.5em', display: 'inline-block' }}
      repeat={0}
    />
  );
};
export default Animation;