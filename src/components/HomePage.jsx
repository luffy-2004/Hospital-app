import React from 'react'
import Navbar from './Navbar.jsx'

const HomePage = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <Navbar />
                </div>
                <br />
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div id="carouselExample" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtPgBwaJ_8yICRh7Q7KRkQmoCBVtdrBw4k8w&s" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://qtxasset.com/quartz/qcloud5/media/image/Mayo%20Rochester%20campus%20render.png?VersionId=zoZrRL.PZtwW8PCUZ6h1J9s.8xEMfguS" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.mayoclinic.org//-/media/kcms/gbs/research/images/2018/11/13/17/37/mayo-clinic-research-education-3660130-0025r-banner.jpg" class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div class="card">
                            <img src="https://assets.thehansindia.com/h-upload/2023/02/06/1334292-mayo-clinic.webp" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">The Mayo clinic is world-renowned for its excellence in many medical specialties, Cancer.
Cardiology and heart surgery.
Diabetes and endocrinology.
Gastroenterology and gastrointestinal surgery.
Geriatrics.
Gynecology.
Neurology and neurosurgery.
Orthopedics..</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div class="card">
                            <img src="https://images.adsttc.com/media/images/6568/ab13/0ca0/c30c/c04b/11a6/medium_jpg/foster-plus-partners-to-design-transformative-healthcare-center-for-mayo-clinic_6.jpg?1701358401" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">THe mayo clinic is where many miracles of saving lifes happened more than u can count and its one of the top 10 clinic in the world</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div class="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4quD9ED-q5JC7QxvcV3KLzHBCuCH_oEUUKw&s" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">Our professionals 100% guarantee your safety and health.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage