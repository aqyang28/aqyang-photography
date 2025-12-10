import React, { useState } from 'react';
import './styles.css';
import supabase from '../supabaseClient';

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  message: ''
};

export default function About() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setStatus({ type: '', message: '' });

    const missingFields = [];
    if (!formData.firstName.trim()) missingFields.push('Name');
    if (!formData.email.trim()) missingFields.push('Email');
    if (!formData.message.trim()) missingFields.push('Message');

    if (missingFields.length > 0) {
      setStatus({
        type: 'error',
        message: `Form submission failed. Review the following: ${missingFields.join(', ')}.`
      });
      return;
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email.' });
      return;
    }

    setIsSubmitting(true);

    if (!supabase) {
      setIsSubmitting(false);
      setStatus({ type: 'error', message: 'Supabase is not configured yet.' });
      return;
    }

    const { error } = await supabase.from('contact_messages').insert([
      {
        first_name: formData.firstName.trim(),
        last_name: formData.lastName.trim(),
        email: formData.email.trim(),
        message: formData.message.trim()
      }
    ]);

    setIsSubmitting(false);

    if (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      return;
    }

    setFormData(initialForm);
    setStatus({ type: 'success', message: 'Thanks for reaching out. I will get back to you as soon as possible and look forward to our potential collaboration!' });
  };

  return (
    <div className="page-container">
      <section className="contact-section">
        <div className="about-stack">
          <div className="about-row">
          <div className="contact-image">
            <img src="src/images/headshot.jpg" alt="A portrait of myself (Alex Yang) behind a dark blue background." />
          </div>
            <div className="about-description">
              <p className="contact-heading">About Me</p>
              <p className="about-blurb">
                <div> Hi there! My name is Alex, and I am a photographer situated in the Cary, NC area. I currently do freelance work and photograph for The Daily Tar Heel, the student newspaper at UNC-Chapel Hill.</div>
                <div> I started "taking photography seriously" when my brother made the fatal mistake of letting me borrow his Fujifilm X-T30 II when we were exploring the Grand Canyon during golden hour and I loved every minute with it. </div>
                <div> Taking pictures is so freeing to me, and it's a big reason why I love it so much. I also really enjoy working with other people, and my photography is centered around capturing that human connection. Pursuing photography has led me to so many amazing people and unforgettable experiences. I am incredibly grateful for everyone I've met and all the support I've received along the way. </div>
                <div> Thank you for taking the time to check out my portfolio– I hope you saw something that put a smile on your face. If you would like to work together in the future or have any feedback for me, don't hesitate to fill out the form below or reach me on social media! </div>
              </p>
              <div className="contact-info">
                <div className="contact-block">
                  <p className="contact-label-bold">Email:</p>
                  <a href="mailto:aqyang.photography@gmail.com">aqyang.photography@gmail.com</a>
                </div>
                <div className="contact-block">
                  <p className="contact-label-bold">Instagram:</p>
                  <a
                    href="https://www.instagram.com/ayangsrealm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.instagram.com/ayangsrealm/
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <p className="form-title">Contact Me</p>
            {status.type === 'error' && (
              <div className="form-alert error">
                {status.message || 'Form submission failed. Please check the required fields.'}
              </div>
            )}
            {status.type === 'success' && (
              <div className="form-alert success">{status.message}</div>
            )}

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="firstName">
                  Name <span className="required-label">(required)</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="email">
                Email <span className="required-label">(required)</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">
                Message <span className="required-label">(required)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div className="form-actions">
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}