import logo from '../../assets/book.svg'
import sun from '../../assets/sun.svg'
import './index.css'

export default function Header() {
  return (
    <>
      <div className='header'>
        <div className="logo">
        <a href='./'><img src={logo} alt="logo" /></a>
          
          <h1>Education</h1>
        </div>
        <div className="menu">
          <img src={sun} alt="sun" />
          <a href='./register'><button>Royhatdan o'tish</button></a>
          <a href='./login'><button>Kirish</button></a>
        </div>
      </div>
      <div className="hr1"></div>
    </>

  )
}
