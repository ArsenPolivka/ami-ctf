import { TagsList } from './TagsList';
import img from './assets/intro-decoration.png';

import { Container } from '../../components/Layout';
import { Button } from '../../components/Button';

import './Intro.css';

export const Intro = () => {
  return (
    <section className="intro-section">
      <Container>
        <div className="wrapper">
          <div className="column column--first">
            <TagsList rootClassName="tags-list-wrapper" />

            <h1 className="title">Capture your flag now!</h1>

            <p className="text">
              Lorem ipsum dolor sit amet consectetur. Duis aenean condimentum nullam
            </p>

            <div className="btn-group">
              <Button variant="primary" rootClassName="btn">Register now</Button>

              <Button variant="secondary" rootClassName="btn">Read more</Button>
            </div>
          </div>

          <div className="column column--second">
            <img className="decoration" src={img} alt="young man coding on laptop" />
          </div>
        </div>
      </Container>
    </section>
  );
};
