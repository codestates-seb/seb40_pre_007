import LogoIcon from "../assets/Stack_Overflow-Icon.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className=" bg-[#232629] w-screen h-screen text-[#9199A1] px-8 md:flex lg:justify-center">
      {/* Logo */}
      <div className="mt-4 md:mt-8 md:mr-4 lg:mr-8">
        <Link to={"/"}>
          <img
            src={LogoIcon}
            alt="stack-overflow logo icon"
            className="w-11 h-11"
          />
        </Link>
      </div>

      <div className="flex flex-col text-sm my-9 lg:flex-row">
        <div className="flex flex-col justify-between w-[850px] mr-20 space-y-6 lg:space-y-0 lg:flex-row">
          {/* STACK OVERFLOW */}
          <div className="flex flex-col">
            <strong className="text-[#BABFC4] mb-2 lg:mb-4">
              STACK OVERFLOW
            </strong>

            <div className="flex-col space-x-2 lg:flex lg:space-x-0 lg:space-y-2">
              <Link to={"/main"} className="mr-2">
                Questions
              </Link>
              <a href="https://stackoverflow.com/help">Help</a>
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="flex flex-col">
            <strong className="text-[#BABFC4] mb-2 lg:mb-4">PRODUCTS</strong>
            <ul className="flex items-center space-x-3 lg:flex-col lg:items-start lg:space-y-2 lg:space-x-0">
              <li>
                <a href="https://stackoverflow.co/teams">Teams</a>
              </li>
              <li>
                <a href="https://stackoverflow.co/advertising">Advertising</a>
              </li>
              <li>
                <a href="https://stackoverflow.co/collectives">Collectives</a>
              </li>
              <li>
                <a href="https://stackoverflow.co/talent">Talent</a>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="flex flex-col">
            <strong className="text-[#BABFC4] mb-2 lg:mb-4">COMPANY</strong>
            <ul className="flex space-x-3 lg:flex-col lg:space-y-2 lg:space-x-0">
              <li>
                <a href="https://stackoverflow.co">About</a>
              </li>
              <li>
                <a href="https://stackoverflow.co/company/press">Press</a>
              </li>
              <li>
                <a href="https://stackoverflow.co/company/work-here">
                  Work Here
                </a>
              </li>
              <li>
                <a href="https://stackoverflow.com/legal/terms-of-service">
                  Legal
                </a>
              </li>
              <li>
                <a href="https://stackoverflow.com/legal/privacy-policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://stackoverflow.com/legal/terms-of-service">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="https://stackoverflow.co/company/contact">
                  Contact US
                </a>
              </li>
              <li>Cookie Settings</li>
              <li>
                <a href="https://stackoverflow.com/legal/cookie-policy">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* STACK EXCHANGE NETWORK */}
          <div className="flex flex-col">
            <strong className="text-[#BABFC4] mb-2 lg:mb-4">
              STACK EXCHANGE NETWORK
            </strong>
            <div className="flex space-x-3 lg:flex-col lg:justify-between lg:space-x-0 lg:h-60">
              <ul className="flex space-x-3 lg:flex-col lg:space-y-2 lg:space-x-0">
                <li>
                  <a href="https://stackexchange.com/sites#technology">
                    Technology
                  </a>
                </li>

                <li>
                  <a href="https://stackexchange.com/sites#culturerecreation">
                    Culture & recreation
                  </a>
                </li>

                <li>
                  <a href="https://stackexchange.com/sites#lifearts">
                    Life & arts
                  </a>
                </li>

                <li>
                  <a href="https://stackexchange.com/sites#science">Science</a>
                </li>

                <li>
                  {" "}
                  <a href="https://stackexchange.com/sites#professional">
                    Professional
                  </a>
                </li>

                <li>
                  <a href="https://stackexchange.com/sites#business">
                    Business
                  </a>
                </li>
              </ul>

              <ul className="flex space-x-3 lg:flex-col lg:space-x-0 lg:space-y-2">
                <li>
                  <a href="https://api.stackexchange.com/">API</a>
                </li>

                <li>
                  <a href="https://data.stackexchange.com/">Data</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-xs mt-12 lg:w-[300px] lg:mt-0 justify-between">
          {/* Social links*/}
          <ul className="flex mb-2 space-x-3 lg:justify-between">
            <li>
              <a href="https://stackoverflow.blog/?blb=1&_ga=2.2664438.756281420.1666847592-675102323.1666846517">
                Blog
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/officialstackoverflow">
                FaceBook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/stackoverflow">Twitter</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/stack-overflow">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/thestackoverflow">Instagram</a>
            </li>
          </ul>

          {/* Copyright*/}
          <p>
            Site design / logo © 2022 Stack Exchange Inc; user contributions
            licensed under
            <span>
              <a href="https://stackoverflow.com/help/licensing">CC BY-SA.</a>
            </span>
            <br className="hidden lg:block" />
            <span>rev 2022.10.26.42989</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
