import { TypeAnimation } from 'react-type-animation';

export function Typing(){
    return(
        <TypeAnimation
            sequence={[
            'Welcome',
            800,
            'Καλως ΗΡΘΑΤΕ',
            800,
            'Accueillir',
            800,
            'Добро пожаловать',
            800,
            '欢迎',
            800,
            'Gratus',
            800,
           'أهلا وسهلا',
            800,
            '어서 오십시오',
            800,
            'Powitanie',
            800,
            'Bienvenido',
            800,
            'Herzlich willkommen',
            800,
            'Ben arrivato',
            800,
            'いらっしゃいませ',
            800,
            'Bem Vindo 🚀'


        ]}
      speed={1}
      wrapper="h2"
      cursor={true}
      repeat={false}
      style={{ fontSize: '4em' }}
    />
    )
}