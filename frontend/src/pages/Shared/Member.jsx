
import React from 'react';
// import './assets/css/Member.css'; // Ensure this CSS file contains relevant styles
import '../../assets/css/Member.css'
function BlogPosts() {
  return (
    <>
      <section className="pricing flex flex-col items-center text-center py-5">
        <h4 className="section-title text-black text-2xl font-bold mb-2">
          Our Learning Plans
        </h4>
        <p className="text-lg">
          Find the perfect plan to boost your learning journey
        </p>
        <div className="plans">
          {/* Basic Plan */}
          <div className="plan bg-light">
            <h2 className="plan__title">Basic Learner</h2>
            <p className="plan__price">$0.00<span>/month</span></p>
            <p className="plan__description">
              Access to introductory courses and community support. Ideal for new learners looking to get started.
            </p>
            <a href="#" className="button">Get Started</a>
          </div>

          {/* Advanced Plan */}
          <div className="plan bg-dark">
            <h2 className="plan__title">Advanced Learner</h2>
            <p className="plan__price">$29.99<span>/month</span></p>
            <p className="plan__description">
              Full access to all courses, interactive quizzes, and priority support. Perfect for dedicated learners.
            </p>
            <a href="#" className="button">Upgrade Now</a>
          </div>

          {/* Premium Plan */}
          <div className="plan bg-accent">
            <h2 className="plan__title">Premium Learner</h2>
            <p className="plan__price">$59.99<span>/month</span></p>
            <p className="plan__description">
              Unlimited access to all courses, one-on-one mentoring, and exclusive content. Best for serious students aiming for excellence.
            </p>
            <a href="#" className="button">Enroll Today</a>
          </div>
        </div>

        <p className="fs-500">Need a customized learning experience? Contact us to discuss your needs!</p>
        <a href="#" className="button button-dark mt-5">Contact Us</a>
      </section>
    </>
  );
}

export default BlogPosts;

