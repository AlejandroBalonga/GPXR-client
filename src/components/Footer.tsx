// type Props = {};

function Footer(/* {}: Props */) {
  return (
    <footer className="container-fluid align-items-center">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Patreon
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Instagram
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Facebook
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Twitter
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Redit
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Youtube
          </a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </li> */}
      </ul>
    </footer>
  );
}

export default Footer;
