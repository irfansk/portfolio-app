import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
import Header from './view/Header'
import Footer from './view/Footer'

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <Header />
      <div id="resume" className="about background-alt mb-16">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Resume</h2>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="md:container md:mx-auto text-center">
                <a href="/assets/Irfan_SK.pdf"
                  target="_blank"
                  className="px-6 py-3 text-primary-100 no-underline bg-primary-500 rounded hover:bg-primary-600 hover:underline hover:text-blue-200">
                    Download
                </a>
                <div className="resume_pdf md:mx-32 drop-shadow-2xl">
                  <Document file={{url: "/assets/Irfan_SK.pdf"}} className="mt-16">
                    <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} renderTextLayer={false} />
                  </Document>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Resume;
