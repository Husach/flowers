import React from "react";

const social = [
  {
    link: "https://www.instagram.com/flowet.com.ua/",
    label: "instagram",
    logo: "img/social/insta.png"
  },
  {
    link: "https://www.facebook.com/flowet.com.ua",
    label: "facebook",
    logo: "img/social/fb.png"
  },
  {
    link: "https://www.vk",
    label: "vk",
    logo: "img/social/vk.png"
  }
];

const Social = () => {
  return (
    <div className="social">
        {social.map((item, index) =>
          <div className="social__item" key={index}>
            <a href={item.link} className="social__link" target="_blank">
              <img src={item.logo} alt={item.label} className="social__img" />
            </a>
          </div>
        )}
    </div>
  );
};

export default Social;
