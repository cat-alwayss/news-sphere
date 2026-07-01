function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <h2>📰 NewsSphere</h2>

          <p>
            Stay informed with breaking news,
            trending stories, and global updates —
            all in one place.
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#">Technology</a>
          <a href="#">Business</a>
          <a href="#">Sports</a>

        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} NewsSphere.
        Built with React & Express.
      </div>

    </footer>
  );
}

export default Footer;