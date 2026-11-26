<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Sunshine Guest House</title>

    <meta name="description" content="Welcome to Sunshine Guest House. Experience comfortable stays, warm hospitality and a memorable stay.">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet">

    <!-- Main CSS -->
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- ================= HEADER ================= -->
    <header class="site-header">

        <div class="container navbar">

            <a href="index.php" class="logo">
                Sunshine
            </a>

            <nav class="nav-menu">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#rooms">Rooms</a>
                <a href="#amenities">Amenities</a>
                <a href="#gallery">Gallery</a>
                <a href="#contact">Contact</a>
            </nav>

            <a href="#booking" class="nav-button">
                Book Your Stay
            </a>

        </div>

    </header>


    <!-- ================= HERO ================= -->
    <main>

        <section class="hero" id="home">

            <div class="hero-overlay"></div>

            <div class="container hero-content">

                <p class="hero-tag">
                    WELCOME TO SUNSHINE
                </p>

                <h1>
                    Your Comfortable Stay,
                    <span>Made Memorable.</span>
                </h1>

                <p class="hero-description">
                    Relax, refresh and experience warm hospitality
                    in a place designed to make your stay special.
                </p>

                <div class="hero-buttons">

                    <a href="#booking" class="btn btn-primary">
                        Book Your Stay
                    </a>

                    <a href="#rooms" class="btn btn-outline">
                        Explore Rooms
                    </a>

                </div>

            </div>

        </section>


        <!-- ================= BOOKING ================= -->
        <section class="booking" id="booking">

            <div class="container booking-card">

                <div class="booking-item">
                    <span>Check In</span>
                    <strong>Select Date</strong>
                </div>

                <div class="booking-item">
                    <span>Check Out</span>
                    <strong>Select Date</strong>
                </div>

                <div class="booking-item">
                    <span>Guests</span>
                    <strong>2 Guests</strong>
                </div>

                <button class="booking-button">
                    Check Availability
                </button>

            </div>

        </section>


        <!-- ================= ABOUT ================= -->
        <section class="about section" id="about">

            <div class="container">

                <div class="section-heading">

                    <p class="section-tag">
                        ABOUT US
                    </p>

                    <h2>
                        A stay that feels
                        <span>like home.</span>
                    </h2>

                    <p>
                        Sunshine Guest House brings together comfort,
                        convenience and welcoming hospitality to create
                        a pleasant experience for every guest.
                    </p>

                </div>

            </div>

        </section>


        <!-- ================= ROOMS ================= -->
        <section class="rooms section" id="rooms">

            <div class="container">

                <div class="section-heading">

                    <p class="section-tag">
                        OUR ROOMS
                    </p>

                    <h2>
                        Comfort designed
                        <span>for you.</span>
                    </h2>

                </div>

                <div class="rooms-grid">

                    <article class="room-card">
                        <div class="room-image"></div>

                        <div class="room-content">
                            <p>Comfort Stay</p>
                            <h3>Deluxe Room</h3>

                            <a href="#booking">
                                View Room →
                            </a>
                        </div>
                    </article>

                    <article class="room-card">
                        <div class="room-image room-image-two"></div>

                        <div class="room-content">
                            <p>Premium Stay</p>
                            <h3>Premium Room</h3>

                            <a href="#booking">
                                View Room →
                            </a>
                        </div>
                    </article>

                    <article class="room-card">
                        <div class="room-image room-image-three"></div>

                        <div class="room-content">
                            <p>Relax &amp; Stay</p>
                            <h3>Family Room</h3>

                            <a href="#booking">
                                View Room →
                            </a>
                        </div>
                    </article>

                </div>

            </div>

        </section>


        <!-- ================= AMENITIES ================= -->
        <section class="amenities section" id="amenities">

            <div class="container">

                <div class="section-heading">

                    <p class="section-tag">
                        AMENITIES
                    </p>

                    <h2>
                        Everything you need
                        <span>for a better stay.</span>
                    </h2>

                </div>

                <div class="amenities-grid">

                    <div class="amenity-card">
                        <div class="amenity-icon">✦</div>
                        <h3>Comfortable Rooms</h3>
                        <p>Clean and thoughtfully designed spaces.</p>
                    </div>

                    <div class="amenity-card">
                        <div class="amenity-icon">✦</div>
                        <h3>Free Wi-Fi</h3>
                        <p>Stay connected throughout your visit.</p>
                    </div>

                    <div class="amenity-card">
                        <div class="amenity-icon">✦</div>
                        <h3>24/7 Support</h3>
                        <p>Friendly assistance whenever you need it.</p>
                    </div>

                    <div class="amenity-card">
                        <div class="amenity-icon">✦</div>
                        <h3>Convenient Location</h3>
                        <p>Easy access to nearby places and attractions.</p>
                    </div>

                </div>

            </div>

        </section>


        <!-- ================= GALLERY ================= -->
        <section class="gallery section" id="gallery">

            <div class="container">

                <div class="section-heading">

                    <p class="section-tag">
                        GALLERY
                    </p>

                    <h2>
                        Take a look
                        <span>around.</span>
                    </h2>

                </div>

                <div class="gallery-grid">

                    <div class="gallery-item gallery-large"></div>
                    <div class="gallery-item"></div>
                    <div class="gallery-item"></div>
                    <div class="gallery-item"></div>
                    <div class="gallery-item"></div>

                </div>

            </div>

        </section>


        <!-- ================= CTA ================= -->
        <section class="cta">

            <div class="container cta-content">

                <p class="section-tag">
                    YOUR NEXT STAY STARTS HERE
                </p>

                <h2>
                    Make your stay
                    <span>something to remember.</span>
                </h2>

                <a href="#booking" class="btn btn-primary">
                    Book Your Stay
                </a>

            </div>

        </section>


        <!-- ================= CONTACT ================= -->
        <section class="contact section" id="contact">

            <div class="container">

                <div class="section-heading">

                    <p class="section-tag">
                        CONTACT
                    </p>

                    <h2>
                        We'd love to
                        <span>welcome you.</span>
                    </h2>

                </div>

            </div>

        </section>

    </main>


    <!-- ================= FOOTER ================= -->
    <footer class="footer">

        <div class="container">

            <div class="footer-content">

                <div>
                    <h3>Sunshine</h3>
                    <p>
                        Comfortable stays. Warm hospitality.
                        Memorable experiences.
                    </p>
                </div>

                <div>
                    <h4>Quick Links</h4>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#rooms">Rooms</a>
                    <a href="#contact">Contact</a>
                </div>

            </div>

            <div class="footer-bottom">
                <p>© <?php echo date("Y"); ?> Sunshine Guest House. All rights reserved.</p>
            </div>

        </div>

    </footer>


    <!-- Main JS -->
    <script src="script.js"></script>

</body>
</html>