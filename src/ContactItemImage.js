import React from 'react';

function ContactItemImage({ imageUrl }) {
  return (
    <div className="contact-item__image">
      <img src={imageUrl} alt="contactAvatar"/>
    </div>
  );
}

export default ContactItemImage;
