import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Map the EmailJS field names back to our state properties
    const stateMapping: Record<string, string> = {
      'user_name': 'name',
      'user_email': 'email',
      'user_phone': 'phone',
      'subject': 'subject',
      'message': 'message'
    };
    
    const stateName = stateMapping[name] || name;
    
    setFormData(prev => ({
      ...prev,
      [stateName]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      // Send the email using EmailJS with config from the config file
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current!,
        EMAILJS_CONFIG.publicKey
      );
      
      console.log('Email sent successfully:', result.text);
      
      // Show success message
      setFormSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      setError('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer plus tard.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Contactez <span className="text-amber-700">Nous</span>
          </h2>
          <div className="w-20 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Des questions sur nos services ? Besoin d'un devis personnalisé ? N'hésitez pas à nous contacter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-6">Informations de Contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Phone size={20} className="text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Téléphone</h4>
                    <p className="text-gray-600">+212 604 665 016</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Mail size={20} className="text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-600">support@tarm.ma</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <MapPin size={20} className="text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Adresse</h4>
                    <p className="text-gray-600">123 Boulevard Mohammed V</p>
                    <p className="text-gray-600">Casablanca, Maroc</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold mb-3">Heures d'ouverture</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Lundi - Vendredi: 9h00 - 18h00</p>
                  <p>Samedi: 10h00 - 15h00</p>
                  <p>Dimanche: Fermé</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-6">Envoyez-nous un message</h3>
              
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="bg-green-100 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message envoyé avec succès!</h3>
                  <p className="text-green-700">Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais.</p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit}>
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
                      {error}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">Nom complet *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="user_name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="user_email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">Téléphone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="user_phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Sujet *</label>
                    <select 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="devis">Demande de devis</option>
                      <option value="information">Demande d'information</option>
                      <option value="rendez-vous">Prise de rendez-vous</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message *</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className={`px-6 py-3 bg-amber-700 text-white rounded flex items-center justify-center hover:bg-amber-800 transition-colors ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
              )}
            </div>
          </div>
        </div>
        
        {/* Google Maps */}
        <div className="mt-12 rounded-lg overflow-hidden shadow-md h-96">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26802.27125649348!2d-7.6416383!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d282e327337d%3A0x84d5502cbe6e5f20!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sus!4v1602081051917!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;