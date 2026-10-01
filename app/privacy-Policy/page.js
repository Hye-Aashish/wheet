import React from 'react';
import PrivacyPolicy from '../components/PrivacyPolicy';

export const metadata = {
  title: "Privacy Policy - BAAZ Atta",
  description: "Learn how BAAZ Atta collects, uses, and protects your personal data when purchasing our premium wheat flour products.",
};

export default function page() {
  return (
    <div>
      <PrivacyPolicy />
    </div>
  );
}
