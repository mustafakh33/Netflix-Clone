import  './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src="src\assets\facebook_icon.png" alt="" />
        <img src="src\assets\instagram_icon.png" alt="" />
        <img src="src\assets\twitter_icon.png" alt="" />
        <img src="src\assets\youtube_icon.png" alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift  Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us </li>
      </ul>
      <p className='copyright-text'>@ 1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
