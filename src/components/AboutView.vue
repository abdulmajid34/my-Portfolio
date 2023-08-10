<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
</script>

<template>

    <section id="about">
        <div class="container" data-aos="fade-up" >
            <div class="row text-center mb-3">
                <div class="col">
                    <h2>About Me</h2>
                </div>
            </div>
            <div class="row" >
                <div class="col-md-6" >
                    <div class="row" >
                        <div class="col-md-6 p-3" data-aos="fade-right">
                            <div class="card about-img-card" style="border: 1px solid black; ">
                                <img src="../assets/images/my_pic_5.jpg" class="card-img-top" alt="foto_1">                                
                            </div>
                        </div>
                        <div class="col-md-6 p-3" data-aos="fade-left">
                            <div class="card about-img-card" style="border: 1px solid black;">
                                <img src="../assets/images/my_pic_2.jpg" class="card-img-top" alt="foto_1">                                
                            </div>
                        </div>
                        <div class="col-md-6 p-3" data-aos="fade-right">
                            <div class="card about-img-card" style="border: 1px solid black;">
                                <img src="../assets/images/my_pic_3.jpg" class="card-img-top" alt="foto_1">                                
                            </div>
                        </div>
                        <div class="col-md-6 p-3" data-aos="fade-left">
                            <div class="card about-img-card" style="border: 1px solid black;">
                                <img src="../assets/images/my_pic_4.jpg" class="card-img-top" alt="foto_1">                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6" >
                    <div class="row mt-4" data-aos="fade-left">
                        <p>
                            Hi, my name is Abdul Majid,
                            I graduated from IPS High School, then I received intro to programming training by Hacktiv8
                            for 6 months from my school YCAB Foundation. after successfully completing the intro to
                            programming training program, I was given the opportunity to get a scholarship to take part
                            in the YCAB Foundation's immersive fullstack javascript by hacktiv8 bootcamp.
                            Since high school, I really like computer technology, computer development and all kinds of
                            computer programs. then my aspirations and desires are to become a technology expert in the
                            field of computers, want to be someone who can make applications that are useful for many
                            people, make applications that can help other people,
                            and work.
                        </p>
                        <p>
                            the first program or web I made when I was in high school was a web about waste recycling,
                            at that time I used html & css as the code.
                            Then I got a job at the company <a href="https://www.asiansigmatechnology.com/">PT. Asian
                                Sigma technology</a> as a Front-End Engineer, this is my first company, there I was
                            assigned to the client, namely president-one (Japanese client).
                            My first project at that time was making an E-commerce application called the Tajimingo app,
                            Tajimi admin and Tajimi Merchants.
                            after running for 10 months I got the opportunity to be directly hired from a Japanese
                            company client from PT. asian sigma technology to work as a software engineer and create
                            applications with orders under direct japanese clients such as
                            Tajimingo v3, Tajimi admin v3, Tajimi Merchants v3, okinawa gas app dan Kebun Translator app
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="style-button" style="margin-top: 5rem" data-aos="fade-up">
            <button>
                <a href="../assets/Abdul majid.pdf" download style="text-decoration: none; color: black;">Download
                    CV</a>
            </button>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#e2edff" fill-opacity="1"
                d="M0,64L48,85.3C96,107,192,149,288,165.3C384,181,480,171,576,144C672,117,768,75,864,85.3C960,96,1056,160,1152,186.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>
    </section>

</template>

<style scoped>
    #about {
        padding-top: 5rem;
    }

    .style-button {
        display: flex;
        justify-content: center;
        align-items: center;
    }


    .about-img {
        width: 250px;
        object-fit: contain;
    }


    button {
        width: 12em;
        height: 3em;
        border-radius: 30em;
        font-size: 20px;
        font-family: inherit;
        border: none;
        position: relative;
        overflow: hidden;
        padding: 0 5px;
        z-index: 1;
        background-color: #e2edff;
        box-shadow: 6px 6px 12px #c5c5c5,
            -6px -6px 12px #ffffff;

    }

    button::before {
        content: '';
        width: 0;
        height: 3em;
        border-radius: 30em;
        position: absolute;
        top: 0;
        left: 0;
        background-image: linear-gradient(to right, #AEE2FF 0%, #0d6efd 100%);
        transition: .5s ease;
        display: block;
        z-index: -1;
    }

    button:hover::before {
        width: 12em;
    }
</style>