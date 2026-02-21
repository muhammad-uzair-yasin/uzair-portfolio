import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const downloadCV = async () => {
  // Create a temporary container for the CV
  const cvContainer = document.createElement('div');
  cvContainer.id = 'cv-temp-container';
  cvContainer.style.position = 'fixed';
  cvContainer.style.left = '-9999px';
  cvContainer.style.top = '0';
  cvContainer.style.width = '210mm'; // A4 width
  cvContainer.style.backgroundColor = '#ffffff';
  cvContainer.style.padding = '0';
  cvContainer.style.margin = '0';
  document.body.appendChild(cvContainer);

  try {
    // Create CV content HTML
    const cvHTML = createCVHTML();
    cvContainer.innerHTML = cvHTML;

    // Small delay to ensure DOM is ready
    await new Promise(resolve => setTimeout(resolve, 100));

    // Wait for any images to load (if any)
    await waitForImages(cvContainer);

    // Additional delay to ensure rendering is complete
    await new Promise(resolve => setTimeout(resolve, 200));

    // Generate PDF
    await generatePDF(cvContainer);

    // Clean up
    if (document.body.contains(cvContainer)) {
      document.body.removeChild(cvContainer);
    }
  } catch (error) {
    console.error('Error generating PDF:', error);
    // Clean up on error
    if (document.body.contains(cvContainer)) {
      document.body.removeChild(cvContainer);
    }
    throw error; // Re-throw to be handled by the component
  }
};

const waitForImages = (container: HTMLElement): Promise<void> => {
  return new Promise((resolve) => {
    const images = container.querySelectorAll('img');
    if (images.length === 0) {
      resolve();
      return;
    }

    let loadedCount = 0;
    const totalImages = images.length;

    const checkComplete = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        setTimeout(resolve, 500); // Small delay to ensure rendering
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        checkComplete();
      } else {
        img.onload = checkComplete;
        img.onerror = checkComplete;
      }
    });
  });
};

const generatePDF = async (element: HTMLElement) => {
  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      width: element.scrollWidth,
      height: element.scrollHeight,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    let imgY = 0;
    let heightLeft = imgHeight * ratio;

    // Handle multi-page PDF
    while (heightLeft > 0) {
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      heightLeft -= pdfHeight;
      if (heightLeft > 0) {
        pdf.addPage();
        imgY = heightLeft - imgHeight * ratio;
      }
    }

    pdf.save('Muhammad_Uzair_CV.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};

const createCVHTML = (): string => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return `
    <div style="background: white; color: black; padding: 30px; font-family: 'Arial', sans-serif; max-width: 800px; margin: 0 auto;">
      <!-- Header -->
      <div style="text-align: center; margin-bottom: 30px; border-bottom: 3px solid #ea580c; padding-bottom: 20px;">
        <h1 style="font-size: 36px; font-weight: bold; color: #1f2937; margin-bottom: 8px;">Muhammad Uzair</h1>
        <p style="font-size: 20px; color: #4b5563; margin-bottom: 12px;">Full-Stack Developer & Generative AI Expert</p>
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; font-size: 14px; color: #6b7280;">
          <span>📧 uzair@muhammad-uzair.com</span>
          <span>💻 github.com/muhammad-uzair-yasin</span>
          <span>📍 Toba Tek Singh, Pakistan</span>
        </div>
      </div>

      <!-- Professional Summary -->
      <section style="margin-bottom: 25px;">
        <h2 style="font-size: 24px; font-weight: bold; color: #ea580c; margin-bottom: 12px; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px;">Professional Summary</h2>
        <p style="color: #374151; line-height: 1.6; font-size: 14px;">
          Full-Stack Developer and Generative AI Expert with expertise in Python, FastAPI, Next.js, and TypeScript. 
          Specialized in developing AI-powered applications, backend systems, and full-stack solutions. Passionate about 
          leveraging cutting-edge technologies like LangChain, LangGraph, and CrewAI to create efficient and scalable 
          products. Experienced in building AI-driven applications and scalable solutions using modern frameworks.
        </p>
      </section>

      <!-- Technical Skills -->
      <section style="margin-bottom: 25px;">
        <h2 style="font-size: 24px; font-weight: bold; color: #ea580c; margin-bottom: 12px; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px;">Technical Skills</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <div>
            <h3 style="font-weight: 600; color: #1f2937; margin-bottom: 8px; font-size: 16px;">Backend Development</h3>
            <ul style="list-style: disc; padding-left: 20px; color: #374151; font-size: 13px; line-height: 1.8;">
              <li>Python</li>
              <li>FastAPI</li>
              <li>Django</li>
              <li>SQL</li>
              <li>RESTful API Design</li>
            </ul>
          </div>
          <div>
            <h3 style="font-weight: 600; color: #1f2937; margin-bottom: 8px; font-size: 16px;">AI & Machine Learning</h3>
            <ul style="list-style: disc; padding-left: 20px; color: #374151; font-size: 13px; line-height: 1.8;">
              <li>LangChain</li>
              <li>LangGraph</li>
              <li>CrewAI</li>
              <li>GeminiAI</li>
              <li>Generative AI</li>
            </ul>
          </div>
          <div>
            <h3 style="font-weight: 600; color: #1f2937; margin-bottom: 8px; font-size: 16px;">Frontend Development</h3>
            <ul style="list-style: disc; padding-left: 20px; color: #374151; font-size: 13px; line-height: 1.8;">
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 style="font-weight: 600; color: #1f2937; margin-bottom: 8px; font-size: 16px;">Other Technologies</h3>
            <ul style="list-style: disc; padding-left: 20px; color: #374151; font-size: 13px; line-height: 1.8;">
              <li>Numpy</li>
              <li>Pandas</li>
              <li>Git & Version Control</li>
              <li>Streamlit</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section style="margin-bottom: 25px;">
        <h2 style="font-size: 24px; font-weight: bold; color: #ea580c; margin-bottom: 12px; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px;">Key Projects</h2>
        <div style="display: flex; flex-direction: column; gap: 15px;">
          <div>
            <h3 style="font-weight: 600; color: #1f2937; font-size: 16px; margin-bottom: 4px;">Postsiva – Facebook Automation</h3>
            <p style="font-size: 12px; color: #6b7280; margin-bottom: 6px;">Live: facebook.postsiva.com</p>
            <p style="color: #374151; font-size: 13px; line-height: 1.6; margin-bottom: 4px;">
              Next-generation Facebook automation platform featuring smart automation with human-like behavior, 
              precision targeting, advanced analytics, and enterprise-grade safety. Built FastAPI backend architecture 
              for real-time automation and campaign management.
            </p>
            <p style="font-size: 11px; color: #6b7280; font-style: italic;">Tech: FastAPI, Python, Next.js, AI, REST API</p>
          </div>
          <div>
            <h3 style="font-weight: 600; color: #1f2937; font-size: 16px; margin-bottom: 4px;">Postsiva – YouTube Automation</h3>
            <p style="font-size: 12px; color: #6b7280; margin-bottom: 6px;">Live: youtube.postsiva.com</p>
            <p style="color: #374151; font-size: 13px; line-height: 1.6; margin-bottom: 4px;">
              YouTube automation platform that generates AI-powered titles, descriptions, thumbnails, and timestamps. 
              Features smart scheduling, auto-publishing, channel analytics, and AI Comment Replier. Integrated 
              YouTube Data API and YouTube Analytics API.
            </p>
            <p style="font-size: 11px; color: #6b7280; font-style: italic;">Tech: FastAPI, Python, Next.js, AI, YouTube APIs</p>
          </div>
          <div>
            <h3 style="font-weight: 600; color: #1f2937; font-size: 16px; margin-bottom: 4px;">Postsiva</h3>
            <p style="font-size: 12px; color: #6b7280; margin-bottom: 6px;">Live: postsiva.com</p>
            <p style="color: #374151; font-size: 13px; line-height: 1.6; margin-bottom: 4px;">
              Comprehensive social automation tool for streamlining social media management workflows. Architected and 
              implemented entire backend infrastructure using FastAPI with advanced AI features for intelligent content 
              automation, scheduling, and analytics.
            </p>
            <p style="font-size: 11px; color: #6b7280; font-style: italic;">Tech: FastAPI, Python, Next.js, AI, REST API</p>
          </div>
          <div>
            <h3 style="font-weight: 600; color: #1f2937; font-size: 16px; margin-bottom: 4px;">Agentia (AI base website)</h3>
            <p style="font-size: 12px; color: #6b7280; margin-bottom: 6px;">GitHub: github.com/Uzair-DeVops/Agentia</p>
            <p style="color: #374151; font-size: 13px; line-height: 1.6; margin-bottom: 4px;">
              A complete website featuring AI tools and other projects. Built with GeminiAI, Python, HTML, JavaScript, and Tailwind CSS.
            </p>
            <p style="font-size: 11px; color: #6b7280; font-style: italic;">Tech: GeminiAI, Python, HTML, JavaScript, Tailwind CSS</p>
          </div>
          <div>
            <h3 style="font-weight: 600; color: #1f2937; font-size: 16px; margin-bottom: 4px;">Complete AI Application</h3>
            <p style="font-size: 12px; color: #6b7280; margin-bottom: 6px;">GitHub: github.com/Uzair-DeVops/Complete_AI_Application</p>
            <p style="color: #374151; font-size: 13px; line-height: 1.6; margin-bottom: 4px;">
              Developed agentic AI applications using LangChain and LLMs, making AI more interactive and context-aware.
            </p>
            <p style="font-size: 11px; color: #6b7280; font-style: italic;">Tech: LangChain, Python, Gemini</p>
          </div>
          <div>
            <h3 style="font-weight: 600; color: #1f2937; font-size: 16px; margin-bottom: 4px;">AI Image Generator</h3>
            <p style="font-size: 12px; color: #6b7280; margin-bottom: 6px;">GitHub: github.com/muhammad-uzair-yasin/AI-Image-Generator</p>
            <p style="color: #374151; font-size: 13px; line-height: 1.6; margin-bottom: 4px;">
              AI-powered image generator with real-time generation, customizable parameters, and gallery view. 
              Built with Next.js, TypeScript, Prisma, and Neon for robust data management.
            </p>
            <p style="font-size: 11px; color: #6b7280; font-style: italic;">Tech: Next.js, TypeScript, ShadCN, Prisma, Neon</p>
          </div>
        </div>
      </section>

      <!-- Certifications -->
      <section style="margin-bottom: 25px;">
        <h2 style="font-size: 24px; font-weight: bold; color: #ea580c; margin-bottom: 12px; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px;">Certifications</h2>
        <ul style="list-style: none; padding: 0; color: #374151; font-size: 13px; line-height: 2;">
          <li style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span><strong>Crash Course on Python</strong> - Google</span>
            <span style="color: #6b7280;">2024</span>
          </li>
          <li style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span><strong>AI & Machine Learning</strong> - UET</span>
            <span style="color: #6b7280;">2024</span>
          </li>
          <li style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span><strong>Career Essentials in Generative AI</strong> - Microsoft/LinkedIn</span>
            <span style="color: #6b7280;">2024</span>
          </li>
          <li style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span><strong>FastAPI Framework</strong> - Duke University</span>
            <span style="color: #6b7280;">2024</span>
          </li>
          <li style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span><strong>T3 Stack Certification</strong> - T3 Stack</span>
            <span style="color: #6b7280;">2024</span>
          </li>
        </ul>
      </section>

      <!-- Education -->
      <section style="margin-bottom: 25px;">
        <h2 style="font-size: 24px; font-weight: bold; color: #ea580c; margin-bottom: 12px; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px;">Education</h2>
        <div style="margin-bottom: 10px;">
          <p style="font-weight: 600; color: #1f2937; font-size: 14px; margin-bottom: 2px;">Bachelor of Business and Information Technology</p>
          <p style="color: #374151; font-size: 13px;">University of Engineering and Technology, Lahore (2022-Present) - 3.5 CGPA</p>
        </div>
        <div>
          <p style="font-weight: 600; color: #1f2937; font-size: 14px; margin-bottom: 2px;">FSC Pre-Engineering</p>
          <p style="color: #374151; font-size: 13px;">Barrett Hodgson International College (2020-2022) - A+ Grade</p>
        </div>
      </section>

      <!-- Footer -->
      <div style="text-align: center; font-size: 11px; color: #9ca3af; margin-top: 30px; padding-top: 15px; border-top: 1px solid #e5e7eb;">
        <p>Generated from Portfolio - Last Updated: ${currentDate}</p>
      </div>
    </div>
  `;
};
