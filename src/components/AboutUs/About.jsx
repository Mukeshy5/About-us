import React from 'react'
import "./About.css";

const About = () => {

function client_search() {
    const div = document.getElementById('sml-img-1');
    if (div.style.display === 'none' || div.style.display === '') {
        div.style.display = 'block';
        setTimeout(() => {
            div.style.opacity = 1;
        }, 10); // Allow time for display to take effect
    } else {
        div.style.opacity = 0;
        setTimeout(() => {
            div.style.display = 'none';
        }, 500); // Match this duration with the CSS transition
    }
}
// Auto hide/show every 1 seconds
setInterval(client_search, 3000);

function client_search1() {
    const div = document.getElementById('sml-img-2');
    if (div.style.display === 'none' || div.style.display === '') {
        div.style.display = 'block';
        setTimeout(() => {
            div.style.opacity = 1;
        }, 10); // Allow time for display to take effect
    } else {
        div.style.opacity = 0;
        setTimeout(() => {
            div.style.display = 'none';
        }, 300); // Match this duration with the CSS transition
    }
}
// Auto hide/show every 2 seconds
setInterval(client_search1, 1000);

function client_search2 () {
    const div = document.getElementById('sml-img-3');
    if (div.style.display === 'none' || div.style.display === '') {
        div.style.display = 'block';
        setTimeout(() => {
            div.style.opacity = 1;
        }, 10); // Allow time for display to take effect
    } else {
        div.style.opacity = 0;
        setTimeout(() => {
            div.style.display = 'none';
        }, 400); // Match this duration with the CSS transition
    }
}
// Auto hide/show every 3 seconds
setInterval(client_search2, 2200);

function client_search3() {
    const div = document.getElementById('sml-img-4');
    if (div.style.display === 'none' || div.style.display === '') {
        div.style.display = 'block';
        setTimeout(() => {
            div.style.opacity = 1;
        }, 10); // Allow time for display to take effect
    } else {
        div.style.opacity = 0;
        setTimeout(() => {
            div.style.display = 'none';
        }, 280); // Match this duration with the CSS transition
    }
}
// Auto hide/show every 4 seconds
setInterval(client_search3, 1800);

function client_search4() {
    const div = document.getElementById('sml-img-5');
    if (div.style.display === 'none' || div.style.display === '') {
        div.style.display = 'block';
        setTimeout(() => {
            div.style.opacity = 1;
        }, 10); // Allow time for display to take effect
    } else {
        div.style.opacity = 0;
        setTimeout(() => {
            div.style.display = 'none';
        }, 380); // Match this duration with the CSS transition
    }
}
// Auto hide/show every 5 seconds
setInterval(client_search4, 2700);

  return (
    <>
    <section
      id="trusted-clients"
      class="container-wide"
      aria-label="Our Trusted Clients and Company Introduction"
    >
      <div class="accent-orange" aria-hidden="true">About company</div>
      {/* <!-- <h1>Our trusted clients</h1> --> */}
      <p class="description">
        At Qubitnets Technologies, we are a new-age technology startup with a
        core focus on Artificial Intelligence and its real-world applications
        across industries. In just three years, we've positioned ourselves as a
        trusted innovation partner for businesses looking to harness the power
        of AI for automation, insights, and intelligent decision-making.
      </p>
      <div class="trusted-main">
        {/* <!-- Left: Circle with main and small avatars --> */}
        <div
          class="trusted-image-section"
          aria-label="Team members collaborating on a tablet device surrounded by smaller images of team members"
          role="img"
        >
          <img
            class="main-image"
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b6b1b668-c462-43fe-b46c-be148bfa7344.png"
            alt="Two young professional women collaborating and looking at a tablet device in a modern city office setting"
            onerror="this.style.display='none'"
          />
          <img
            id="sml-img-1"
            class="small-avatar top-left"
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2b38ba80-6a8c-49d9-b0bf-63a439704326.png"
            alt="Small team photo of a woman and man smiling inside modern office"
            onerror="this.style.display='none'"
          />
          <img
            id="sml-img-2"
            class="small-avatar top-right"
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2b38ba80-6a8c-49d9-b0bf-63a439704326.png"
            alt="Small circular portrait of a man with a beard smiling"
            onerror="this.style.display='none'"
          />
          <img
            id="sml-img-3"
            class="small-avatar bottom-left"
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2b38ba80-6a8c-49d9-b0bf-63a439704326.png"
            alt="Small circular photo of a man reading papers in a warm office"
            onerror="this.style.display='none'"
          />
          <img
            id="sml-img-4"
            class="small-avatar bottom-right"
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2b38ba80-6a8c-49d9-b0bf-63a439704326.png"
            alt="Small image of a man smiling with red shirt outside"
            onerror="this.style.display='none'"
          />
          <img
            id="sml-img-5"
            class="small-avatar bottom"
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2b38ba80-6a8c-49d9-b0bf-63a439704326.png"
            alt="Small image of a man smiling with red shirt outside"
            onerror="this.style.display='none'"
          />
        </div>
        {/* <!-- Right text content --> */}
        <div class="trusted-text-section">
          <div class="accent-orange small-title" aria-hidden="true">
            Qubitnets Technologies
          </div>
          <h2>
            Foster a supportive and inclusive environment where our team can
            thrive. We believe in doing the right thing, always.
          </h2>
          <ul>
            <li>
              Our vision is simple: to democratize AI and make it accessible,
              practical, and profitable for every business.
            </li>
            <li>
              To support this vision, we’ve built a multi-disciplinary team of
              AI engineers, data scientists, and product developers who deliver
              tailored solutions that solve complex business challenges.
            </li>
          </ul>
          <div class="metrics">
            <div class="metric-item">
              <strong>5+</strong>
              <div class="metric-label">/Years</div>
            </div>
            <div class="metric-right-text">
              Our mission's to drive grow &amp; improve progress.
            </div>
            <div class="metric-item">
              <strong>70k</strong>
              <div class="metric-label">/Growth</div>
            </div>
            <div class="metric-right-text">
              Our mission's to drive grow &amp; improve progress.
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Section 2: What Is Visionet? + Cards --> */}
    <section
      id="visionet-section"
      aria-label="About Visionet IT services company"
    >
      <div id="visionet-header">
        <h2>What Is Visionet?</h2>
        <p>
          Visionet is a leading IT services firm delivering digital experiences,
          enterprise modernization, Data &amp; AI applications, and managed IT
          services. We leverage digital, data, and cloud technologies to meet
          clients’ needs efficiently. Serving diverse sectors, we simplify
          complexities and foster innovation. With a global presence, Visionet
          ensures measurable business impact and a unique partnership
          experience.
        </p>
      </div>
      <div class="visionet-cards" role="list">
        <article
          class="visionet-card"
          role="listitem"
          tabindex="0"
          aria-label="Visionet purpose: To empower people and organizations to continually innovate and achieve excellence by engineering technology solutions"
        >
          <svg
            class="icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8l2 4 3 1" />
          </svg>
          <h3>Our purpose</h3>
          <p>
            To empower people and organizations to continually innovate and
            achieve excellence by engineering technology solutions.
          </p>
        </article>
        <article
          class="visionet-card"
          role="listitem"
          tabindex="0"
          aria-label="Visionet vision: To lead the way to a future where our engineering expertise innovatively shapes and simplifies tomorrow, profoundly enriching lives and redefining the impact of technology"
        >
          <svg
            class="icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M3 9l6-6 6 6" />
            <path d="M9 21V9h6" />
            <circle cx="16" cy="16" r="2" />
          </svg>
          <h3>Our vision</h3>
          <p>
            To lead the way to a future where our engineering expertise
            innovatively shapes and simplifies tomorrow, profoundly enriching
            lives and redefining the impact of technology.
          </p>
        </article>
        <article
          class="visionet-card"
          role="listitem"
          tabindex="0"
          aria-label="Visionet mission: Harness the synergistic power of engineering and technology to solve complex challenges and enhance lives. We are committed to innovating solutions that simplify, empower, and transform"
        >
          <svg
            class="icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M17 3l4 4-4 4" />
            <path d="M7 21v-2a4 4 0 014-4h4" />
            <path d="M2 13L7 8" />
          </svg>
          <h3>Our mission</h3>
          <p>
            Harness the synergistic power of engineering and technology to solve
            complex challenges and enhance lives. We are committed to innovating
            solutions that simplify, empower, and transform.
          </p>
        </article>
        <article
          class="visionet-card"
          role="listitem"
          tabindex="0"
          aria-label="Who we are: We are an engineering company with a heart that is guided by purpose, vision and values. Driven by the principle of crafting solutions for critical business problems, we embrace innovation, creativity, and the spirit of pushing boundaries"
        >
          <svg
            class="icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M21 10v6a2 2 0 01-2 2h-5" />
            <circle cx="9" cy="7" r="4" />
            <path d="M6 21v-2a4 4 0 014-4h6" />
          </svg>
          <h3>Who we are</h3>
          <p>
            We are an engineering company with a heart that is guided by
            purpose, vision and values. Driven by the principle of crafting
            solutions for critical business problems, we embrace innovation,
            creativity, and the spirit of pushing boundaries. <br /><br />
            At Visionet, we pride ourselves on being committed to using
            technology not just as a tool, but as a catalyst to make lives
            easier for our clients and their customers.
          </p>
        </article>
      </div>
    </section>

    {/* <!-- Section 3: Legacy of engineering excellence --> */}
    <section id="legacy-section" aria-label="Legacy of engineering excellence">
      <h2>A legacy of engineering excellence</h2>
      <div class="legacy-cards" role="list">
        <article
          class="legacy-card legacy-card1"
          role="listitem"
          tabindex="0"
          aria-label="27 plus years of delivering excellence"
        >
          <svg
            class="svg-img"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          <strong>27+</strong>
          <small>Years of delivering excellence</small>
        </article>
        <article
          class="legacy-card legacy-card2"
          role="listitem"
          tabindex="0"
          aria-label="9,500 plus employees"
        >
          <svg
            class="svg-img"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <circle cx="12" cy="7" r="4" />
            <path d="M5.5 21a9 9 0 0113 0" />
          </svg>
          <strong>9,500+</strong>
          <small>Employees</small>
        </article>
        <article
          class="legacy-card"
          role="listitem"
          tabindex="0"
          aria-label="350 plus satisfied clients"
        >
          <svg
            class="svg-img"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12l2 2 4-4" />
          </svg>
          <strong>350+</strong>
          <small>Satisfied clients</small>
        </article>
        <article
          class="legacy-card"
          role="listitem"
          tabindex="0"
          aria-label="14 locations"
        >
          <svg
            class="svg-img"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M2 17l5-9 5 9 5-14 5 14" />
            <path d="M18 21h4v-4" />
          </svg>
          <strong>14</strong>
          <small>Locations</small>
        </article>
      </div>
    </section>
    {/* <!-- marquree  Our Alliances page --> */}
    <section class="motion-body">
      <h2>Our Alliances</h2>
      <p>The best global partners on a common mission.</p>

      <div
        class="marquee-container"
        aria-label="Scrolling logos of our alliances"
      >
        <div class="marquee" role="list">
          <div class="logo-container-mar" role="listitem">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/841d000b-3e21-46d5-a9aa-beaedc06d8ec.png"
              alt="Deloitte silver consulting partner logo in gray text on white background"
              onerror="this.onerror=null;this.src='https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2909175e-6343-40a7-8d95-6147ea2ad9c5.png';"
              loading="lazy"
              width="180"
              height="90"
            />
          </div>
          <div class="logo-container" role="listitem">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c5463bab-b27f-4993-be3d-79bc61328d38.png"
              alt="Amazon Web Services Partner Network logo with orange cubes and black text on white background"
              onerror="this.onerror=null;this.src='https://placehold.co/180x90?text=Logo+unavailable&bg=ddd&fg=999';"
              loading="lazy"
              width="180"
              height="90"
            />
          </div>
          <div class="logo-container" role="listitem">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e45e4685-a33a-4722-84a6-83c20320f839.png"
              alt="Microsoft Partner logo with black text and colorful Microsoft squares on white background"
              onerror="this.onerror=null;this.src='https://placehold.co/180x90?text=Logo+unavailable&bg=ddd&fg=999';"
              loading="lazy"
              width="180"
              height="90"
            />
          </div>
          <div class="logo-container" role="listitem">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f32c4783-28d3-437b-b975-46f8a2b911af.png"
              alt="Google Cloud Partner logo with colorful cloud icon and black text on white background"
              onerror="this.onerror=null;this.src='https://placehold.co/180x90?text=Logo+unavailable&bg=ddd&fg=999';"
              loading="lazy"
              width="180"
              height="90"
            />
          </div>
          <div class="logo-container" role="listitem">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/50c70c81-986c-43f4-bb18-05b7999064b7.png"
              alt="Adobe Business Solution logo with red Adobe icon and black text on white background"
              onerror="this.onerror=null;this.src='https://placehold.co/180x90?text=Logo+unavailable&bg=ddd&fg=999';"
              loading="lazy"
              width="180"
              height="90"
            />
          </div>
          {/* <!-- Repeated to create continuous scroll --> */}
          <div class="logo-container" role="listitem">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/17582372-d29f-43c3-9633-1b040b178f97.png"
              alt="Deloitte silver consulting partner logo in gray text on white background"
              onerror="this.onerror=null;this.src='https://placehold.co/180x90?text=Logo+unavailable&bg=ddd&fg=999';"
              loading="lazy"
              width="180"
              height="90"
            />
          </div>
          <div class="logo-container" role="listitem">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5b0b5a4c-dcbd-49fd-8181-d824cdc553b6.png"
              alt="Amazon Web Services Partner Network logo with orange cubes and black text on white background"
              onerror="this.onerror=null;this.src='https://placehold.co/180x90?text=Logo+unavailable&bg=ddd&fg=999';"
              loading="lazy"
              width="180"
              height="90"
            />
          </div>
          <div class="logo-container" role="listitem">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/244befd0-2c6b-40d6-aa34-61924c974a00.png"
              alt="Microsoft Partner logo with black text and colorful Microsoft squares on white background"
              onerror="this.onerror=null;this.src='https://placehold.co/180x90?text=Logo+unavailable&bg=ddd&fg=999';"
              loading="lazy"
              width="180"
              height="90"
            />
          </div>
        </div>
      </div>
    </section>
  
  


    </>
  )
}

export default About;

