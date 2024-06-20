import React from 'react'

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="pt-14 pb-5 text-2xl text-center">About us</h2>
      <hr />
      <br />
      <div className="flex flex-col gap-y-10">
        {/* <p className="text-center mx-auto max-w-md">Our team makes wonderful websites with cool interfaces and magnificent functionality</p> */}
        
        <main>
            <section class="about-us">
                <p>Welcome to Mus-Instruments, your number one source for all things musical. We're dedicated to giving you the very best of musical instruments, with a focus on quality, customer service, and uniqueness.</p>
                <p>Founded in 2020, Mus-Instruments has come a long way from its beginnings in a home office. When we first started out, our passion for providing the best instruments drove us to do intense research and gave us the impetus to turn hard work and inspiration into a booming online store. We now serve customers all over the world and are thrilled to be a part of the musical instrument industry.</p>
                <p>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
                <p><strong>Sincerely,</strong></p>
                <p><strong>Mus-Instruments Team</strong></p>
            </section>
        </main>
      </div>
    </div>
  )
}

export default About