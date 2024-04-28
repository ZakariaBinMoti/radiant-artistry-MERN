const Footer = () => {
  return (
    <footer className="mt-16 bg-black">
      <div className="footer p-10  text-white max-w-7xl mx-auto">
        <aside>
          <a className="text-4xl mb-4 font-extrabold font-bodoni">
          Radiant <span className="text-[#BDA76E]">Artistry</span>{" "}
          </a>
          <p className="max-w-80">
          Illuminating Your World with Creative Brilliance Where Paper and Glass Meet Inspiration Crafting Beauty in Paper and Glass Unveiling the Magic of Paper and Glass Exploring Paper Crafts & Glass Art.{" "}
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
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
