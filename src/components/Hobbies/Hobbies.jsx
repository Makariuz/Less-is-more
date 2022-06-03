import "./Hobbies.scss";

export function Hobbies({ dark, setDark }) {
  return (
    <div className="hobbies" id="hobbies">
      <h1>Music</h1>
      <div className="container">
        <div className="card first">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/IWCOP6rWtFc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="card second">
        <img src="https://f4.bcbits.com/img/a3871468656_16.jpg" alt="" />
          <iframe
          
             width="237px"
            height="42px"
            src="https://bandcamp.com/EmbeddedPlayer/album=2475593599/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/"
            seamless
            title="Bandcamp player"
          >
            <a href="https://seezyp.bandcamp.com/album/o-melhor-que-nunca-tive">
              O melhor que nunca tive by Rita Guerreiro
            </a>
          </iframe>
        </div>
        <div className="card third">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/bVeW31s4D9U"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
