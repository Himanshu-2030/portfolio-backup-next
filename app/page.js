'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { initializeTimelineAnimation } from '../lib/timelineAnimation';
import '../styles/style.css'
import '../styles/mediaqueries.css'
import profilePic from '../public/assets/pic crop 1.jpg';
import  aboutPic from '../public/assets/about pic.jpg'
import campusTour from '../public/assets/Campus Tour.png'
import chatOmatic from '../public/assets/Chat-o-matic.png'
import movieWebsite from '../public/assets/movie website.png'
import wheelChairAccessible from '../public/assets/wheel chair Accessible.png'
import textGif from '../public/assets/video.gif'
import { IonIcon } from 'react-ion-icon';

export default function Home() {
    useEffect(() => {
        initializeTimelineAnimation();
      }, []);

  return (
    <div>
      {/* Profile Section */}
      <section id="profile">
        <div className="section__pic-container">
          <Image
            src= {profilePic}
            alt="Himanshu Nirmalkar profile pic"
            className="profile-pic"
            loading="lazy"
            width={150}
            height={150}
          />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Himanshu Nirmalkar</h1>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => window.location.href='https://drive.google.com/file/d/1odzsc4ACNb1XVI9oaOYnDZJNp8p6doed/view?usp=sharing'}
            >
              Resume
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => window.location.href='/#contact'}
            >
              Contact
            </button>
          </div>
          <div id="socials-container">
            <ion-icon
              name="logo-linkedin"
              size="large"
              onClick={() => window.location.href='https://in.linkedin.com/in/himanshu-nirmalkar'}
              className="icon"
            ></ion-icon>

            <ion-icon
              name="logo-github"
              size="large"
              onClick={() => window.location.href='https://github.com/Himanshu-2030'}
              className="icon"
            ></ion-icon>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <Image
              src={aboutPic}
              alt="Profile picture"
              className="about-pic"
              loading="lazy"
              width={200}
              height={200}
            />
          </div>
          <div className="about-details-container">
            <div className="details-container">
              <ion-icon name="stats-chart-outline" size="large"></ion-icon>
              <h3>Education</h3>
              <p>B.tech CSE AIML<br />2021 - 2025</p>
              <p>12th<br /> 2020 - 2021</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Skills</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Development</h2>
              <div className="article-container">
                <article>
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <div>
                    <h3>CSS/SCSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <div>
                    <h3>Json</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <div>
                    <h3>JavaScript</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <div>
                    <h3>Github</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <div>
                    <h3>React</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <div>
                    <h3>Node</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <div>
                    <h3>Mongodb</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <div>
                    <h3>Express</h3>
                    <p>Basic</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline">
        <p className="section__text__p1">Experience</p>
        <h1 className="title">So far</h1>
        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-content">
              <h2>TedxSSTC Tech Team Lead <span className="timeline-date">Present</span></h2>
              <p>Leading the tech team for TedxSSTC, overseeing all technical aspects and ensuring seamless event execution.</p>
            </div>
            <div className="timeline-marker"></div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h2>SWE Fellow (@Headstarter AI) <span className="timeline-date">Present</span></h2>
            </div>
            <div className="timeline-marker"></div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h2>NITRR Summer Intern <span className="timeline-date">May - June (2024)</span></h2>
              <p>Gained hands-on experience in web application security, including insights into web penetration testing and OWASP Top 10 best practices.</p>
            </div>
            <div className="timeline-marker"></div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h2>Swaang Club <span className="timeline-date">(2022 - 2023)</span></h2>
              <p>Core member of the dramatics club, involved in Nukkad, Acting, Street Plays, and Cinematics, contributing to various theatrical performances.</p>
            </div>
            <div className="timeline-marker"></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <p className="section__text__p1">Browse</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <Image
                  src = {campusTour}
                  alt="Project 1"
                  className="project-img"
                  width={300}
                  height={200}
                />
              </div>
              <h2 className="experience-sub-title project-title">Campus Virtual Tour</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href='https://himanshu-2030.github.io/Campus-virtual-Tour-/'}
                >
                  Go Live
                </button>
              </div>
            </div>

            <div className="details-container color-container">
              <div className="article-container">
                <Image
                  src = {chatOmatic}
                  alt="Project 2"
                  className="project-img"
                  width={300}
                  height={200}
                />
              </div>
              <h2 className="experience-sub-title project-title">Chat-O-Matic</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href='https://prashansa2003.github.io/Chat-o-matic/'}
                >
                  Go Live
                </button>
              </div>
            </div>

            <div className="details-container color-container">
              <div className="article-container">
                <Image
                  src={movieWebsite}
                  alt="Movie Website"
                  className="project-img"
                  width={300}
                  height={200}
                />
              </div>
              <h2 className="experience-sub-title project-title">Movie Website</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href='https://himanshu-2030.github.io/binge-movie//'}
                >
                  Go Live
                </button>
              </div>
            </div>

            <div className="details-container color-container">
              <div className="article-container">
                <Image
                  src={wheelChairAccessible}
                  alt="Wheel Chair Accessible Places"
                  className="project-img"
                  width={300}
                  height={200}
                />
              </div>
              <h2 className="experience-sub-title project-title">Wheel Chair Accessible Places</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href='https://himanshu-2030.github.io/wheel-chair-accessibility/'}
                >
                  Go Live
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GIF Section */}
      <div className="gif-container">
        <Image
          src={textGif}
          alt="gif"
          className="gif"
          width={800}
          height={450}
          unoptimized
        />
      </div>

      {/* Contact Section */}
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Connect with Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <ion-icon
              name="mail-unread-outline"
              size="large"
              className="icon"
              onClick={() => window.location.href='mailto:himanshunirmalkar2003@gmail.com'}
            ></ion-icon>
            <p><a href="mailto:himanshunirmalkar2003@gmail.com">Mail</a></p>
          </div>
          <div className="contact-info-container">
            <ion-icon
              name="logo-linkedin"
              size="large"
              className="icon"
              onClick={() => window.location.href='https://in.linkedin.com/in/himanshu-nirmalkar'}
            ></ion-icon>
            <p><a href="https://in.linkedin.com/in/himanshu-nirmalkar">LinkedIn</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}