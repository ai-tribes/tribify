'use client'

import { useState } from 'react'
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi'

const contactInfo = [
  {
    icon: HiMail,
    title: "Email",
    details: "hello@tribify.ai",
    link: "mailto:hello@tribify.ai"
  },
  {
    icon: HiLocationMarker,
    title: "Location",
    details: "Singapore",
  },
  {
    icon: HiPhone,
    title: "Phone",
    details: "+65 8888 8888",
    link: "tel:+6588888888"
  }
]

type FormData = {
  name: string
  email: string
  message: string
}

type FormErrors = {
  name?: string
  email?: string
  message?: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = () => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Form is valid, you can submit it
      console.log('Form submitted:', formData)
      // TODO: Add API call to send message
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  return (
    <div className="relative">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-brand-accent/20 to-brand-stone/20 animate-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <div className="bg-white dark:bg-dark rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Send us a message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.name 
                      ? 'border-red-500 dark:border-red-400' 
                      : 'border-gray-200 dark:border-gray-700'
                  } bg-white dark:bg-dark-lighter focus:ring-2 focus:ring-primary`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.email 
                      ? 'border-red-500 dark:border-red-400' 
                      : 'border-gray-200 dark:border-gray-700'
                  } bg-white dark:bg-dark-lighter focus:ring-2 focus:ring-primary`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.message 
                      ? 'border-red-500 dark:border-red-400' 
                      : 'border-gray-200 dark:border-gray-700'
                  } bg-white dark:bg-dark-lighter focus:ring-2 focus:ring-primary`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.message}</p>
                )}
              </div>
              <button 
                type="submit"
                className="w-full bg-dark hover:bg-dark-lighter text-white dark:bg-white dark:text-dark 
                  dark:hover:bg-gray-100 font-medium px-8 py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white dark:bg-dark rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <info.icon className="w-6 h-6 text-primary mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {info.title}
                  </h3>
                </div>
                {info.link ? (
                  <a 
                    href={info.link}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-600 dark:text-gray-400">{info.details}</p>
                )}
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-white dark:bg-dark rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Twitter</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">LinkedIn</a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Discord</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 