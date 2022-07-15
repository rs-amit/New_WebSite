import React, { useState, Suspense, lazy } from "react";

const TopBannerImage = lazy(() =>
  import("../sections/consultancy/topBannerImage")
);
const SecondSection = lazy(() =>
  import("./../sections/consultancy/secondSection")
);
const FreeFollowUps = lazy(() =>
  import("./../sections/consultancy/thirdSection")
);
const Guidance = lazy(() => import("./../sections/consultancy/guidance"));
const ForthSection = lazy(() =>
  import("./../sections/consultancy/forthSection")
);
const ConnectWithUs = lazy(() =>
  import("./../sections/consultancy/fifthSection")
);
const SixthSection = lazy(() =>
  import("./../sections/consultancy/sixthSection")
);
const Footer = lazy(() => import("./../sections/consultancy/footer"));

function LandingPage() {
  const [isScroll, setScroll] = useState(false);

  return (
    <div>
      <Suspense fallback={<div />}>
        <TopBannerImage setScroll={() => setScroll()} isScroll={isScroll} />
      </Suspense>
      <Suspense fallback={<div />}>
        <SecondSection />
      </Suspense>
      <Suspense fallback={<div />}>
        <FreeFollowUps />
      </Suspense>
      <Suspense fallback={<div />}>
        <Guidance />
      </Suspense>
      <Suspense fallback={<div />}>
        <div style={{ marginBottom: 35 }}>
          <ForthSection />
        </div>
      </Suspense>
      <Suspense fallback={<div />}>
        <ConnectWithUs />
      </Suspense>
      <Suspense fallback={<div />}>
        <SixthSection />{" "}
      </Suspense>
      <Suspense fallback={<div />}>
        {" "}
        <Footer />
      </Suspense>
    </div>
  );
}

export default LandingPage;
