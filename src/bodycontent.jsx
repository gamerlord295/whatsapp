import "./body.css";
import Feature from "./feature";

const Bodycontent = () => {

  const data = [
    {left: true,
    src: 'https://scontent.whatsapp.net/v/t39.8562-34/316211879_640016534274402_8272733547019635528_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=w9aYe0Z3zqAAX_QEa5U&_nc_ht=scontent.whatsapp.net&oh=01_AdQ8MYx2hIlK08I-kAZP7-MbNamUuLho9M7WI6Sl6rHV1A&oe=655FDE96',
    src2: '',
    h1: 'Never miss a moment with voice and video calls',
    p: 'From a group call to classmates to a quick call with mom, feel like you are in the same room with voice and video calls.',
    classNam: ''},
    {left: false,
    src: 'https://scontent.whatsapp.net/v/t39.8562-34/316036583_870096634427722_4468595013887544943_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=Ht2bL-_IdMsAX_cEwmk&_nc_ht=scontent.whatsapp.net&oh=01_AdRgJOowyhxUQ_3kjzXP8J1yF3jj6YP228cNTOl71LX0PQ&oe=655F65F1',
    src2: '',
    h1: 'Speak freely',
    p: 'With end-to-end encryption, your personal messages and calls are secured. Only you and the person you are talking to can read or listen to them, and nobody in between, not even WhatsApp.',
    classNam: 'dark reverse'},
    {left: true,
    src: 'https://scontent.whatsapp.net/v/t39.8562-34/327907096_1371041820333620_611345387365115329_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=yz1KQZjfuYUAX-vu9y2&_nc_ht=scontent.whatsapp.net&oh=01_AdSAn2aGJMikLFqaXDUS1_mrkqb3g92STtx3Al0B01TmjA&oe=655F8B22',
    src2: 'https://scontent.whatsapp.net/v/t39.8562-34/318759416_815630979518701_2490140615586319278_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=lWxljz2aSZAAX_CADFD&_nc_ht=scontent.whatsapp.net&oh=01_AdTY3RkVngrppFyc8MMY_Q7c6UsOt3ldM_dyxoMvqZAiGg&oe=6561128D',
    h1: 'Keep in touch with your groups',
    p: 'Whether its planning an outing with friends or simply staying on top of your family chats, group conversations should feel effortless.',
    classNam: ''},
    {left: false,
    src: 'https://scontent.whatsapp.net/v/t39.8562-34/317076792_511422874258852_7691088395873706953_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=OGHOtzeEm8QAX-KeW0Z&_nc_ht=scontent.whatsapp.net&oh=01_AdTuAWrfK7jr2IEPCkY6IObODe1Im6oJsUIvkYeAbvP1pQ&oe=655FC5FC',
    src2: 'https://scontent.whatsapp.net/v/t39.8562-34/311869879_1082331725759559_5382136804801289925_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=dTzhFkwLj-wAX-qGGuM&_nc_ht=scontent.whatsapp.net&oh=01_AdTkzq9e8etcGJX3JY6xp5eW0e03C-b67DT9yCuZLX75Yg&oe=656115AF',
    h1: 'Say what you feel',
    p: 'Express yourself without words. Use stickers and GIFs or share everyday moments on Status. Record a voice message for a quick hello or a longer story.',
    classNam: 'reverse'},
    {left: true,
    src: 'https://scontent.whatsapp.net/v/t39.8562-34/329699257_2856843487782508_7800545505417662242_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=6nRhD_rTbwoAX82opHf&_nc_ht=scontent.whatsapp.net&oh=01_AdQOoM-4nCq5nAr_-85A8IQc0NgfdbCrLJYbeqHlogKxMQ&oe=6560269B',
    src2: '',
    h1: 'Transform your business',
    p: 'WhatsApp Business helps you reach your customers globally to deliver compelling experiences at scale. Showcase your products and services, increase sales, and build relationships all with WhatsApp.',
    classNam: ''},
]

  return (
    <div className="content">
      <img
        className="img1"
        src="https://scontent.whatsapp.net/v/t39.8562-34/315574582_669241857978207_6336028129238262344_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=7BOI0BoeDmUAX-k-nFe&_nc_oc=AQlVzYSM2DGIdZ1GUws5WtQPcuz3rvclqsas3c1tU9jc0lppZj428pJfYTuWZchMzy0&_nc_ht=scontent.whatsapp.net&oh=01_AdTWyPSE680gIPehHRGxtX52EKEqIRj60oSiIsXH9NFHIA&oe=6560494C"
      />
      <img src="https://scontent.whatsapp.net/v/t39.8562-34/315639168_1101279470583084_2167618893759059342_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=x7Iyvc8NzgYAX-aATFk&_nc_ht=scontent.whatsapp.net&oh=01_AdQHZ3Zx9IeCsiOQKqnAcDj4HlqEeGBQC9N0Qe2H2Khnqw&oe=6560766B" className="img3" />
      <h1 className="bodyh1">
        With private messaging and calling, you can be yourself, speak freely
        and feel close to the most important people in your life no matter where
        they are.
      </h1>
      <img
        className="img1"
        src="https://scontent.whatsapp.net/v/t39.8562-34/315632381_5616928641708856_9210500231334849736_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=gCV323zRDeMAX-erhaG&_nc_ht=scontent.whatsapp.net&oh=01_AdQPdwmfeAa2o3z_JzQpmUlsEoPuRa7FhW4TmMH4F8t4Ag&oe=6561080D"
      />
      <img src="https://scontent.whatsapp.net/v/t39.8562-34/315480134_1332364444241595_6824421575333722036_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=XjjtQ_mb0vMAX_ViveL&_nc_ht=scontent.whatsapp.net&oh=01_AdT3ej3gptUJwr0YJMAFRDwuKwUSUKcTMJH8T_y8VfA1bw&oe=65618934" className="img3" />

      {data.map((item) => {
        return(
          <Feature
          left={item.left}
          src={item.src}
          src2={item.src2}
          classNam={item.classNam}
          key={item.h1}
          >
            <h1>{item.h1}</h1>
            <p>{item.p}</p>
          </Feature>
        )
      })}

     { /*<>
      <Feature
        left={true}
        src="https://scontent.whatsapp.net/v/t39.8562-34/316211879_640016534274402_8272733547019635528_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=w9aYe0Z3zqAAX_QEa5U&_nc_ht=scontent.whatsapp.net&oh=01_AdQ8MYx2hIlK08I-kAZP7-MbNamUuLho9M7WI6Sl6rHV1A&oe=655FDE96"
      >
        <h1>Never miss a moment with voice and video calls</h1>
        <p>
          From a group call to classmates to a quick call with mom, feel like
          you&apos;re in the same room with voice and video calls.
        </p>
      </Feature>
      <Feature
        classNam="dark"
        left={false}
        src="https://scontent.whatsapp.net/v/t39.8562-34/316036583_870096634427722_4468595013887544943_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=Ht2bL-_IdMsAX_cEwmk&_nc_ht=scontent.whatsapp.net&oh=01_AdRgJOowyhxUQ_3kjzXP8J1yF3jj6YP228cNTOl71LX0PQ&oe=655F65F1"
      >
        <h1>
          Speak <br />
          freely
        </h1>
        <p>
          With end-to-end encryption, your personal messages and calls are
          secured. Only you and the person you&apos;re talking to can read or
          listen to them, and nobody in between, not even WhatsApp.
        </p>
      </Feature>
      <Feature
        left={true}
        src="https://scontent.whatsapp.net/v/t39.8562-34/318759416_815630979518701_2490140615586319278_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=lWxljz2aSZAAX_CADFD&_nc_ht=scontent.whatsapp.net&oh=01_AdTY3RkVngrppFyc8MMY_Q7c6UsOt3ldM_dyxoMvqZAiGg&oe=6561128D"
        src2="https://scontent.whatsapp.net/v/t39.8562-34/327907096_1371041820333620_611345387365115329_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=yz1KQZjfuYUAX-vu9y2&_nc_ht=scontent.whatsapp.net&oh=01_AdSAn2aGJMikLFqaXDUS1_mrkqb3g92STtx3Al0B01TmjA&oe=655F8B22"
      >
        <h1>Keep in touch with your groups</h1>
        <p>
        Whether it&apos;s planning an outing with friends or simply staying on top of your family chats, group conversations should feel effortless.
        </p>
      </Feature>
      <Feature
        src2="https://scontent.whatsapp.net/v/t39.8562-34/317076792_511422874258852_7691088395873706953_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=OGHOtzeEm8QAX-KeW0Z&_nc_ht=scontent.whatsapp.net&oh=01_AdTuAWrfK7jr2IEPCkY6IObODe1Im6oJsUIvkYeAbvP1pQ&oe=655FC5FC"
        src="https://scontent.whatsapp.net/v/t39.8562-34/311869879_1082331725759559_5382136804801289925_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=dTzhFkwLj-wAX-qGGuM&_nc_ht=scontent.whatsapp.net&oh=01_AdTkzq9e8etcGJX3JY6xp5eW0e03C-b67DT9yCuZLX75Yg&oe=656115AF"
        left={false}
      >
        <h1>Say what you feel</h1>
        <p>
          Express yourself without words. Use stickers and GIFs or share everyday moments on Status. Record a voice message for a quick hello or a longer story.
        </p>
      </Feature>
      <Feature
        src="https://scontent.whatsapp.net/v/t39.8562-34/329699257_2856843487782508_7800545505417662242_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=6nRhD_rTbwoAX82opHf&_nc_ht=scontent.whatsapp.net&oh=01_AdQOoM-4nCq5nAr_-85A8IQc0NgfdbCrLJYbeqHlogKxMQ&oe=6560269B"
        left={true}
      >
        <h1>Transform your business</h1>
        <p>
          WhatsApp Business helps you reach your customers globally to deliver
          compelling experiences at scale. Showcase your products and services,
          increase sales, and build relationships all with WhatsApp.
        </p>
      </Feature>
    </>*/}
    </div>
  );
};

export default Bodycontent;
