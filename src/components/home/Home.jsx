import React from 'react';
import "./home.css";

const Home = () => {
  return (
    <div class="landing" id="home">
      <div class="intro-text">
        <h1>Acodiv Store</h1>
        <p>نرحب بعملائنا الجدد أمتلك الان عروض التيشرتات</p>
        <div className="button">
          <a href="https://wa.me/+0201068978663?text=اريد معرفه اسعار التيشرتات">
            <button className="btn">اطلب الان</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;