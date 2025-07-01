"use client";
import { useState } from "react";
import { trackEventWithConsent } from "../lib/analytics";

export default function ConnectForm() {
  const [formData, setFormData] = useState({
    project_type: "",
    company_name: "",
    your_name: "",
    contact_email: "",
    budget_range: "",
    primary_challenge: "",
    timeline: "",
    marketing_stack: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEventWithConsent("connect_form_submit", formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
      <h2 className="text-2xl font-bold text-gray-100 mb-6">Initialize Your Marketing OS</h2>
      <p className="text-gray-400 mb-8">
        Tell us about your challenges and we'll design a solution that fits your specific needs.
      </p>
      {submitted ? (
        <div className="text-center py-12">
          <p className="text-2xl text-green-400 font-bold">Thank you, your message has been sent</p>
        </div>
      ) : (
        <form className="space-y-6" id="contact-form" onSubmit={handleSubmit}>
          {/* Project Type Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              <span className="font-mono text-blue-400">// </span>Project Type
            </label>
            <select
              name="project_type"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 text-gray-100"
              value={formData.project_type}
              onChange={handleChange}
              required
            >
              <option value="">Select your primary need</option>
              <option value="marketing_os_development">marketing_os_development</option>
              <option value="ai_powered_automation">ai_powered_automation</option>
              <option value="velocity_strategy">velocity_strategy</option>
              <option value="performance_optimization">performance_optimization</option>
              <option value="technical_integration">technical_integration</option>
              <option value="growth_consulting">growth_consulting</option>
            </select>
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              <span className="font-mono text-blue-400">// </span>Company Name
            </label>
            <input
              type="text"
              name="company_name"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 text-gray-100"
              placeholder="your_brand_name"
              value={formData.company_name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Contact Details */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                <span className="font-mono text-blue-400">// </span>Your Name
              </label>
              <input
                type="text"
                name="your_name"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 text-gray-100"
                placeholder="decision_maker_name"
                value={formData.your_name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                <span className="font-mono text-blue-400">// </span>Contact Email
              </label>
              <input
                type="email"
                name="contact_email"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 text-gray-100"
                placeholder="user@company.com"
                value={formData.contact_email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Monthly Marketing Budget */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              <span className="font-mono text-blue-400">// </span>Monthly Marketing Budget
            </label>
            <select
              name="budget_range"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 text-gray-100"
              value={formData.budget_range}
              onChange={handleChange}
              required
            >
              <option value="">Select budget range</option>
              <option value="budget_tier_1">$10k - $25k</option>
              <option value="budget_tier_2">$25k - $50k</option>
              <option value="budget_tier_3">$50k - $100k</option>
              <option value="budget_tier_4">$100k - $250k</option>
              <option value="budget_tier_5">$250k+</option>
            </select>
          </div>

          {/* Current Challenge */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              <span className="font-mono text-blue-400">// </span>Primary Challenge
            </label>
            <textarea
              name="primary_challenge"
              rows={4}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 text-gray-100"
              placeholder="describe_current_pain_points();"
              value={formData.primary_challenge}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Timeline */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              <span className="font-mono text-blue-400">// </span>Implementation Timeline
            </label>
            <select
              name="timeline"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 text-gray-100"
              value={formData.timeline}
              onChange={handleChange}
              required
            >
              <option value="">When do you need results?</option>
              <option value="timeline_immediate">ASAP - we're in crisis mode</option>
              <option value="timeline_30">Within 30 days</option>
              <option value="timeline_90">Within 90 days</option>
              <option value="timeline_flexible">Flexible timeline</option>
            </select>
          </div>

          {/* Current Tools */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              <span className="font-mono text-blue-400">// </span>Current Marketing Stack
            </label>
            <input
              type="text"
              name="marketing_stack"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 text-gray-100"
              placeholder="CRM, email platform, ad platforms..."
              value={formData.marketing_stack}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="w-full brand-button text-lg py-4">
            Initialize_Consultation()
          </button>
        </form>
      )}
    </div>
  );
} 