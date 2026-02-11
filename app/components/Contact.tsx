'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import SlideUpOnScroll from '@/components/SlideUpOnScroll'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate backend call
    setTimeout(() => {
      alert(`Message Sent! \nName: ${formData.name}\nSubject: ${formData.subject}`);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  // Define custom theme color constants for easy reference in Tailwind
  const themeColor = '#50C878'; // The requested color
  const themeHoverColor = '#3da362'; // A slightly darker shade for hover states

  return (
    <section className=" py-16 md:py-24" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="heading text-3xl font-bold tracking-tight  sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg ">
            Have questions? We'd love to hear from you. Send us a message or visit us.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Column: Contact Info & Map */}
          <div className="flex flex-col gap-8">
            {/* Contact Cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl  p-6 shadow-sm">
                {/* Changed color here using arbitrary values and opacity */}
                <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[${themeColor}]/10 text-[${themeColor}]`}>
                  <Phone className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold ">Phone</h3>
                <p className="mt-2 "><a href="tel:+917047354422" className="hover:text-green-500">
                +91 70473 54422
              </a></p>
                <p className=""><a href="tel:+919831706745" className="hover:text-green-500">
                +91 98317 06745
              </a></p>
              </div>

              <div className="rounded-xl  p-6 shadow-sm">
                 {/* Changed color here */}
                <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[${themeColor}]/10 text-[${themeColor}]`}>
                  <Mail className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold ">Email</h3>
                <p className="mt-2 "><a
                href="mailto:youthsuccessecommerce@gmail.com"
                className="hover:text-green-500"
              >
                youthsuccessecommerce@gmail.com
              </a></p>
              
                <p><a
                href="mailto:successcompany732@gmail.com"
                className="hover:text-green-500"
              >
                successcompany732@gmail.com
              </a></p>
              </div>

              <div className="rounded-xl  p-6 shadow-sm sm:col-span-2">
                <div className="flex items-start gap-4">
                   {/* Changed color here */}
                  <div className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[${themeColor}]/10 text-[${themeColor}]`}>
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold ">Our Location</h3>
                    <p className="mt-2 ">
                      1/A First Floor Pashupati Appatment Dumdum Road<br />
                      Kolkata 700030
                      {/* <br /> 
                      <br />
                      Sadakash Seikh, Sitesh Nagar, Lalgola <br />
                      Murshidabad 742151 */}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <SlideUpOnScroll delay={300}>
            <div className="h-64 w-full overflow-hidden rounded-xl shadow-lg sm:h-80">
              <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d389.8112687567651!2d88.39463944901534!3d22.619706078607674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89dfbb38a3f7f%3A0x2652624b693a9ef6!2sJ99V%2BVRF%2C%20Girish%20Chandra%20Ghosh%20Rd%2C%20Ghughudanga%2C%20South%20Dumdum%2C%20West%20Bengal%20700030!5e0!3m2!1sen!2sin!4v1769520537104!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full object-cover"
              />
            </div>
            </SlideUpOnScroll>
                
          </div>

          {/* Right Column: Contact Form */}
          <SlideUpOnScroll delay={600}>
          <div className="rounded-2xl  p-8 shadow-lg lg:p-12">
            <h3 className="mb-6 text-2xl font-bold ">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium ">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    // Changed focus colors here
                    className={`block w-full rounded-lg border   p-3  focus:border-[${themeColor}] focus:ring-[${themeColor}]`}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium ">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                     // Changed focus colors here
                    className={`block w-full rounded-lg border   p-3  focus:border-[${themeColor}] focus:ring-[${themeColor}]`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium ">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                   // Changed focus colors here
                  className={`block w-full rounded-lg border   p-3  focus:border-[${themeColor}] focus:ring-[${themeColor}]`}
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium ">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                   // Changed focus colors here
                  className={`block w-full rounded-lg border   p-3  focus:border-[${themeColor}] focus:ring-[${themeColor}]`}
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                // Changed background, hover, and focus ring colors here
                className={`inline-flex w-full items-center justify-center rounded-lg bg-[${themeColor}] px-6 py-3 text-base font-semibold  transition-all hover:bg-[${themeHoverColor}] focus:outline-none focus:ring-2 focus:ring-[${themeColor}] focus:ring-offset-2 disabled:opacity-50 sm:w-auto`}
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          </SlideUpOnScroll>
        </div>
      </div>
    </section>
  );
}