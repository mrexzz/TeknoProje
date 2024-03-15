import { NavLink } from "react-router-dom";
import Animation from "./Animation";
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';


export default function Home() {
  <link
    rel="stylesheet"
    href="https://video-react.github.io/assets/video-react.css"
  />
  return (
    <>
      <div className='overflow-hidden'>
        <div className="container mt-7 mb-5" >
          <div className="row">
            <div className="col-md-6">
              <h1 className="homeh1">Baslık</h1>
              <p className="homep1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt sapien eu metus euismod, id congue arcu euismod. Nulla
                facilisi.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime harum nostrum possimus cumque aut officiis dolor nisi. Corrupti expedita incidunt sit mollitia, culpa, perferendis accusantium neque odio cupiditate recusandae tenetur.
              </p>
              <NavLink className="mx-2 button button1 " to="/contact">İletişim</NavLink>
            </div>
            <div className="col-md-6 ">
              <img
                className="img-fluid about-image"
                src="../src/assets/projeekle.png"
                alt="Hakkında Resim"
              />
            </div>
          </div>
        </div>
        <div className="corner">
          <div style={{ marginTop: "5%" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa nobis sit? Exercitationem quo, natus doloribus architecto totam fuga quaerat necessitatibus at tempore, repellat veritatis. Quaerat maxime exercitationem itaque nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ratione perspiciatis soluta esse aliquid omnis molestiae iusto facilis recusandae. Quidem quasi a, sed in tempore alias repellat cumque. Ipsum, quae?
            </p>
          </div>
          <div className="container mt-6 mb-5 moon">
            <div className="row">
              <div className="col-md-6">
                <h1>Hakkında</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  tincidunt sapien eu metus euismod, id congue arcu euismod. Nulla
                  facilisi.
                </p>
              </div>
              <div className="col-md-6">
                <h1>Hakkında</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  tincidunt sapien eu metus euismod, id congue arcu euismod. Nulla
                  facilisi.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginBottom: "5%" }}><Animation></Animation>
        </div>
        <Player muted autoPlay loop>
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        </Player></div>
      <div className='overflow-hidden'>
        <div className="container mt-7 mb-5" >
          <div className="row">
            <div className="col-md-3">
              <img
                className="img-fluid about-image"
                src="../src/assets/blockchain-2.png"
                alt="Hakkında Resim"
              />
            </div>
            <div className="col-md-6">
              <h1 className="homeh1">Baslık</h1>
              <p className="homep1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt sapien eu metus euismod, id congue arcu euismod. Nulla
                facilisi.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime harum nostrum possimus cumque aut officiis dolor nisi. Corrupti expedita incidunt sit mollitia, culpa, perferendis accusantium neque odio cupiditate recusandae tenetur.
              </p>
              <NavLink className="mx-2 button button1 " to="/contact">İletişim</NavLink>
            </div>
            <div className="col-md-3 ">
              <img
                className="img-fluid about-image"
                src="../src/assets/flying-money.png"
                alt="Hakkında Resim"
              />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
