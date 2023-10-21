

const Footer = () => {
    const date= new Date()
    const year = date.getFullYear()
    return (
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
    <p>Copyright © {year} - All right reserved by Fahim</p>
  </aside>
</footer>
    );
};

export default Footer;