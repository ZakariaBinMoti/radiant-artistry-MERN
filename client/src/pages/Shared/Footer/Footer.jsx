const Footer = () => {
  return (
    <footer className="mt-16 bg-black">
      <div className="footer p-10  text-white max-w-7xl mx-auto">
        <aside>
          <a className="text-4xl mb-4 font-extrabold font-bodoni">
            Radiant <span className="text-[#BDA76E]">Artistry</span>{" "}
          </a>
          <p className="max-w-80">
            Email: <a href="mailto:info@radiantartistry.com.bd">info@radiantartistry.com.bd</a> <br /> Phone: +880 1234 567890 <br /> Address:
            RadiantArtistry <br /> 123 Crafting Avenue, <br /> Dhaka 1205, Bangladesh{" "}
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Twitter</a>
        </nav>
      </div>
      <div>
      <p className="text-white opacity-60 text-center pb-5">&copy; <span>2024</span> RadiantArtistry. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
