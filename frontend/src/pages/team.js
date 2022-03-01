import { useState, useEffect } from "react";
import { LandingBackground } from '../components/landing/landing-background';
import { LandingContentsWrapper } from '../components/landing/landing-contents-wrapper';
import { LandingNavbar } from '../components/landing/landing-navbar';
import { LandingContentsTitle } from "../components/landing/landing-contents-title";
import { LandingContentsMobile } from '../components/landing/landing-contents-mobile';
import { LandingContentsDesktop } from '../components/landing/landing-contents-desktop';
import { Footer } from '../components/footer';
import JsonData from '../data/data.json';



export default function TeamPage() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const contentsNum = 1;

  function createContents() {
    let contents = [];
    for (let i = 0; i < contentsNum; i++) {
      contents.push(
        <>
          {/* 1200px 이하일 때 */}
          <LandingContentsMobile data={landingPageData.Team} />
          {/* 1200px 이상일 때 */}
          <LandingContentsDesktop data={landingPageData.Team} />
        </>
      );
    }
    return contents;
  }

  return (
    <>
      <LandingBackground />
      <LandingNavbar />

      <LandingContentsWrapper>
          <LandingContentsTitle data={landingPageData.Team} />

          {/* data.json에 있는 내용들 생성 */}
          {createContents()}

      </LandingContentsWrapper>

      <Footer />
    </>
  )
}