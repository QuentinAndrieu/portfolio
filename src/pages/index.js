import React from 'react';

const IndexPage = () => (
  <div>
    <div className="description">
      <h1>
        Hello, my name is Quentin. I am a Full Stack Javascript Developer living in Wellington.
      </h1>
    </div>

    <section>
      <h3>About:</h3>

      <p> I currently am working as a UX Engineer at
        <a href="http://godaddy.com" target="_blank" className="yellow">GoDaddy</a>, which is where my passion for design and development converge.
        See my previous work history on
        <a href="https://www.linkedin.com/profile/view?id=99755347" className="yellow" target="_blank">LinkedIn</a>. Outside of work I have a beautiful wife and cat (obviously).
        I am also working on a side project
        <a href="https://investmentcalculator.io/" target="_blank" className="yellow">Investment Calculator</a> (a simple tool to teach people about investing).
        Currently I am not accepting freelance work, but I'd love to get coffee and
        get to know you, so don’t hesitate to get in touch.</p>

      <h3>Services:</h3>

      <h4>UI/UX Design</h4>

      <p>UI/UX involves planning and iterating a site's structure and layout. Once the
          proper information architecture is in place, I design the visual layer to
        create a beautiful user experience.</p>

      <h4>Front End Development</h4>

      <p>Front End Development is building out the visual components of a website. Using
          HTML, CSS , and Javascript, I build fast, interactive websites. This also
        may include integrating a CMS.</p>

      <h4>Brand & Collateral Design</h4>

      <p>While most of my attention is on interactive projects, I do branding and collateral
          from time to time. This includes logo design, business cards, and other printed
          materials.
    </p>
    </section>
  </div>
)

export default IndexPage;
