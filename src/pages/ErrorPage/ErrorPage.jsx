import { useNavigate, useRouteError } from "react-router-dom";
import './ErrorPage.css'
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import EMPTY_ILLUSTRATION from '../../assets/illustrations/empty-amico.svg'

export default function ErrorPage() {
  const navigate = useNavigate()
  const error = useRouteError();
  console.error(error);

  return (
    <>
    <Header />
    <div id="error-page">
      <img src={EMPTY_ILLUSTRATION} alt="empty illustration" />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button onClick={() => navigate('/')} btnType="btn-primary">Go back</Button>
    </div>
    <Footer />
    </>
  );
}