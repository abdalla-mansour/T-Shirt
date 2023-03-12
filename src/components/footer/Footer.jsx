import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import './footer.css';

const Footer = () => {
  return (
    <div id="footer" className="w-full mt-24 text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-teal-500 py-8">
        <Fade left>
          <div className="p-2">
            <h6 className="font-bold uppercase pt-2">الحلول</h6>
            <ul>
              <li className="py-1">تسويق</li>
              <li className="py-1">تجارة</li>
              <li className="py-1">بيانات</li>
            </ul>
          </div>
        </Fade>
        <Fade right delay={200}>
          <div className="p-2">
            <h6 className="font-bold uppercase pt-2">الدعم</h6>
            <ul>
              <li className="py-1 hover:text-[#73b6c0]">
                <a href="https://wa.me/+0201068978663?text=اريد معرفه اسعار التيشرتات">
                  التسعير
                </a>
              </li>
              <li className="py-1 hover:text-[#73b6c0]">
                <a href="https://wa.me/+0201068978663">التوثيق</a>
              </li>
            </ul>
          </div>
        </Fade>
        <Fade left delay={200}>
          <div className="p-2">
            <h6 className="font-bold uppercase pt-2">روابط الموقع</h6>
            <ul>
              <li className="py-1 hover:text-[#73b6c0]">
                <a href="#home">الرئيسيه</a>
              </li>
              <li className="py-1 hover:text-[#73b6c0]">
                <a href="#portfolio">أعمالنا</a>
              </li>
              <li className="py-1 hover:text-[#73b6c0]">
                <a href="https://wa.me/+0201068978663">التواصل</a>
              </li>
            </ul>
          </div>
        </Fade>
        <Fade right delay={200}>
          <div className="p-2">
            <h6 className="font-bold uppercase pt-2">قانوني</h6>
            <ul>
              <li className="py-1">المطالبات</li>
              <li className="py-1">خصوصية</li>
              <li className="py-1">شروط</li>
              <li className="py-1">سياسات</li>
            </ul>
          </div>
        </Fade>
      </div>
      <Fade top delay={200}>
        <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-400">
          <p className="py-4">&copy; 2023, جميع الحقوق محفوظة متجر أكوديف</p>
          <div
            id="socail"
            className="flex justify-between sm:w-[75px] pt-4 text-2xl"
          >
            <a className="icon" href="https://wa.me/+0201068978663">
              <FaWhatsapp className="text-gray-400 hover:text-[#73b6c0]" />
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Footer;
