import React from "react";
import profilePicture from "../../../static/assets/images/bio/testheadshot.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        I am a junior programmer, recently graduated from Bottega University.
        Languages I have used are Javascript, React, Python, and HTML/SCSS. I am
        looking for an opportunity to grow and learn as a developer. I started
        out my tech career as a help desk technician. I got my Associates Degree
        in Computer Networking. I love technology and I love growing with it. As
        I continued my journey as a helpdesk tech I found programming. I grew to
        love programming as it reminded me of my joy as a child building with legos.
        I hope to continue my skills as a developer and I am excited to see where this takes me.
        I know I have still have lots to learn but I can not wait for the opportunity to get better 
        and grow my skils as a developer.
      </div>
    </div>
  );
}
