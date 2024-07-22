import React from 'react'
import Image from 'next/image'
import Header from './view/Header'
import Footer from './view/Footer'
import styles from '@/styles/about.module.scss'

const about = () => {
  return (
    <>
      <Header />
      <div id="about" className="about background-alt">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About</h2>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className={styles.about_container}>
                <div className={styles.about_img}>
                  <Image
                    className={styles.about_img}
                    width={300}
                    height={300} 
                    src={"/Irfan_Sk.png"} 
                    alt={"Irfan Sk protfolio image"}
                  />
                </div>
                <div className={styles.about_content}>
                  <div className={styles.about_description}>
                    <p>
                      Hello! I am Irfan Sk, a software Developer, INDIA.
                    </p>
                    <p>
                      I have always been passionate about Computers, So I completed my engineering in Computer Science.
                      Ever since I followed the dream of becoming a Software Engineer, I have been a Quick Learner and interested in working on a Good Product.
                      
                    </p>
                    <p>
                    After completing my B.Tech in Computer Science (2018), I spent the first four year running my own startup animation company. Although the venture did not go as planned, it provided me with invaluable experience in technical and creative fields.
                    </p>
                    
                    <div className='md:container md:mx-auto text-center mb-2'>
                      <a 
                        href="/assets/Irfan_SK.pdf"
                        target="_blank"
                        className='px-4 py-2 text-primary-100 no-underline bg-primary-500 rounded hover:bg-primary-600 hover:underline hover:text-blue-200'
                      >
                        Download CV
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="spotify_embed">
          <p> My coding music </p>
          <iframe className="sp"
              src="https://open.spotify.com/embed/playlist/4uG8Cg5DoPsNM2CjVAqKXv"
              width="300" height="380" title="the_midnight"
              style={{borderRadius: 15}}
              frameBorder="0" allow-transparency={true}
              allow="encrypted-media">
          </iframe>
      </div> */}
    <Footer />
    </>
  )
}

export default about
