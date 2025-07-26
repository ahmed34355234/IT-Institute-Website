
import "./App.css"

import { FaBars } from 'react-icons/fa';



function App() {

  return (

    <section>



      {/* Home Page */ }
      <section className="home-page">
        <header className="header">

          {/* Header Headig */ }

          <h1>
            Fit
          </h1>

          {/* Header Navigation  */ }

          <FaBars className="icon" ></FaBars>
          <div className="links">
            <nav>
              <a href="#Home" className="active"> Home </a>
              <a href="#Courses">Courses</a>
              <a href="#About">About</a>
              <a href="#Reviews">Reviews</a>
              <a href="#Contact">Contact Us</a>
            </nav>

            {/* Header Button */ }

            <a href="#Contact" className="btn">Lets Talk</a>
          </div>


        </header>

        {/* Main Page */ }

        <div className="main-content" id="Home">

          {/* Main Page Heading */ }

          <h3 className="heading">FIT Computer Institute – Learn  Build. Succeed - Join Today</h3>

          {/* Main Page Sub-heading */ }

          <p className="sub-heading">FIT computer institute one of the best computer institute in rawalpindi offer 20% discount for a limited to enroll the courses that want the most. First 100 Students can get 20% discount on all the courses that they have purchased.</p>
        </div>
      </section>

      {/* Scrolling Badge */ }
      <div className="scroll-wrapper">
        <div className="scroll-text">
          Frontend Development &nbsp; • &nbsp; Full-Stack Development &nbsp; • &nbsp; PHP MySQL &nbsp; • &nbsp; Graphic designing &nbsp; • &nbsp; MERN Stack Development &nbsp; • &nbsp; Six Month Short Courses &nbsp; • &nbsp; C++ Computer Course &nbsp; • &nbsp; Java Programming &nbsp; • &nbsp; Adobe Photoshop &nbsp; • &nbsp; ASP .NET MVC Course &nbsp; • &nbsp; Microsoft Office &nbsp; • &nbsp; Coral Draw Course &nbsp; • &nbsp; Mobile App Development &nbsp; • &nbsp; React Native App &nbsp; • &nbsp; Certificate In IT &nbsp; • &nbsp; c# &nbsp; • &nbsp; Adobe Illustrator &nbsp; • &nbsp; Python Programming &nbsp; • &nbsp; Game Development &nbsp; • &nbsp; React Js Course &nbsp; • &nbsp; Social Media Marketing &nbsp; • &nbsp; UI/UX Course &nbsp; • &nbsp; Amazon Course &nbsp; • &nbsp; Flutter Course
        </div>
      </div>
      {/* Courses Section*/ }
      <h2 className="courses-heading">Courses</h2>
      <section className="Courses" id="Courses">
        {/* card 1 */ }
        <div className="course-cards">
          <div className="course-card">
            <div className="course-img">
              <img src="https://images.unsplash.com/photo-1556636530-6b7482d80e3d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZyb250JTIwZW5kJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww" alt=""></img>
            </div>
            <div className="card-discription">
              <h3>Front-end Developer</h3>
              <p>Master the art of creating stunning, responsive websites with our Frontend Development Course.</p>
              <div className="card-order">
                <h5>$87.98</h5>

              </div>
            </div>
          </div>
        </div>


        {/* card 2 */ }
        <div className="course-cards">
          <div className="course-card">
            <div className="course-img">
              <img src="https://plus.unsplash.com/premium_photo-1678565202049-9e37b2da8060?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGZ1bGwlMjBzdGFja3xlbnwwfHwwfHx8MA%3D%3D" alt=""></img>
            </div>
            <div className="card-discription">
              <h3>Full-Stack Developer</h3>
              <p>Kickstart your tech career with our Full Stack Development Course, mastering both frontend and backend technologies.</p>
              <div className="card-order">
                <h5>$122.71</h5>

              </div>
            </div>
          </div>
        </div>

        {/* card 3 */ }
        <div className="course-cards">
          <div className="course-card">
            <div className="course-img">
              <img src="https://images.unsplash.com/photo-1708502046544-89f8d7b276f1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWljcm9zb2Z0JTIwb2ZmaWNlfGVufDB8fDB8fHww" alt=""></img>
            </div>
            <div className="card-discription">
              <h3>Microsoft Office</h3>
              <p>Boost your productivity with our Microsoft Office Course, covering Word, Excel, PowerPoint & more.

              </p>
              <div className="card-order">
                <h5>$36.75</h5>

              </div>
            </div>
          </div>
        </div>

        {/* card 4 */ }
        <div className="course-cards">
          <div className="course-card">
            <div className="course-img">
              <img src="https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhwfGVufDB8fDB8fHww" alt=""></img>
            </div>
            <div className="card-discription">
              <h3>PHP MySQL</h3>
              <p>Learn how to create, connect, and manage databases while developing powerful web applications.</p>
              <div className="card-order">
                <h5>$87.98</h5>

              </div>
            </div>
          </div>
        </div>

        {/* card 5 */ }
        <div className="course-cards">
          <div className="course-card">
            <div className="course-img">
              <img src="https://plus.unsplash.com/premium_photo-1661337153381-dd17cf9a851b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdyYXBoaWMlMjBkZXNpZ25pbmd8ZW58MHx8MHx8fDA%3D" alt=""></img>
            </div>
            <div className="card-discription">
              <h3>Graphic designing</h3>
              <p>Unleash your creativity with our Graphic Designing Course, mastering tools like Photoshop, Illustrator, and Canva.</p>
              <div className="card-order">
                <h5>$77.52</h5>

              </div>
            </div>
          </div>
        </div>

        {/* card 6 */ }

        <div className="course-cards">
          <div className="course-card">
            <div className="course-img">
              <img src="https://images.unsplash.com/photo-1573495627361-d9b87960b12d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcxfHxtZXJuJTIwc3RhY2slMjBkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D" alt=""></img>
            </div>
            <div className="card-discription">
              <h3>MERN Stack Development</h3>
              <p>Become a job-ready developer with our MERN Stack Development Course, covering MongoDB, Express.js, React, and Node.js.</p>
              <div className="card-order">
                <h5>$175.00</h5>

              </div>
            </div>
          </div>
        </div>
        {/* card 7 */ }
        <div className="course-cards">
          <div className="course-card">
            <div className="course-img">
              <img src="https://plus.unsplash.com/premium_photo-1691784080844-8300ab4c6790?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QyUyQiUyQiUyMENvbXB1dGVyfGVufDB8fDB8fHww" alt=""></img>
            </div>
            <div className="card-discription">
              <h3><strong>Six</strong> Month Short Courses</h3>
              <p>Earn a 6-Month Short Course Certificate to boost your skills and career in less time..</p>
              <div className="card-order">
                <h5>$122.71 </h5>

              </div>
            </div>
          </div>
        </div>
        {/* card 8 */ }
        <div className="course-cards">
          <div className="course-card">
            <div className="course-img">
              <img src="https://plus.unsplash.com/premium_photo-1677269465435-56624b86c241?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QyUyQiUyQiUyMENvbXB1dGVyfGVufDB8fDB8fHww" alt=""></img>
            </div>
            <div className="card-discription">
              <h3>C++ Computer Course</h3>
              <p>Learn the fundamentals of programming with our C++ Computer Course, perfect for beginners.</p>
              <div className="card-order">
                <h5>$36.75</h5>

              </div>
            </div>
          </div>
        </div>
        {/* card 9 */ }
        <div className="course-cards">
          <div className="course-card">
            <div className="course-img">
              <img src="https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEphdmElMjBQcm9ncmFtbWluZ3xlbnwwfHwwfHx8MA%3D%3D" alt=""></img>
            </div>
            <div className="card-discription">
              <h3>Java Programming</h3>
              <p>Kickstart your coding journey with our Java Programming Course, ideal for beginners and intermediates.</p>
              <div className="card-order">
                <h5>$63.00</h5>

              </div>
            </div>
          </div>
        </div>
        {/* card 10 */ }
        <div className="course-cards">
          <div className="course-card">
            <div className="course-img">
              <img src="https://images.unsplash.com/photo-1695634183389-53116dd525a8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fEFkb2JlJTIwUGhvdG9zaG9wfGVufDB8fDB8fHww" alt=""></img>
            </div>
            <div className="card-discription">
              <h3>Adobe Photoshop</h3>
              <p>Unlock your creative potential with our Adobe Photoshop Course, perfect for editing and designing like a pro.</p>
              <div className="card-order">
                <h5>$31.50</h5>

              </div>
            </div>
          </div>
        </div>
        {/* card 11 */ }
        <div className="course-cards">
          <div className="course-card">
            <div className="course-img">
              <img src="https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QVNQJTIwLk5FVHxlbnwwfHwwfHx8MA%3D%3D" alt=""></img>
            </div>
            <div className="card-discription">
              <h3>ASP .NET MVC Course</h3>
              <p>Build powerful web applications with our ASP.NET MVC Course, using C# and the .NET framework.</p>
              <div className="card-order">
                <h5>$105.00</h5>

              </div>
            </div>
          </div>
        </div>
        {/* card 12 */ }
        <div className="course-cards">
          <div className="course-card">
            <div className="course-img">
              <img src="https://plus.unsplash.com/premium_photo-1663126346116-f0ccaf232268?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVhY2hpbmd8ZW58MHx8MHx8fDA%3D" alt=""></img>
            </div>
            <div className="card-discription">
              <h3>Coral Draw Course</h3>
              <p>Bring your design ideas to life with our CorelDRAW Course, ideal for logo, flyer, and brochure creation.</p>
              <div className="card-order">
                <h5>$31.50</h5>

              </div>
            </div>
          </div>
        </div>
        {/* card 13 */ }
        <div className="course-cards">
          <div className="course-card">
            <div className="course-img">
              <img src="https://plus.unsplash.com/premium_photo-1661326248013-3107a4b2bd91?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW9iaWxlJTIwQXBwJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt=""></img>
            </div>
            <div className="card-discription">
              <h3>Mobile App Development</h3>
              <p>Create powerful apps with our Mobile App Development Course, covering Android & cross-platform tools.</p>
              <div className="card-order">
                <h5>$87.50</h5>

              </div>
            </div>
          </div>
        </div>
        {/* card 14 */ }
        <div className="course-cards">
          <div className="course-card">
            <div className="course-img">
              <img src="https://plus.unsplash.com/premium_photo-1718740619210-4558cff6f2b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UmVhY3QlMjBuYXRpdmUlMjBhcHB8ZW58MHx8MHx8fDA%3D" alt=""></img>
            </div>
            <div className="card-discription">
              <h3>React Native App</h3>
              <p>Build real mobile apps for Android & iOS with our React Native App Development Course.</p>
              <div className="card-order">
                <h5>$122.50</h5>

              </div>
            </div>
          </div>
        </div>
        {/* card 15 */ }
        <div className="course-cards">
          <div className="course-card">
            <div className="course-img">
              <img src="https://images.unsplash.com/photo-1573496799822-b0557c9e2f41?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGl0fGVufDB8fDB8fHww" alt=""></img>
            </div>
            <div className="card-discription">
              <h3>Certificate In IT</h3>
              <p>Start your tech journey with our Certificate in IT, covering essential computer and software skills.</p>
              <div className="card-order">
                <h5>$122.50</h5>

              </div>
            </div>
          </div>
        </div>
        {/* card 16 */ }
        <div className="course-cards">
          <div className="course-card">
            <div className="course-img">
              <img src="https://plus.unsplash.com/premium_photo-1670044020104-6a0e55a177c0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YyUyM3xlbnwwfHwwfHx8MA%3D%3D" alt=""></img>
            </div>
            <div className="card-discription">
              <h3>c#</h3>
              <p>Learn modern programming with our C# Course, perfect for building desktop and web applications.</p>
              <div className="card-order">
                <h5>$87.50 </h5>

              </div>
            </div>
          </div>
        </div>
        {/* card 17 */ }
        <div className="course-cards">
          <div className="course-card">
            <div className="course-img">
              <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWRvYmUlMjBJbGx1c3RyYXRvcnxlbnwwfHwwfHx8MA%3D%3D" alt=""></img>
            </div>
            <div className="card-discription">
              <h3>Adobe Illustrator</h3>
              <p>Master vector design with our Adobe Illustrator Course, ideal for creating logos, icons, and illustrations.</p>
              <div className="card-order">
                <h5>$31.50 </h5>

              </div>
            </div>
          </div>
        </div>
        {/* card 18 */ }
        <div className="course-cards">
          <div className="course-card">
            <div className="course-img">
              <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFB5dGhvbiUyMFByb2dyYW1taW5nfGVufDB8fDB8fHww" alt=""></img>
            </div>
            <div className="card-discription">
              <h3>Python Programming</h3>
              <p>Learn basics to advanced concepts including data handling, automation, and web development with Python Programming.</p>
              <div className="card-order">
                <h5>$122.50 </h5>

              </div>
            </div>
          </div>
        </div>
        {/* card 19 */ }
        <div className="course-cards">
          <div className="course-card">
            <div className="course-img">
              <img src="https://plus.unsplash.com/premium_photo-1682140932416-8b011dfa9b4b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R2FtZSUyMERldmVsb3BtZW50fGVufDB8fDB8fHww" alt=""></img>
            </div>
            <div className="card-discription">
              <h3>Game Development</h3>
              <p>Turn your ideas into reality with our Game Development Course, learning to create fun and interactive games.</p>
              <div className="card-order">
                <h5>$175.00</h5>

              </div>
            </div>
          </div>
        </div>
        {/* card 20 */ }
        <div className="course-cards">
          <div className="course-card">
            <div className="course-img">
              <img src="https://images.unsplash.com/photo-1672307974995-cd253f7f7eeb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWN0JTIwanN8ZW58MHx8MHx8fDA%3D" alt=""></img>
            </div>
            <div className="card-discription">
              <h3>React Js Course</h3>
              <p>Build modern, dynamic web apps with our React JS Course, mastering components and state management.</p>
              <div className="card-order">
                <h5>$122.50</h5>

              </div>
            </div>
          </div>
        </div>
        {/* card 21 */ }
        <div className="course-cards">
          <div className="course-card">
            <div className="course-img">
              <img src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvY2lhbCUyMG1lZGlhJTIwbWFya2V0aW5nfGVufDB8fDB8fHww" alt=""></img>
            </div>
            <div className="card-discription">
              <h3>Social Media Marketing</h3>
              <p>Grow your brand online with our Social Media Marketing Course, covering strategies for all major platforms.</p>
              <div className="card-order">
                <h5>$77.50</h5>

              </div>
            </div>
          </div>
        </div>
        {/* card 22 */ }
        <div className="course-cards">
          <div className="course-card">
            <div className="course-img">
              <img src="https://images.unsplash.com/photo-1635405050330-b0824eb1bf26?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHVpJTJGdXh8ZW58MHx8MHx8fDA%3D" alt=""></img>
            </div>
            <div className="card-discription">
              <h3>UI/UX Course</h3>
              <p>Design user-friendly and visually appealing apps with our UI/UX Course, focusing on research and prototyping.</p>
              <div className="card-order">
                <h5>$122.50</h5>

              </div>
            </div>
          </div>
        </div>
        {/* card 23 */ }
        <div className="course-cards">
          <div className="course-card">
            <div className="course-img">
              <img src="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1hem9ufGVufDB8fDB8fHww" alt=""></img>
            </div>
            <div className="card-discription">
              <h3>Amazon Course</h3>
              <p>Learn to sell and scale your business on Amazon with our comprehensive Amazon Course.</p>
              <div className="card-order">
                <h5>$105.00</h5>

              </div>
            </div>
          </div>
        </div>
        {/* card 24 */ }
        <div className="course-cards">
          <div className="course-card">
            <div className="course-img">
              <img src="https://plus.unsplash.com/premium_photo-1661371243525-d02768a7feee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGZyb250JTIwZW5kJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww" alt=""></img>
            </div>
            <div className="card-discription">
              <h3>Flutter Course</h3>
              <p>Build beautiful, cross-platform mobile apps with our Flutter Course using Dart programming.</p>
              <div className="card-order">
                <h5>$122.50</h5>

              </div>
            </div>
          </div>
        </div>




      </section>
      {/* About Page */ }
      <section className="about-page" id="About">

        {/* About Image */ }

        <div className="about-img"> <img src="https://images.unsplash.com/photo-1603969409447-ba86143a03f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbiUyMG9uJTIwbGFwdG9wfGVufDB8fDB8fHww" alt="">
        </img>
        </div>

        {/* About Discription */ }

        <div className="about-disccription">
          <h4>
            About us
          </h4>
          <h1>The End Result of All True Learning From FIT Computer institute</h1>
          <p>FIT Computer Institute has been offering computer classes in Rawalpindi since 2012. Our courses are specifically designed for developers, and anyone can learn these computer courses. Our many students learn these courses and they earn money online and also begin their business. Our students' reviews can be accessed on our YouTube channel and review tab, which is updated often</p>

        </div>
      </section>
      {/* Reviews Page */ }
      <h1 className="review-heading">What Our Students Says</h1>
      <section className="review-section" id="Reviews">
        {/* Review card 1 */ }

        <div className="review-card ">
          <div className="studnet-info">
            <img src="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww" alt=""></img>
            <h2>Ahmed</h2>
            <h6>student</h6>
            <h6 className="star">⭐⭐⭐⭐</h6>
          </div>
          <div className="student-review">
            <p>Best computer Courses In Rawalpindi Providing By FIT Computer Institute. I Learn Web Development Course From This Institute</p>
          </div>
        </div>

        {/* Review card 2 */ }
        <div className="review-card">
          <div className="studnet-info">
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww" alt=""></img>
            <h2>Aliiii</h2>
            <h6>student</h6>
            <h6 className="star">⭐⭐⭐✩</h6>
          </div>
          <div className="student-review">
            <p>FIT Institute helped me build strong frontend skills.
              The teachers are friendly and explain concepts clearly. I'm more confident now.</p>
          </div>
        </div>
        {/* Review card 3 */ }
        <div className="review-card">
          <div className="studnet-info">
            <img src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww" alt=""></img>
            <h2>Hadi</h2>
            <h6>student</h6>
            <h6 className="star">⭐⭐⭐⭐</h6>
          </div>
          <div className="student-review">
            <p>Great environment with modern teaching methods.
              We learn by doing real projects, not just theory — that’s the best part.</p>
          </div>
        </div>
        {/* Review card 4 */ }
        <div className="review-card">
          <div className="studnet-info">
            <img src="https://images.unsplash.com/photo-1558565701-31805fdd5c64?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbiUyMGNvZGVyfGVufDB8fDB8fHww" alt=""></img>
            <h2>Hassan</h2>
            <h6>student</h6>
            <h6 className="star">⭐⭐⭐⭐</h6>
          </div>
          <div className="student-review">
            <p>Learning React here has been amazing.
              Each concept is explained deeply with hands-on practice and real examples.</p>
          </div>
        </div>
        {/* Review card 5 */ }
        <div className="review-card">
          <div className="studnet-info">
            <img src="https://images.unsplash.com/photo-1726250873166-814c1f2cb74b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbiUyMGNvZGVyfGVufDB8fDB8fHww" alt=""></img>
            <h2>Ibad</h2>
            <h6>student</h6>
            <h6 className="star">⭐⭐⭐✩</h6>
          </div>
          <div className="student-review">
            <p>The institute also guided me to a great internship.
              Supportive teachers and career-focused learning made it all possible.</p>
          </div>
        </div>
        {/* Review card 6 */ }
        <div className="review-card">
          <div className="studnet-info">
            <img src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww" alt=""></img>
            <h2>Ayesha</h2>
            <h6>student</h6>
            <h6 className="star">⭐⭐⭐⭐</h6>
          </div>
          <div className="student-review">
            <p>Safder Sir teaches with passion and real-world experience.
              The updated curriculum makes FIT perfect for beginners and pros alike.</p>
          </div>
        </div>

      </section>
      {/* Contact Section */ }

      <section className="contact-section" id="Contact">
        <footer className="footer">

          {/* Fit  */ }

          <div className="fit">
            <h1>FIT</h1>
            <p>FIT computer institute in rawalpindi providing the service of computer short courses in 2012 in Pakistan. We developed many personalities that working in Different IT sector of Government and private.</p>
          </div>

          {/* Adress */ }

          <div className="adress">
            <h1>Adress</h1>
            <a href="https://www.google.com/maps/dir//2nd+Floor,+FIT+Computer+institute,+Al-Mustafa+Plaza,+near+Chandni+Chowk,+C+Block+Block+C+Satellite+Town,+Rawalpindi,+46000/@33.6314291,72.9910851,24729m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x20cf6919a7b8f77b:0x54a713897aa91ca8!2m2!1d73.0734863!2d33.6314564?entry=ttu&g_ep=EgoyMDI1MDcyMi4wIKXMDSoASAFQAw%3D%3D" target="blank">
              2nd Floor, FIT Computer institute, Al-Mustafa Plaza, near Chandni Chowk, C Block Block C Satellite Town, Rawalpindi, Punjab 46000</a>

            <p>
              03445701828
            </p>
            <a href="https://www.google.com/search?q=hrfutureit%40gmail.com&oq=hrfutureit%40gmail.com&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg60gEHNjc4ajBqN6gCCLACAfEFaMkuGvvYwvQ&sourceid=chrome&ie=UTF-8">
              hrfutureit@gmail.com
            </a>


            {/* Courses Detail */ }

          </div>
          <div className="courses">
            <h1>Courses</h1>
            <p>1 Month course </p>
            <p>2 Month course </p>
            <p>3 Month course </p>
            <p>6 Month course </p>
          </div>

          {/* Blogs */ }

          <div className="blog">
            <h1>Blogs</h1>
            <p>Best computer courses mean? Learn valuebale course for earn money.so fit computer institute providing best computer courses in rawalpindi. beacuse fit computer institute is one of the best computer institute in rawalpindi. What is web development courses? For any kind of work you need a Website. Website is explain you work and Business. so we are introduced best web development courses in rawalpinndi in best computer institute in rawalpindi FIT computer institute.</p>
          </div>
        </footer>
        <hr></hr>
        <p className="last-line">  &copy; 2025 Meer Ahmed Baloch. All rights reserved. </p>

      </section>
    </section>

  );


}



export default App;