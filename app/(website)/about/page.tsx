import Link from "next/link";
import Image from "next/image";
import { TeacherList } from "./teacher-list";
import type { Metadata } from "next";
import TeachersSlider from "@/components/TeachersSlider";
import { getTeachers } from "@/app/actions/teacher";

export const metadata: Metadata = {
  title: "About Engineers & Doctors School | Vision, Mission & Values",
  description:
    "Discover Engineers & Doctors School in Karachi—our vision, mission, teaching approach, and commitment to academic excellence and student development.",
  alternates: {
    canonical: "https://edschool.pk/about",
  },
};

export default async function About() {
  const { success, data: teachersList } = await getTeachers();
  return (
    <>
      <section className="pager-section">
        <div className="container">
          <div className="pager-content text-center">
            <h2>About Us</h2>
            <ul>
              <li>
                <Link href="/" title="Home">
                  Home
                </Link>
              </li>
              <li>
                <span>About</span>
              </li>
            </ul>
          </div>
          {/* pager-content end */}
          <h2 className="page-titlee">E&D</h2>
        </div>
      </section>
      {/* pager-section end */}

      <section className="principal-message-section ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="avt-img">
                <Image
                  src="/webImages/principle/principal-image.png"
                  alt="Principal"
                  width={500}
                  height={500}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                  className="mb-4 lg:mb-0"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title">
                <h2>
                  Principal's <span>Message</span>
                </h2>
                <ul className="mb-4">
                  <li>
                    <strong className="text-xl">Mr. Sadquain Salahuddin</strong>
                  </li>
                </ul>
                <p>
                  Welcome to Engineers & Doctors Inn (E&D)! Established in 2012, our institute has been
                  dedicated to empowering students to achieve their academic and career goals. At E&D, we
                  focus on top-class coaching for IX, X, XI, XII, MDCAT, and ECAT, combining a strong
                  conceptual foundation with exam strategies, practical guidance, and modern learning tools.
                </p>
                <p className="mt-4">
                  I am Muhammad Sadquain Salahuddin, the founder and principal of E&D. I hold a Bachelor
                  of Engineering from NED University of Engineering and Technology (Class of 2010), and I
                  have been actively involved in the education sector since 2012. Our mission is to provide a
                  nurturing, innovative, and result-oriented environment, where students receive not only
                  academic guidance but also access to weekly tests, MCQs, preliminary exams, AI tutors,
                  study materials, and recorded lectures to maximize learning.
                </p>
                <p className="mt-4" >
                  At E&D, we are committed to preparing future engineers and doctors by combining rigorous
                  academics, personalized support, and modern technology, ensuring every student has the tools
                  and confidence to succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-page-content">
        <div className="container">
          <div className="abt-page-row">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="section-title">
                  <h2>
                    Welcome to
                    <br />
                    <span>Engineers &amp; Doctors</span> School
                  </h2>
                  <p className="mw-100">
                    Engineers &amp; Doctors School is a future-focused learning
                    environment where students grow through STEM-based
                    education, robotics and technology integration, strong
                    language development, arts and creativity, and digital
                    literacy — all within a caring and supportive culture.
                  </p>
                  <Link
                    href="/admission"
                    title="Admissions"
                    className="btn-default"
                  >
                    Admissions <i className="fa fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
                {/* section-title end */}
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="avt-img">
                  <Image
                    src="/webImages/abt1.png"
                    alt="About Image 1"
                    width={500}
                    height={400}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                {/* avt-img end */}
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="avt-img">
                  <Image
                    src="/webImages/abt2.png"
                    alt="About Image 2"
                    width={500}
                    height={400}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                {/* avt-img end */}
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="act-inffo">
                  <span>ABOUT US</span>
                  <h2>Our Mission</h2>
                  <p>
                    At Engineers & Doctors Inn (E&D), our mission is to provide top-quality coaching and
                    complete academic support to help students excel in board exams, MDCAT, and ECAT. We
                    aim to create a result-oriented, supportive, and innovative learning environment, where
                    every student receives personalized guidance and tools for success.
                  </p>
                  <ul>
                    <li>Strengthen concepts and problem-solving through structured coaching and practice
                      tests</li>
                    <li>
                      Enhance learning with AI Tutor, recorded lectures, and comprehensive study notes
                    </li>
                    <li>
                      Support every student with care, discipline, and continuous feedback for academic
                      excellence
                    </li>
                  </ul>
                </div>
                {/* act-inffo end */}
              </div>
            </div>
          </div>
          {/* abt-page-row end */}
        </div>
      </section>
      {/* about-page-content end */}

      <section className="benifit-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <h2>Why Choose Us</h2>
                <p>
                  Engineers & Doctors Inn (E&D) offers result-oriented coaching for IX–XII, MDCAT, and
                  ECAT, combining strong academic foundations, structured assessments, and personalized
                  guidance. We provide a supportive and innovative learning environment, enhanced with AI
                  Tutor, recorded lectures, study notes, and practice tests, ensuring every student is fully
                  prepared to achieve their goals and succeed in exams
                </p>
                <Link
                  href="/contact"
                  title="Contact Engineers & Doctors School"
                  className="btn-default"
                >
                  Contact Us <i className="fa fa-long-arrow-alt-right"></i>
                </Link>
              </div>
              {/* section-title end */}
            </div>

            <div className="col-lg-6">
              <div className="about-us-section p-0">
                <div className="about-sec">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="abt-col">
                        <Image
                          src="/webImages/icon5.png"
                          alt="Qualified Teachers"
                          width={64}
                          height={64}
                        />
                        <h3>Qualified Teachers</h3>
                        <p>
                          Experienced and caring teachers who guide every
                          student.
                        </p>
                      </div>
                      {/* abt-col end */}
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="abt-col">
                        <Image
                          src="/webImages/icon7.png"
                          alt="STEM-Based Learning"
                          width={64}
                          height={64}
                        />
                        <h3>STEM-Based Learning</h3>
                        <p>
                          Hands-on STEM activities that strengthen critical
                          thinking skills.
                        </p>
                      </div>
                      {/* abt-col end */}
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="abt-col">
                        <Image
                          src="/webImages/icon9.png"
                          alt="Student Support"
                          width={64}
                          height={64}
                        />
                        <h3>Student Support</h3>
                        <p>
                          A safe, supportive environment focused on every child.
                        </p>
                      </div>
                      {/* abt-col end */}
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="abt-col">
                        <Image
                          src="/webImages/icon8.png"
                          alt="Robotics & Technology"
                          width={64}
                          height={64}
                        />
                        <h3>Robotics &amp; Technology</h3>
                        <p>
                          Technology integration that prepares students for the
                          future.
                        </p>
                      </div>
                      {/* abt-col end */}
                    </div>
                  </div>
                </div>
                {/* about-rw end */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* benifit-section end */}

   

      {/* classes-section start */}
      <section className="classes-section">
        <div className="container">
          <div className="sec-title">
            <h2>Events &amp; Student Activities</h2>
            <p>
              At Engineers &amp; Doctors School, students take part in engaging
              event projects, sports activities, art and cultural programs, and
              STEM-based competitions that build confidence, teamwork, and
              real-world skills beyond the classroom.
            </p>
          </div>
          {/* sec-title end */}

          <div className="classes-sec">
            <div className="row classes-carousel">
              {/* Card 1 */}
              <div className="col-lg-12">
                <div
                  className="classes-col wow fadeInUp"
                  data-wow-duration="1000ms"
                >
                  <div className="class-thumb">
                    <Image
                      src="/webImages/img1.jpg"
                      alt="Robotics Fair"
                      width={0}
                      height={0}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="w-100 h-auto"
                    />
                    <Link
                      href="/"
                      title="Robotics Fair & Science Projects"
                      className="crt-btn"
                    >
                      <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                  <div className="class-info">
                    <h3>
                      <Link
                        href="/"
                        title="Robotics Fair & Science Projects"
                      >
                        Robotics Fair &amp; Science Projects
                      </Link>
                    </h3>
                    <p>
                      Robotics projects spark curiosity and love for science.
                    </p>
                  </div>
                </div>
                {/* classes-col end */}
              </div>

              {/* Card 2 */}
              <div className="col-lg-12">
                <div
                  className="classes-col wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="200ms"
                >
                  <div className="class-thumb">
                    <Image
                      src="/webImages/img2.jpg"
                      alt="Art Exhibitions"
                      width={0}
                      height={0}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="w-100 h-auto"
                    />
                    <Link
                      href="/"
                      title="Art Exhibitions & Cultural Festivals"
                      className="crt-btn"
                    >
                      <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                  <div className="class-info">
                    <h3>
                      <Link
                        href="/"
                        title="Art Exhibitions & Cultural Festivals"
                      >
                        Art Exhibitions &amp; Cultural Festivals
                      </Link>
                    </h3>
                    <p>
                      Art events grow confidence, celebrate culture and
                      creativity.
                    </p>
                  </div>
                </div>
                {/* classes-col end */}
              </div>

              {/* Card 3 */}
              <div className="col-lg-12">
                <div
                  className="classes-col wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="400ms"
                >
                  <div className="class-thumb">
                    <Image
                      src="/webImages/img3.jpg"
                      alt="Sports Day"
                      width={0}
                      height={0}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="w-100 h-auto"
                    />
                    <Link
                      href="/"
                      title="Sports Day & Outdoor Games"
                      className="crt-btn"
                    >
                      <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                  <div className="class-info">
                    <h3>
                      <Link
                        href="/"
                        title="Sports Day & Outdoor Games"
                      >
                        Sports Day &amp; Outdoor Games
                      </Link>
                    </h3>
                    <p>
                      Sports activities build fitness, discipline, teamwork and
                      resilience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-lg-12">
                <div
                  className="classes-col wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="600ms"
                >
                  <div className="class-thumb">
                    <Image
                      src="/webImages/img4.jpg"
                      alt="Clubs & Trips"
                      width={0}
                      height={0}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="w-100 h-auto"
                    />
                    <Link
                      href="/"
                      title="Clubs, Trips & Co-Curriculars"
                      className="crt-btn"
                    >
                      <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                  <div className="class-info">
                    <h3>
                      <Link
                        href="/"
                        title="Clubs, Trips & Co-Curriculars"
                      >
                        Clubs, Trips &amp; Co-Curriculars
                      </Link>
                    </h3>
                    <p>
                      Clubs and trips explore interests, friendships and
                      experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lnk-dv text-center">
              <Link
                href="/"
                title="View all events and activities"
                className="btn-default"
              >
                View All Events &amp; Activities{" "}
                <i className="fa fa-long-arrow-alt-right"></i>
              </Link>
            </div>
          </div>
          {/* classes-sec end */}
        </div>
      </section>
      {/* classes-section end */}

      {/* newsletter-sec starts here */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-sec">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="newsz-ltr-text">
                  <h2>
                    Build Your Career
                    <br />
                    With Us
                  </h2>
                </div>
                {/* newsz-ltr-text end */}
              </div>

              <div className="col-lg-6">
                <Link
                  href="/contact"
                  title="Book an Appointment"
                  className="btn-default"
                >
                  Book an Appointment{" "}
                  <i className="fa fa-long-arrow-alt-right"></i>
                </Link>
                {/* newsletter-form end */}
              </div>
            </div>
          </div>
          {/* newsletter-sec end */}
        </div>
      </section>
      {/* newsletter-sec end */}
    </>
  );
}
