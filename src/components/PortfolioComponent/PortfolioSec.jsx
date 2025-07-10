const PortfolioSec = () => {
  return (
    <>
      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>
            I have created some projects which I have building to improve my
            knowledge and skills .
          </p>
        </div>
        {/* End Section Title */}

        <div className="container">
          <div
            className="isotope-layout"
            data-default-filter="*"
            data-layout="masonry"
            data-sort="original-order"
          >
            {/* End Portfolio Filters */}

            <div
              className="row gy-4 isotope-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <img
                  src="assets/img/masonry-portfolio/masonry-portfolio-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-1.jpg"
                    title="App 1"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
              {/* End Portfolio Item */}

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <img
                  src="assets/img/masonry-portfolio/image.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>The Shipping War</h4>
                  <p>Your Gateway to any destination in the world.</p>
                  <a
                    href="https://the-shipping-war.vercel.app/"
                    title="Shipping War"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                </div>
              </div>
              {/* End Portfolio Item */}

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                <img
                  src="assets/img/masonry-portfolio/masonry-portfolio-3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Branding 1</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-3.jpg"
                    title="Branding 1"
                    data-gallery="portfolio-gallery-branding"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
              {/* End Portfolio Item */}

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <img
                  src="assets/img/masonry-portfolio/masonry-portfolio-4.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>App 2</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-4.jpg"
                    title="App 2"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
              {/* End Portfolio Item */}

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <img
                  src="assets/img/masonry-portfolio/masonry-portfolio-5.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Product 2</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-5.jpg"
                    title="Product 2"
                    data-gallery="portfolio-gallery-product"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
              {/* End Portfolio Item */}

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                <img
                  src="assets/img/masonry-portfolio/masonry-portfolio-6.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Branding 2</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-6.jpg"
                    title="Branding 2"
                    data-gallery="portfolio-gallery-branding"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
              {/* End Portfolio Item */}

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <img
                  src="assets/img/masonry-portfolio/masonry-portfolio-7.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>App 3</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-7.jpg"
                    title="App 3"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
              {/* End Portfolio Item */}

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <img
                  src="assets/img/masonry-portfolio/masonry-portfolio-8.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Product 3</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-8.jpg"
                    title="Product 3"
                    data-gallery="portfolio-gallery-product"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
              {/* End Portfolio Item */}

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                <img
                  src="assets/img/masonry-portfolio/masonry-portfolio-9.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Branding 3</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-9.jpg"
                    title="Branding 2"
                    data-gallery="portfolio-gallery-branding"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
              {/* End Portfolio Item */}
            </div>
            {/* End Portfolio Container */}
          </div>
        </div>
      </section>
      {/* /Portfolio Section */}
    </>
  );
};

export default PortfolioSec;
