import Download from './download';
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <img className='headerImg' src='https://scontent.whatsapp.net/v/t39.8562-34/316546300_547692113846445_7299710494491288098_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=YI0uhQEyYuMAX9qkYdW&_nc_ht=scontent.whatsapp.net&oh=01_AdTbrK6ymIx_aEidqXYvMeM1-wI37XlfkPTDcIS0BDBkAQ&oe=655FA1E5' />
            <div className='headerContent'>
                <div className="chatContent">
                    <img className='chat' src='https://scontent.whatsapp.net/v/t39.8562-34/329792464_534173148815054_3736500652022655929_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=45rmzUkKxnwAX9jpC2g&_nc_ht=scontent.whatsapp.net&oh=01_AdQlvWusZWqoPUmNPsR3lniy6LxAOMVCLg_72mQf5XGPng&oe=655EAF83' />
                    <img className='like' src='https://scontent.whatsapp.net/v/t39.8562-34/326429760_565901131866976_8960223839941330956_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=cIgCiInTv74AX93ZXaY&_nc_ht=scontent.whatsapp.net&oh=01_AdTOx7Wt1hl-2Ye8URMbLSwF41RcMQwlry9WVzHHyztNrQ&oe=655E1F48' />
                    <img className='coffee' src='https://scontent.whatsapp.net/v/t39.8562-34/318567080_617695970110803_5923371384204745052_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=i_78Ru3GpGkAX_TtJV3&_nc_ht=scontent.whatsapp.net&oh=01_AdS-RZ-PR4Hw78-Cppehp96C3FGfzazup0mmtbDBSgbzug&oe=655F7626' />
                </div>
                <div className='text'>
                    <h1>Message privately</h1>
                    <p>Simple, reliable, private messaging and calling for free*, available all over the world.</p>
                    <Download />
                </div>
            </div>
        </div>
    );
}

export default Header;
