import './Hobbies.scss'

export function Hobbies({dark, setDark}){

    const data = [
        {
          id: 1,
          name: "Rita Guerreiro",
          title: "Singer",
          img:
            "https://f4.bcbits.com/img/a3871468656_16.jpg",
          icon: "assets/twitter.png",
          desc:
            '"O melhor que nunca tive"(The best I never had) is a story in which the character suffers through the experience of the loss of someone whom she loved, but through which she also finds the capacity to grow and become a better person.',
        },
       {
          id: 2,
          name: "Alex Kalinski",
          title: "Co-Founder of DELKA",
          img:
            "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/youtube.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
          featured: true,
        },
         /* {
          id: 3,
          name: "Martin Harold",
          title: "CEO of ALBI",
          img:
            "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/linkedin.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        }, */
      ];

    return (
        <div className='hobbies' id="hobbies">
            <h1>Hobbies</h1>
            <div className='container'>
            {data.map((d) => (
                <div className={d.featured ? 'card featured' : 'card'}>
                    <div className='top'>
                        <img src="assets/right-arrow.png" className='left' alt="" />
                        <img className='user' src={d.img} alt="" />
                        <img src={d.icon} className='right' alt="" />
                    </div>
                    <div className='center'>
                        {d.desc}

                    </div>
                    <div className='bottom'>
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
            ))}
            <iframe
        src="https://www.youtube.com/embed/E7wJTI-1dvQ"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />
            </div>
        </div>
    )
}