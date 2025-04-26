import React from "react";

const Map = () => {
  return (
    <div
      style={{ width: "100%", height: "400px" }}
      className="animate-fadeInUpDelicate"
    >
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.4099446576547!2d88.36341827781756!3d22.56376598045427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277004080ac2d%3A0x2c63c8ecb1221e7c!2sNRS%20HOSPITAL%20GATE%202!5e0!3m2!1sen!2sin!4v1745685922734!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
