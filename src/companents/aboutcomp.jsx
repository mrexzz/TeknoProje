import { useSpring, animated } from 'react-spring';
import MovingComponent from 'react-moving-text';


const About = () => {
  const fadeAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const slideAnimation = useSpring({
    marginLeft: 0,
    from: { marginLeft: -200 },
    config: { duration: 1000 },
  });

  return (
    <>
      <div className='overflow-hidden'>
        <h1 className='text-center baslik'>Projemiz</h1>
        <p >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corporis culpa ipsam temporibus sint dolorem, nisi similique non debitis voluptas facilis. Consequuntur placeat minus ipsum rem maxime delectus quasi molestiae!
        </p>
        <br />
        <hr />
        <animated.div style={fadeAnimation}>
          <div className="container mt-5 mb-5" >
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
                <animated.img
                  style={slideAnimation}
                  className="img-fluid about-image"
                  src="https://placekitten.com/400/300"
                  alt="Hakkında Resim"
                />
              </div>
            </div>
          </div>
          <div>
            <MovingComponent
              type="fadeInFromLeft"
              duration="1000ms"
              delay="0.5s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa nobis sit? Exercitationem quo, natus doloribus architecto totam fuga quaerat necessitatibus at tempore, repellat veritatis. Quaerat maxime exercitationem itaque nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ratione perspiciatis soluta esse aliquid omnis molestiae iusto facilis recusandae. Quidem quasi a, sed in tempore alias repellat cumque. Ipsum, quae?
            </p>
            </MovingComponent>

          </div>
          <div className="container mt-6 mb-5">
            <div className="row">
              <div className="col-md-6">
                <animated.img
                  style={slideAnimation}
                  className="img-fluid about-image"
                  src="https://placekitten.com/400/300"
                  alt="Hakkında Resim"
                />
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
        </animated.div>
      </div>
    </>
  );
};

export default About;
