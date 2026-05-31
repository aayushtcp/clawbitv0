import React from 'react';
import ContactCard from '@contact-components/ui/ContactCard';
import contacts from '@contact-constants/contact-data';

const ContactList: React.FC = () => {
  return (
    <section className="my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {contacts.map((contact, index) => (
          <ContactCard key={index} {...contact} />
        ))}
      </div>
    </section>
  );
};

export default ContactList;
