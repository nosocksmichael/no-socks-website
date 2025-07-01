// types/analytics.ts
// Type definitions for analytics

"use client"

export interface AnalyticsEvent {
    event: string;
    [key: string]: any;
}

export interface ContactFormData {
    project_type: string;
    company_name: string;
    contact_email: string;
    budget_range: string;
    timeline: string;
}

export interface ServiceInteraction {
    service_name: string;
    interaction_type: 'view' | 'click' | 'form_start' | 'form_complete';
    page_location: string;
}

// GTM ID
const GTM_ID = 'GTM-NL64XDHQ';

// TypeScript declaration for window.dataLayer
declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

// Simple consent management (optional)
export const hasConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('analytics_consent') === 'granted';
};

export const grantConsent = (): void => {
  localStorage.setItem('analytics_consent', 'granted');
  // Reinitialize tracking if consent was just granted
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'consent_granted',
      consent_analytics: true,
      consent_marketing: true,
    });
  }
};

export const revokeConsent = (): void => {
  localStorage.setItem('analytics_consent', 'denied');
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'consent_revoked',
      consent_analytics: false,
      consent_marketing: false,
    });
  }
};

// Enhanced analytics with consent checking
export const trackEventWithConsent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window === 'undefined' || !GTM_ID || !hasConsent()) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...parameters,
  });
};

// Debug mode for development
export const enableAnalyticsDebug = () => {
  if (typeof window === 'undefined' || process.env.NODE_ENV !== 'development') return;

  // Override tracking functions to log to console in development
  if (window.dataLayer) {
    const originalDataLayerPush = window.dataLayer.push;
    window.dataLayer.push = function (...args: any[]): number {
      console.log('🔍 Analytics Debug:', ...args);
      if (originalDataLayerPush) {
        return originalDataLayerPush.apply(this, args);
      }
      return 0;
    };
  }
};

// Call this in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  enableAnalyticsDebug();
}