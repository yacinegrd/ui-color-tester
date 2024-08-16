import { useEffect, useState } from "react";
import "../styles/Header.scss";

const Header = () => {
  const [screenSize, setScreenSize] = useState(0);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setScreenSize(window.innerWidth);
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
  }, []);

  return (
    <header>
      <svg
        width="162"
        height="52"
        viewBox="0 0 162 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse className="svg-fill-accent" cx="30" cy="26" rx="30" ry="26" />
        <path
          d="M18.3701 18.3872C18.3262 18.9953 18.3297 19.3805 18.4673 19.8939"
          className="svg-stroke-primary"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M39.9839 16V18.3031"
          className="svg-stroke-primary"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M18.8374 32.9589C23.1205 35.2535 27.4577 36.5127 32.3069 36.2158C37.0385 35.9261 43.3861 34.6338 46.6836 30.8652"
          className="svg-stroke-primary"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M76.6836 24.3281C75.2227 24.3281 73.9453 24.0703 72.8516 23.5547C71.7578 23.0312 70.9102 22.2969 70.3086 21.3516C69.707 20.4062 69.4062 19.2969 69.4062 18.0234V7.08984H73.707V17.6133C73.707 18.5977 73.9648 19.3711 74.4805 19.9336C74.9961 20.4883 75.7344 20.7656 76.6953 20.7656C77.6562 20.7656 78.3906 20.4883 78.8984 19.9336C79.4141 19.3711 79.6719 18.5977 79.6719 17.6133V7.08984H83.9727V18.0234C83.9727 19.2891 83.6719 20.3945 83.0703 21.3398C82.4766 22.2852 81.6328 23.0195 80.5391 23.543C79.4531 24.0664 78.168 24.3281 76.6836 24.3281ZM86.7969 24V7.08984H91.0977V24H86.7969ZM73.332 46V32.5469H68.6328V29.0898H82.332V32.5469H77.6328V46H73.332ZM87.6992 46.2812C86.3477 46.2812 85.1836 46.0117 84.207 45.4727C83.2383 44.9336 82.4922 44.1641 81.9688 43.1641C81.4531 42.1641 81.1953 40.9766 81.1953 39.6016V39.5898C81.1953 38.2148 81.4531 37.0273 81.9688 36.0273C82.4922 35.0273 83.2266 34.2578 84.1719 33.7188C85.125 33.1797 86.25 32.9102 87.5469 32.9102C88.8438 32.9102 89.9648 33.1758 90.9102 33.707C91.8555 34.2305 92.5859 34.9766 93.1016 35.9453C93.625 36.9062 93.8867 38.0352 93.8867 39.332V40.5391H83.2344V38.0898H91.9414L89.9961 40.3984V38.7812C89.9961 38.1562 89.8984 37.6289 89.7031 37.1992C89.5078 36.7617 89.2344 36.4297 88.8828 36.2031C88.5312 35.9766 88.1172 35.8633 87.6406 35.8633C87.1719 35.8633 86.7578 35.9805 86.3984 36.2148C86.0469 36.4414 85.7695 36.7734 85.5664 37.2109C85.3711 37.6406 85.2734 38.1641 85.2734 38.7812V40.4219C85.2734 41.0234 85.3711 41.543 85.5664 41.9805C85.7695 42.4102 86.0586 42.7422 86.4336 42.9766C86.8086 43.2031 87.2578 43.3164 87.7812 43.3164C88.2266 43.3164 88.6055 43.2461 88.918 43.1055C89.2305 42.9648 89.4766 42.7969 89.6562 42.6016C89.8438 42.4062 89.9688 42.2227 90.0312 42.0508L90.043 42.0039H93.8047L93.7695 42.1445C93.6758 42.5742 93.4961 43.0312 93.2305 43.5156C92.9648 43.9922 92.5938 44.4414 92.1172 44.8633C91.6406 45.2773 91.0391 45.6172 90.3125 45.8828C89.5938 46.1484 88.7227 46.2812 87.6992 46.2812ZM101.27 46.2812C99.9961 46.2812 98.9219 46.1055 98.0469 45.7539C97.1719 45.4023 96.4922 44.918 96.0078 44.3008C95.5234 43.6836 95.2344 42.9648 95.1406 42.1445L95.1289 42.0508H99.1602L99.1836 42.1445C99.293 42.5508 99.5156 42.875 99.8516 43.1172C100.195 43.3516 100.668 43.4688 101.27 43.4688C101.637 43.4688 101.953 43.4258 102.219 43.3398C102.484 43.2539 102.688 43.1328 102.828 42.9766C102.977 42.8125 103.051 42.6211 103.051 42.4023V42.3906C103.051 42.1016 102.934 41.8711 102.699 41.6992C102.465 41.5195 102.062 41.3711 101.492 41.2539L99.2422 40.8086C97.9844 40.5664 97.0352 40.125 96.3945 39.4844C95.7539 38.8438 95.4336 38.0391 95.4336 37.0703V37.0586C95.4336 36.1992 95.6641 35.4609 96.125 34.8438C96.5859 34.2266 97.2422 33.75 98.0938 33.4141C98.9531 33.0781 99.9609 32.9102 101.117 32.9102C102.359 32.9102 103.398 33.1016 104.234 33.4844C105.078 33.8594 105.715 34.3594 106.145 34.9844C106.582 35.6094 106.809 36.2969 106.824 37.0469V37.1406H103.027L103.016 37.0352C102.969 36.6836 102.785 36.375 102.465 36.1094C102.145 35.8438 101.695 35.7109 101.117 35.7109C100.781 35.7109 100.488 35.7578 100.238 35.8516C99.9883 35.9375 99.793 36.0625 99.6523 36.2266C99.5117 36.3906 99.4414 36.5859 99.4414 36.8125V36.8242C99.4414 37.1055 99.5547 37.3359 99.7812 37.5156C100.016 37.6875 100.438 37.8359 101.047 37.9609L103.297 38.4062C104.648 38.6719 105.633 39.0859 106.25 39.6484C106.867 40.2109 107.176 40.9688 107.176 41.9219V41.9336C107.176 42.8164 106.926 43.5859 106.426 44.2422C105.934 44.8906 105.242 45.3945 104.352 45.7539C103.469 46.1055 102.441 46.2812 101.27 46.2812ZM114.453 46.2227C112.883 46.2227 111.73 45.9219 110.996 45.3203C110.262 44.7188 109.895 43.7109 109.895 42.2969V36.2383H108.125V33.1914H109.895V30.2383H114.066V33.1914H116.41V36.2383H114.066V41.6641C114.066 42.2031 114.191 42.5898 114.441 42.8242C114.691 43.0508 115.07 43.1641 115.578 43.1641C115.766 43.1641 115.922 43.1602 116.047 43.1523C116.172 43.1367 116.293 43.1211 116.41 43.1055V46.0703C116.184 46.1094 115.906 46.1445 115.578 46.1758C115.258 46.207 114.883 46.2227 114.453 46.2227ZM124.332 46.2812C122.98 46.2812 121.816 46.0117 120.84 45.4727C119.871 44.9336 119.125 44.1641 118.602 43.1641C118.086 42.1641 117.828 40.9766 117.828 39.6016V39.5898C117.828 38.2148 118.086 37.0273 118.602 36.0273C119.125 35.0273 119.859 34.2578 120.805 33.7188C121.758 33.1797 122.883 32.9102 124.18 32.9102C125.477 32.9102 126.598 33.1758 127.543 33.707C128.488 34.2305 129.219 34.9766 129.734 35.9453C130.258 36.9062 130.52 38.0352 130.52 39.332V40.5391H119.867V38.0898H128.574L126.629 40.3984V38.7812C126.629 38.1562 126.531 37.6289 126.336 37.1992C126.141 36.7617 125.867 36.4297 125.516 36.2031C125.164 35.9766 124.75 35.8633 124.273 35.8633C123.805 35.8633 123.391 35.9805 123.031 36.2148C122.68 36.4414 122.402 36.7734 122.199 37.2109C122.004 37.6406 121.906 38.1641 121.906 38.7812V40.4219C121.906 41.0234 122.004 41.543 122.199 41.9805C122.402 42.4102 122.691 42.7422 123.066 42.9766C123.441 43.2031 123.891 43.3164 124.414 43.3164C124.859 43.3164 125.238 43.2461 125.551 43.1055C125.863 42.9648 126.109 42.7969 126.289 42.6016C126.477 42.4062 126.602 42.2227 126.664 42.0508L126.676 42.0039H130.438L130.402 42.1445C130.309 42.5742 130.129 43.0312 129.863 43.5156C129.598 43.9922 129.227 44.4414 128.75 44.8633C128.273 45.2773 127.672 45.6172 126.945 45.8828C126.227 46.1484 125.355 46.2812 124.332 46.2812ZM132.301 46V33.1914H136.461V35.418H136.566C136.746 34.6211 137.086 34.0078 137.586 33.5781C138.086 33.1484 138.719 32.9336 139.484 32.9336C139.695 32.9336 139.898 32.9492 140.094 32.9805C140.289 33.0039 140.469 33.043 140.633 33.0977V36.6484C140.438 36.5781 140.219 36.5234 139.977 36.4844C139.734 36.4375 139.484 36.4141 139.227 36.4141C138.633 36.4141 138.129 36.5234 137.715 36.7422C137.301 36.9531 136.988 37.2656 136.777 37.6797C136.566 38.0938 136.461 38.6016 136.461 39.2031V46H132.301Z"
          className="svg-fill-primary"
        />
        <path
          d="M106.496 24.3281C104.809 24.3281 103.348 23.9805 102.113 23.2852C100.879 22.582 99.9297 21.5781 99.2656 20.2734C98.6016 18.9609 98.2695 17.3828 98.2695 15.5391V15.5273C98.2695 13.6914 98.6016 12.1211 99.2656 10.8164C99.9375 9.50391 100.887 8.5 102.113 7.80469C103.348 7.10938 104.809 6.76172 106.496 6.76172C107.957 6.76172 109.25 7.05078 110.375 7.62891C111.5 8.19922 112.391 8.98047 113.047 9.97266C113.703 10.9648 114.059 12.0938 114.113 13.3594L114.125 13.4883H109.977L109.953 13.3242C109.867 12.7383 109.672 12.2188 109.367 11.7656C109.07 11.3125 108.68 10.9609 108.195 10.7109C107.711 10.4531 107.145 10.3242 106.496 10.3242C105.707 10.3242 105.027 10.5312 104.457 10.9453C103.887 11.3594 103.445 11.9531 103.133 12.7266C102.82 13.5 102.664 14.4297 102.664 15.5156V15.5273C102.664 16.6211 102.82 17.5586 103.133 18.3398C103.445 19.1211 103.887 19.7227 104.457 20.1445C105.035 20.5586 105.715 20.7656 106.496 20.7656C107.121 20.7656 107.676 20.6445 108.16 20.4023C108.645 20.1523 109.043 19.8008 109.355 19.3477C109.668 18.8945 109.875 18.3594 109.977 17.7422L109.988 17.6133H114.137V17.7539C114.074 19.0195 113.711 20.1484 113.047 21.1406C112.391 22.125 111.5 22.9023 110.375 23.4727C109.25 24.043 107.957 24.3281 106.496 24.3281ZM122.176 24.2812C120.816 24.2812 119.648 24.0156 118.672 23.4844C117.695 22.9531 116.941 22.1914 116.41 21.1992C115.887 20.1992 115.625 19 115.625 17.6016V17.5781C115.625 16.1953 115.891 15.0078 116.422 14.0156C116.961 13.0156 117.719 12.25 118.695 11.7188C119.68 11.1797 120.836 10.9102 122.164 10.9102C123.508 10.9102 124.668 11.1758 125.645 11.707C126.621 12.2383 127.379 13 127.918 13.9922C128.457 14.9844 128.727 16.1797 128.727 17.5781V17.6016C128.727 19.0078 128.461 20.2109 127.93 21.2109C127.406 22.2031 126.652 22.9648 125.668 23.4961C124.691 24.0195 123.527 24.2812 122.176 24.2812ZM122.176 21.1289C122.66 21.1289 123.074 20.9922 123.418 20.7188C123.77 20.4375 124.035 20.0352 124.215 19.5117C124.402 18.9883 124.496 18.3516 124.496 17.6016V17.5781C124.496 16.8359 124.398 16.2031 124.203 15.6797C124.016 15.1562 123.746 14.7578 123.395 14.4844C123.051 14.2031 122.641 14.0625 122.164 14.0625C121.695 14.0625 121.285 14.2031 120.934 14.4844C120.59 14.7578 120.324 15.1562 120.137 15.6797C119.949 16.2031 119.855 16.8359 119.855 17.5781V17.6016C119.855 18.3516 119.945 18.9883 120.125 19.5117C120.312 20.0352 120.582 20.4375 120.934 20.7188C121.285 20.9922 121.699 21.1289 122.176 21.1289ZM130.602 24V6.90234H134.75V24H130.602ZM143.176 24.2812C141.816 24.2812 140.648 24.0156 139.672 23.4844C138.695 22.9531 137.941 22.1914 137.41 21.1992C136.887 20.1992 136.625 19 136.625 17.6016V17.5781C136.625 16.1953 136.891 15.0078 137.422 14.0156C137.961 13.0156 138.719 12.25 139.695 11.7188C140.68 11.1797 141.836 10.9102 143.164 10.9102C144.508 10.9102 145.668 11.1758 146.645 11.707C147.621 12.2383 148.379 13 148.918 13.9922C149.457 14.9844 149.727 16.1797 149.727 17.5781V17.6016C149.727 19.0078 149.461 20.2109 148.93 21.2109C148.406 22.2031 147.652 22.9648 146.668 23.4961C145.691 24.0195 144.527 24.2812 143.176 24.2812ZM143.176 21.1289C143.66 21.1289 144.074 20.9922 144.418 20.7188C144.77 20.4375 145.035 20.0352 145.215 19.5117C145.402 18.9883 145.496 18.3516 145.496 17.6016V17.5781C145.496 16.8359 145.398 16.2031 145.203 15.6797C145.016 15.1562 144.746 14.7578 144.395 14.4844C144.051 14.2031 143.641 14.0625 143.164 14.0625C142.695 14.0625 142.285 14.2031 141.934 14.4844C141.59 14.7578 141.324 15.1562 141.137 15.6797C140.949 16.2031 140.855 16.8359 140.855 17.5781V17.6016C140.855 18.3516 140.945 18.9883 141.125 19.5117C141.312 20.0352 141.582 20.4375 141.934 20.7188C142.285 20.9922 142.699 21.1289 143.176 21.1289ZM151.52 24V11.1914H155.68V13.418H155.785C155.965 12.6211 156.305 12.0078 156.805 11.5781C157.305 11.1484 157.938 10.9336 158.703 10.9336C158.914 10.9336 159.117 10.9492 159.312 10.9805C159.508 11.0039 159.688 11.043 159.852 11.0977V14.6484C159.656 14.5781 159.438 14.5234 159.195 14.4844C158.953 14.4375 158.703 14.4141 158.445 14.4141C157.852 14.4141 157.348 14.5234 156.934 14.7422C156.52 14.9531 156.207 15.2656 155.996 15.6797C155.785 16.0938 155.68 16.6016 155.68 17.2031V24H151.52Z"
          className="svg-fill-primary"
        />
      </svg>
      <nav
        style={{
          visibility: showNav || screenSize > 800 ? "visible" : "hidden",
        }}
      >
        <ul className="nav-links-container">
          <a href="">
            <li className="nav-link">Logos</li>
          </a>
          <a href="">
            <li className="nav-link">Dark Section</li>
          </a>
          <a href="">
            <li className="nav-link">Cards</li>
          </a>
          <a href="">
            <li className="nav-link">Footer</li>
          </a>
        </ul>
      </nav>
      {screenSize < 800 ? (
        <svg
          onClick={() => {
            setShowNav(!showNav);
          }}
          width="18"
          height="15"
          viewBox="0 0 18 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 13.5H17"
            className="svg-stroke-primary"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M1 7.5H17"
            className="svg-stroke-primary"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M1 1.5H17"
            className="svg-stroke-primary"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
