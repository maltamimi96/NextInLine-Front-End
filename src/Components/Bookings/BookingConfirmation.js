import React, { useRef,useState } from 'react';
import { send } from 'emailjs-com';
export const ContactUs = (bookingDetails) => {

    const [toSend, setToSend] = useState({
        from_name: bookingDetails.store.name,
        to_name: '',
        message: '',
        reply_to: '',
      });
  return (
        <div></div>
  );
};