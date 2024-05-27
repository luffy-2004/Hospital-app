import React from 'react'
import Navbar from './Navbar.jsx'

const AboutPage = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <Navbar />
                    </div>
                    <div className="row g-3">
                        <div className="col col-12 col sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div class="card">
                                <img src="https://www.lifespan.io/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/12/Mayo-clinic-logo-1.png.webp" alt="..." />
                                <div class="card-body">
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 col sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <p>
                           <h5> Transforming health care </h5><br />
Mayo Clinic is the largest integrated, not-for-profit medical group practice in the world. We're building the future, one where the best possible care is available to everyone — and more people can heal at home. Our relentless research turns into earlier diagnoses and new cures. That's how we inspire hope in those who need it most.
                            </p><br />
                            <h5>Our impact </h5><br />
<h3>Building a healthier world</h3><br /><p>
We think big and act boldly to improve the health of communities and accelerate equality and diversity in health care. We share our knowledge globally, impact policy, and partner with others to create lasting — and much-needed — change for a healthier world. </p>
                        </div>
                        <div className="col col-12 col sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div class="card">
                                <img src="https://cdn.britannica.com/79/36179-004-0A510DA7/William-James-Mayo.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Our Founder</h5>
                                    <p class="card-text">William Worrall Mayo (May 31, 1819 – March 6, 1911) was an English American medical doctor and chemist. He is best known for establishing the private medical practice that later evolved into the Mayo Clinic. His sons, William James Mayo and Charles Horace Mayo, established a joint medical practice in Rochester in the U.S. state of Minnesota in the 1880s.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage