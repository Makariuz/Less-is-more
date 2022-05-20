import { useEffect, useState } from "react";
import { PortfolioList } from "../PortfolioList/PortfolioList";
import "./Portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
  canvaGame,
} from "../../data.js";

import img__canva from "../images/bg-canva.png";
import img__portkey from "../images/bg-portkey.png";
import img__bee from "../images/bg-bee.png";

export function Portfolio({ dark, setDark }) {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
    {
      id: "game",
      title: "Canva Game",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      case "game":
        setData(canvaGame);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="projects">
      <h1 className={'project__title ' + (dark && " dark")}>Projects</h1>
      <div className={"project__list " + (dark && " dark")}>
        <div className="cards__projects">
          <div className="card__img">
            <a href="https://makariuz.github.io/Breakout-Game/" target= '_blank' rel="noreferrer">
              <img src={img__canva} alt="game made in canva" />
            </a>
          </div>

          <div className={"card__title " + (dark && " dark")}>
            <h2>Breakout Game</h2>

            <h3>HTML - CSS - JAVASCRIPT - CANVAS - GITHUB</h3>
          </div>
        </div>

        <div className="cards__projects">
          <div className="card__img">
            <a href="https://portkey1.herokuapp.com/" target= '_blank' rel="noreferrer">
              <img src={img__portkey} alt="game made with NodeJS + ExpressJs" />
            </a>
          </div>

          <div className={"card__title " + (dark && " dark")}>
            <h2>Portkey</h2>
            <h3>
              HTML - CSS - JAVASCRIPT - HANDLEBARS - EXPRESS JS - NODE JS -
              HEROKU - AUTHENTICATION - API
            </h3>
          </div>
        </div>

        <div className="cards__projects">
          <div className="card__img">
            <a href="https://rodrigues-bee.netlify.app/" target= '_blank' rel="noreferrer">
              <img src={img__bee} alt="ecommerce website made with React" />
            </a>
          </div>

          <div className={"card__title " + (dark && " dark")}>
            <h2>Rodrigues Bee</h2>
            <h3>
              REACT - SCSS - JAVASCRIPT - NODE JS - JSONWEBTOKEN - HEROKU -
              NETLIFY - AUTHENTICATION
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
