import React from 'react';
import TermsCondition from '../components/TermsCondition';

export const metadata = {
  title: "Terms & Conditions - BAAZ Atta",
  description: "Review the terms and conditions for ordering and shopping for BAAZ Atta Canadian wheat flour products.",
};

export default function page() {
  return (
    <div>
      <TermsCondition />
    </div>
  );
}
