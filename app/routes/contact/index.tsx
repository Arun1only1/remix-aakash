import { MetaFunction } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'contact', content: 'Nepal mart contact page' },
  ];
};

const Contact = () => {
  return <div>Contact page</div>;
};

export default Contact;
