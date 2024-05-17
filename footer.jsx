
import './footer.css'
import Insta from '../../assets/insta.png'
import Tweet from '../../assets/tweet.png'
import face from '../../assets/face.png'
import logo from'../../assets/logoshop.png'


const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-social'>
            <img src={Insta} alt=''/>
            <img src={Tweet} alt=''/>
            <img src={face} alt=''/>
         
        </div>
        <div className='footer-logo'>
            <img src={logo} alt='' />
        </div>
        <div className='footer=links'>
            <ul>
                <li>Product</li>
                <li>terms</li>
                <li>Privacy n Policy</li>
                <li> Company</li>
                <li> Company</li>
            </ul>
        </div>
        <div className='copyright-footer'>
            <p>copyright &copy; 2023 surune;.tech</p>
        </div>

    </div>
  )
}

export default Footer