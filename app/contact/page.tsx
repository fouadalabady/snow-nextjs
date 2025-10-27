import { Numbers } from "@/components/numbers";
import { ImmediateResponse } from "@/components/immediate-response";
import { FAQ } from "@/components/faq";
import { ContactUs } from "@/components/contact-us";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="relative w-full h-[584px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Stocks/HeroBackground.jpg"
            alt="Contact Hero Background"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-[rgba(56,77,130,0.8)]" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl text-center px-4 sm:px-6 md:px-8">
          <p className="bg-clip-text bg-gradient-to-b from-[#44c5e2] to-[#e3f6fb] text-transparent font-medium text-xl md:text-2xl capitalize mb-3">
            Contact us
          </p>
          <h1 className="font-semibold text-2xl md:text-3xl lg:text-[32px] text-white mb-4 lg:mb-6 capitalize leading-tight">
            Get in Touch with Snow HVAC
          </h1>
          <p className="font-normal text-sm md:text-base text-[#e1e4ec] mb-6 lg:mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to experience excellence in HVAC solutions? Our expert team is here to help you with all your heating, ventilation, and air conditioning needs.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center justify-center">
            <button className="bg-white text-[#384d82] px-6 py-3 rounded-lg font-medium text-sm md:text-base hover:bg-gray-50 hover:scale-105 transition-all duration-200 w-full sm:w-auto">
              Call us Now
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium text-sm md:text-base flex items-center justify-center gap-2 hover:bg-white hover:text-[#384d82] hover:scale-105 transition-all duration-200 w-full sm:w-auto">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <p className="text-snow-primary text-lg font-medium capitalize mb-3">
                  Contact Information
                </p>
                <h2 className="text-snow-secondary text-[32px] font-bold capitalize leading-tight mb-6">
                  Let&apos;s Start a Conversation
                </h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  We&apos;re here to help you with all your HVAC needs. Whether you need emergency repairs, routine maintenance, or a complete system installation, our team of experts is ready to assist you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-snow-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-snow-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-snow-secondary mb-1">Phone</h3>
                    <p className="text-gray-600">+966 11 234 5678</p>
                    <p className="text-gray-600">+966 50 123 4567</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-snow-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-snow-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-snow-secondary mb-1">Email</h3>
                    <p className="text-gray-600">info@snowhvac.sa</p>
                    <p className="text-gray-600">support@snowhvac.sa</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-snow-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-snow-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-snow-secondary mb-1">Address</h3>
                    <p className="text-gray-600">King Fahd Road, Al Olaya District</p>
                    <p className="text-gray-600">Riyadh 12213, Saudi Arabia</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-snow-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-snow-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-snow-secondary mb-1">Working Hours</h3>
                    <p className="text-gray-600">Sunday - Thursday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Emergency Service: 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-snow-secondary text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-snow-primary focus:border-transparent transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-snow-primary focus:border-transparent transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-snow-primary focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-snow-primary focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-snow-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="emergency">Emergency Repair</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="installation">New Installation</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-snow-primary focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell us about your HVAC needs..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <Button className="w-full bg-snow-primary hover:bg-snow-primary/90 text-white py-3 px-6 rounded-lg font-medium transition-colors">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-section">
          <div className="text-center mb-12">
            <p className="text-snow-primary text-lg font-medium capitalize mb-3">
              Find us
            </p>
            <h2 className="text-snow-secondary text-[32px] font-bold capitalize leading-tight">
              Our Location
            </h2>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-gray-200 h-96 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-snow-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-snow-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-gray-600">Interactive map will be integrated here</p>
              <p className="text-sm text-gray-500 mt-2">King Fahd Road, Al Olaya District, Riyadh</p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <div className="py-[69px]">
        <Numbers />
      </div>

      {/* Immediate Response Section */}
      <ImmediateResponse />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Us CTA Section */}
      <ContactUs />
    </div>
  );
}