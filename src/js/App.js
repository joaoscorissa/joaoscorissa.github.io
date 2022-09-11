import avatar from '../media/avatar.jpeg';
import '../css/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <img src={avatar} className="App-avatar" alt="avatar" />
              <p className="App-title">
                  João Scorissa de Moura
              </p>
              <p className="App-subtitle">
                  FullStack Developer @
                  <a rel="noopener noreferrer" className="App-link" href="https://oltsoft.com.br/" target="__blank">
                      Red Blue Green LTDA.
                  </a>
              </p>
              <div className="App-icons">
                  <a className="App-link" href="https://github.com/joaoscorissa"
                     target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="lg"></FontAwesomeIcon>
                  </a>
                  <a className="App-link" href="https://www.linkedin.com/in/joao-claudio-scorissa-de-moura/"
                     target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="lg"></FontAwesomeIcon>
                  </a>
                  <a className="App-link" href="https://twitter.com/jaunehissu" target="_blank"
                     rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size="lg"></FontAwesomeIcon>
                  </a>
              </div>
          </header>
      </div>
  );
}

export default App;
