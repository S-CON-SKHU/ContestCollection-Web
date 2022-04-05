import LottieWrapper from "components/Common/LottieWrapper";
import bgLottieData from "assets/lottie/hello.json";

function HelloLottie() {
  return (
    <div>
      <LottieWrapper lottieData={bgLottieData} />
    </div>
  );
}

export default HelloLottie;