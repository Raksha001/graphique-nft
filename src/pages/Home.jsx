import "../assets/css/Home.css";
import SliderCards from "../components/SliderCards";
import HotBids from "../components/HotBids";

export default function Home(props) {
  return (
    <>
      <div className="d-flex justify-content-center my-4 ">
        <div className="card card-banner p-4">
          <div className="card-body card-text p-lg-5 fs-1 fw-bold">
            Discover, collect, and sell extraordinary NFTs
          </div>
        </div>
      </div>
      <div className="my-3">
        <SliderCards theme={props.theme} />
      </div>
      <div className="my-3">
        <HotBids theme={props.theme} />
      </div>
    </>
  );
}
