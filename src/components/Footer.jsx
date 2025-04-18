import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center bg-base-200 text-base-content px-4 py-12">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by FlagshipFaceOff Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
