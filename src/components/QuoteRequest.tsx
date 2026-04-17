import React, { useState, useRef } from 'react';
import { Send, Home, Building2, Ruler, Calendar } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const QuoteRequest: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    projectType: [] as string[],
    propertyType: '',
    surface: '',
    budget: '',
    startDate: '',
    description: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Map the EmailJS field names back to our state properties
    const stateMapping: Record<string, string> = {
      'user_firstname': 'firstName',
      'user_lastname': 'lastName',
      'user_email': 'email',
      'user_phone': 'phone',
      'project_types': 'projectType'
    };
    
    const stateName = stateMapping[name] || name;
    
    setFormData(prev => ({
      ...prev,
      [stateName]: value
    }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    
    setFormData(prev => {
      if (checked) {
        // Add the value to the array if checked
        return {
          ...prev,
          [name]: [...prev[name as keyof typeof prev] as string[], value]
        };
      } else {
        // Remove the value from the array if unchecked
        return {
          ...prev,
          [name]: (prev[name as keyof typeof prev] as string[]).filter(item => item !== value)
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate that at least one project type is selected
    if (formData.projectType.length === 0) {
      alert('Veuillez sélectionner au moins un type de projet.');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      // Prepare the project types as a string for EmailJS
      const projectTypesString = formData.projectType.join(', ');
      
      // Add the project types to the form before sending
      if (formRef.current) {
        const projectTypesInput = document.createElement('input');
        projectTypesInput.type = 'hidden';
        projectTypesInput.name = 'project_types';
        projectTypesInput.value = projectTypesString;
        formRef.current.appendChild(projectTypesInput);
      }
      
      // Send the email using EmailJS with the quote-specific template
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.quoteTemplateId, // Using the quote-specific template ID
        formRef.current!,
        EMAILJS_CONFIG.publicKey
      );
      
      console.log('Quote request sent successfully:', result.text);
      
      // Show success message
      setFormSubmitted(true);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        projectType: [],
        propertyType: '',
        surface: '',
        budget: '',
        startDate: '',
        description: ''
      });
    } catch (error) {
      console.error('Failed to send quote request:', error);
      setError('Une erreur est survenue lors de l\'envoi de votre demande. Veuillez réessayer plus tard.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="devis" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Demande de <span className="text-amber-700">Devis</span>
          </h1>
          <div className="w-20 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Remplissez le formulaire ci-dessous pour recevoir un devis personnalisé pour votre projet.
          </p>
        </div>

        {/* Quote Request Steps */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="text-amber-700 w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">1. Type de Projet</h3>
              <p className="text-gray-600 text-sm">Décrivez votre projet</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-amber-700 w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">2. Détails</h3>
              <p className="text-gray-600 text-sm">Spécifiez les caractéristiques</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ruler className="text-amber-700 w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">3. Dimensions</h3>
              <p className="text-gray-600 text-sm">Surface et budget</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-amber-700 w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">4. Planning</h3>
              <p className="text-gray-600 text-sm">Date de démarrage</p>
            </div>
          </div>
        </div>

        {/* Quote Request Form */}
        <div className="max-w-4xl mx-auto">
          {formSubmitted ? (
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="bg-green-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Demande de devis envoyée avec succès!</h3>
                <p className="text-green-700">Merci pour votre demande. Notre équipe vous contactera dans les plus brefs délais pour discuter de votre projet.</p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                >
                  Faire une nouvelle demande
                </button>
              </div>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
                  {error}
                </div>
              )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-bold mb-4">Informations Personnelles</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 mb-2">Prénom *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="user_firstname"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 mb-2">Nom *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="user_lastname"
                      value={formData.lastName}
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
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Téléphone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="user_phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div>
                <h3 className="text-xl font-bold mb-4">Adresse du Projet</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="address" className="block text-gray-700 mb-2">Adresse *</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-gray-700 mb-2">Ville *</label>
                    <select
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    >
                      <option value="">Sélectionnez une ville</option>
                      <option value="casablanca">Casablanca</option>
                      <option value="rabat">Rabat</option>
                      <option value="marrakech">Marrakech</option>
                      <option value="tanger">Tanger</option>
                      <option value="agadir">Agadir</option>
                      <option value="agadir">El jadida</option>
                      <option value="agadir">Mohammédia</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Détails du Projet</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Type de Projet * (sélectionnez au moins un)</label>
                  <div className="space-y-2 max-h-60 overflow-y-auto border border-gray-300 rounded-md p-3">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="projectType-plomberie"
                        name="projectType"
                        value="installation-plomberie"
                        checked={formData.projectType.includes('installation-plomberie')}
                        onChange={handleCheckboxChange}
                        className="mr-2 h-4 w-4 text-amber-500 focus:ring-amber-500"
                      />
                      <label htmlFor="projectType-plomberie" className="text-sm">Installation Plomberie</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="projectType-electrique"
                        name="projectType"
                        value="installation-electrique"
                        checked={formData.projectType.includes('installation-electrique')}
                        onChange={handleCheckboxChange}
                        className="mr-2 h-4 w-4 text-amber-500 focus:ring-amber-500"
                      />
                      <label htmlFor="projectType-electrique" className="text-sm">Installation Électrique</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="projectType-chauffage"
                        name="projectType"
                        value="chauffage-central"
                        checked={formData.projectType.includes('chauffage-central')}
                        onChange={handleCheckboxChange}
                        className="mr-2 h-4 w-4 text-amber-500 focus:ring-amber-500"
                      />
                      <label htmlFor="projectType-chauffage" className="text-sm">Chauffage Central</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="projectType-climatisation"
                        name="projectType"
                        value="installation-climatisation"
                        checked={formData.projectType.includes('installation-climatisation')}
                        onChange={handleCheckboxChange}
                        className="mr-2 h-4 w-4 text-amber-500 focus:ring-amber-500"
                      />
                      <label htmlFor="projectType-climatisation" className="text-sm">Installation Climatisation</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="projectType-drains"
                        name="projectType"
                        value="drains-canalisation"
                        checked={formData.projectType.includes('drains-canalisation')}
                        onChange={handleCheckboxChange}
                        className="mr-2 h-4 w-4 text-amber-500 focus:ring-amber-500"
                      />
                      <label htmlFor="projectType-drains" className="text-sm">Drains & Canalisation</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="projectType-solaire"
                        name="projectType"
                        value="installation-panneau-solaire"
                        checked={formData.projectType.includes('installation-panneau-solaire')}
                        onChange={handleCheckboxChange}
                        className="mr-2 h-4 w-4 text-amber-500 focus:ring-amber-500"
                      />
                      <label htmlFor="projectType-solaire" className="text-sm">Installation Panneau Solaire</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="projectType-piscine"
                        name="projectType"
                        value="construction-piscine"
                        checked={formData.projectType.includes('construction-piscine')}
                        onChange={handleCheckboxChange}
                        className="mr-2 h-4 w-4 text-amber-500 focus:ring-amber-500"
                      />
                      <label htmlFor="projectType-piscine" className="text-sm">Construction Piscine</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="projectType-alucobond"
                        name="projectType"
                        value="installation-alucobond"
                        checked={formData.projectType.includes('installation-alucobond')}
                        onChange={handleCheckboxChange}
                        className="mr-2 h-4 w-4 text-amber-500 focus:ring-amber-500"
                      />
                      <label htmlFor="projectType-alucobond" className="text-sm">Installation Alucobond</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="projectType-aluminium"
                        name="projectType"
                        value="travaux-aluminium"
                        checked={formData.projectType.includes('travaux-aluminium')}
                        onChange={handleCheckboxChange}
                        className="mr-2 h-4 w-4 text-amber-500 focus:ring-amber-500"
                      />
                      <label htmlFor="projectType-aluminium" className="text-sm">Travaux Aluminium</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="projectType-marbre"
                        name="projectType"
                        value="couverture-marbre-granite"
                        checked={formData.projectType.includes('couverture-marbre-granite')}
                        onChange={handleCheckboxChange}
                        className="mr-2 h-4 w-4 text-amber-500 focus:ring-amber-500"
                      />
                      <label htmlFor="projectType-marbre" className="text-sm">Couverture Marbre ou Granite</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="projectType-construction"
                        name="projectType"
                        value="construction-renovation"
                        checked={formData.projectType.includes('construction-renovation')}
                        onChange={handleCheckboxChange}
                        className="mr-2 h-4 w-4 text-amber-500 focus:ring-amber-500"
                      />
                      <label htmlFor="projectType-construction" className="text-sm">Construction & Rénovation</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="projectType-autres"
                        name="projectType"
                        value="autres"
                        checked={formData.projectType.includes('autres')}
                        onChange={handleCheckboxChange}
                        className="mr-2 h-4 w-4 text-amber-500 focus:ring-amber-500"
                      />
                      <label htmlFor="projectType-autres" className="text-sm">Autres</label>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="propertyType" className="block text-gray-700 mb-2">Type de Bien *</label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  >
                    <option value="">Sélectionnez le type</option>
                    <option value="projet-residentiel">Projet Résidentiel</option>
                    <option value="projet-commercial">Projet Commercial</option>
                    <option value="projet-industriel">Projet Industriel</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="surface" className="block text-gray-700 mb-2">Surface approximative (m²) *</label>
                  <input
                    type="number"
                    id="surface"
                    name="surface"
                    value={formData.surface}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-gray-700 mb-2">Budget approximatif (DH) *</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  >
                    <option value="">Sélectionnez une fourchette</option>
                    <option value="50000-100000">50 000 - 100 000 DH</option>
                    <option value="100000-250000">100 000 - 250 000 DH</option>
                    <option value="250000-500000">250 000 - 500 000 DH</option>
                    <option value="500000+">Plus de 500 000 DH</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Informations Complémentaires</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="startDate" className="block text-gray-700 mb-2">Date de démarrage souhaitée *</label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-gray-700 mb-2">Description du projet *</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  ></textarea>
                </div>

              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={loading}
                className={`w-full px-6 py-3 bg-amber-700 text-white rounded flex items-center justify-center hover:bg-amber-800 transition-colors ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
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
                    Envoyer la demande de devis
                  </>
                )}
              </button>
            </div>
          </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuoteRequest;
