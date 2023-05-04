import Spinner from "../assets/icons8-preloader-64.png";

export default function Loading() {
  return (
    <div className="loading">
      <img src={Spinner} alt="loading icon" className="load-img" />
    </div>
  );
}
