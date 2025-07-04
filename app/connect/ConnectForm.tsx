"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm } from "./actions";
import { trackFormSubmit, trackFormStart, trackFormSuccess } from "../../lib/analytics";

// Define the dataLayer type on the window object for TypeScript
type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[];
};
declare const window: WindowWithDataLayer;

// Define the initial state for the form, matching the return type of the server action
const initialState = {
  message: "",
  type: "",
  submissionData: undefined,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-6 rounded-lg text-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Initializing..." : "Initialize_Consultation()"}
    </button>
  );
}

export default function ConnectForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  // This useEffect hook will run whenever the 'state' object changes
  useEffect(() => {
    // If the form submission was successful and there's submissionData, track success
    if (state.type === 'success' && state.submissionData) {
      trackFormSuccess('contact-form', 'Contact Form', state.submissionData);
    }
  }, [state]); // The dependency array ensures this runs only when state changes

  // Handle form submission event for tracking
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    trackFormSubmit('contact-form', 'Contact Form');
  };

  // Track when user starts interacting with the form
  const handleFormStart = () => {
    trackFormStart('contact-form', 'Contact Form');
  };


  // If the form was submitted successfully, show a thank you message
  if (state.type === 'success') {
    return (
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 text-center py-20">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Request Received</h2>
          <p className="text-gray-300">{state.message}</p>
        </div>
    );
  }

  return (
    <div id="contact-form" className="bg-gray-800 rounded-xl p-8 border border-gray-700">
      <h2 className="text-2xl font-bold text-gray-100 mb-2">Initialize Your Marketing OS</h2>
      <p className="text-gray-400 mb-8">Tell us about your challenges and we'll design a solution that fits your specific needs.</p>
      
      <form action={formAction} onSubmit={handleFormSubmit} className="space-y-6">
        {/* All form fields remain the same as before */}
        <div>
            <label htmlFor="project_type" className="block text-sm font-semibold text-gray-300 mb-2">
              <span className="font-mono text-blue-400">// </span>Project Type
            </label>
            <select id="project_type" name="project_type" required onFocus={handleFormStart} className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 text-gray-100">
              <option value="">Select your primary need</option>
              <option value="marketing_os_development">marketing_os_development</option>
              <option value="ai_powered_automation">ai_powered_automation</option>
              <option value="velocity_strategy">velocity_strategy</option>
              <option value="performance_optimization">performance_optimization</option>
              <option value="technical_integration">technical_integration</option>
              <option value="growth_consulting">growth_consulting</option>
            </select>
        </div>

        <div>
          <label htmlFor="company_name" className="block text-sm font-semibold text-gray-300 mb-2">
            <span className="font-mono text-blue-400">// </span>Company Name
          </label>
          <input id="company_name" name="company_name" type="text" required placeholder="your_brand_name" className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 text-gray-100" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="your_name" className="block text-sm font-semibold text-gray-300 mb-2">
              <span className="font-mono text-blue-400">// </span>Your Name
            </label>
            <input id="your_name" name="your_name" type="text" required placeholder="decision_maker_name" className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 text-gray-100" />
          </div>
          <div>
            <label htmlFor="contact_email" className="block text-sm font-semibold text-gray-300 mb-2">
              <span className="font-mono text-blue-400">// </span>Contact Email
            </label>
            <input id="contact_email" name="contact_email" type="email" required placeholder="user@company.com" className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 text-gray-100" />
          </div>
        </div>
        
        <div>
            <label htmlFor="phone_number" className="block text-sm font-semibold text-gray-300 mb-2">
              <span className="font-mono text-blue-400">// </span>Phone Number (Optional)
            </label>
            <input id="phone_number" name="phone_number" type="tel" placeholder="(555) 123-4567" className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 text-gray-100" />
        </div>

        <div>
          <label htmlFor="budget_range" className="block text-sm font-semibold text-gray-300 mb-2">
            <span className="font-mono text-blue-400">// </span>Monthly Marketing Budget
          </label>
          <select id="budget_range" name="budget_range" required className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 text-gray-100">
            <option value="">Select budget range</option>
            <option value="budget_tier_1">$10k - $25k</option>
            <option value="budget_tier_2">$25k - $50k</option>
            <option value="budget_tier_3">$50k - $100k</option>
            <option value="budget_tier_4">$100k - $250k</option>
            <option value="budget_tier_5">$250k+</option>
          </select>
        </div>

        <div>
          <label htmlFor="primary_challenge" className="block text-sm font-semibold text-gray-300 mb-2">
            <span className="font-mono text-blue-400">// </span>Primary Challenge
          </label>
          <textarea id="primary_challenge" name="primary_challenge" rows={4} required placeholder="describe_current_pain_points();" className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 text-gray-100"></textarea>
        </div>

        <div>
          <label htmlFor="timeline" className="block text-sm font-semibold text-gray-300 mb-2">
            <span className="font-mono text-blue-400">// </span>Implementation Timeline
          </label>
          <select id="timeline" name="timeline" required className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 text-gray-100">
            <option value="">When do you need results?</option>
            <option value="timeline_immediate">ASAP - we're in crisis mode</option>
            <option value="timeline_30">Within 30 days</option>
            <option value="timeline_90">Within 90 days</option>
            <option value="timeline_flexible">Flexible timeline</option>
          </select>
        </div>

        <div>
          <label htmlFor="marketing_stack" className="block text-sm font-semibold text-gray-300 mb-2">
            <span className="font-mono text-blue-400">// </span>Current Marketing Stack
          </label>
          <input id="marketing_stack" name="marketing_stack" type="text" required placeholder="CRM, email platform, ad platforms..." className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-200 text-gray-100" />
        </div>

        <SubmitButton />

        {state.type === 'error' && (
          <p className="mt-4 text-sm text-center text-red-400">
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
}
