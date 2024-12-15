import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about1.jpg";
import "./about.css";
import History from "./History";
import { history1, history2 } from "../data/Data";

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className="container mtop">
          <div className="vision">
            <Heading title="사람과 바다의 공존" subtitle="안전하고 지속 가능한 양식을 꿈꿉니다." />
          </div>
          <div>
            <div className="mark-container">
              <div className="mark-container-col1">
                <div className="mark">
                  <div>
                    <p className="mark-number">1.</p>
                  </div>
                </div>
                <div className="mark-content">
                  <h3 className="mark-title">
                    안전한 바다를 꿈꾸며 시작한 여정
                  </h3>
                  <p>
                    '양식업을 비롯한 바다에서 하는 일을 어떻게 하면 더 안전하게
                    할 수 있을까?' 씨뱅크는 이 질문에서 시작되었고, 해양 안전을
                    위해 5년 간 연구개발에 매달렸습니다. 그 후,
                    통신거리·안정성·정확성을 모두 충족하는 ​개인 위치발신장비
                    '조난알리미' 개발에 성공했습니다. 성능 및 안정성을 인정받아
                    조난안전장비로는 최초로 KT의 LTE망을 사용하게 되었으며,
                    현재는 ​부산항만공사, 한국해양수산연수원, 삼부토건 등 여러
                    기관과 기업에서 사용되고 있습니다.
                  </p>
                </div>
              </div>
              <div className="mark-container-col2">
                <img src="./about0.png" alt="" />
              </div>
            </div>
            <div className="mark-container">
              <div className="mark-container-col1">
                <div className="mark">
                  <div>
                    <p className="mark-number">2.</p>
                  </div>
                </div>
                <div className="mark-content">
                  <h3 className="mark-title">
                    안전의 확보와 함께, 지속 가능한 양식업의 미래로 나아갑니다
                  </h3>
                  <p>
                    ​우리나라 양식어업은 대전환의 국면을 맞이하고 있습니다.
                    양식장비는 친환경 양식장비로 바꿔야 하고, 줄어드는 인력은
                    자동화 장비로 보충해야 합니다. 이 과정에서 씨뱅크는
                    우리나라에서 가장 많이 수출되는 수산물, '굴'에 주목했습니다.
                    전 세계의 최신 양식장비를 한국 현장에 적용해본 결과, 헥실과
                    플립팜의 개체굴 양식 장비가 우리 환경에 가장 잘 맞는다는 걸
                    확인할 수 있었습니다. 그 후 2024년, 헥실과 플립팜의 개체굴
                    양식 시스템을 국내 최초로 거제에 설치했습니다.
                  </p>
                </div>
              </div>
              <div className="mark-container-col2">
                <img src="./about1.jpg" alt="" />
              </div>
            </div>
            <div className="mark-container">
              <div className="mark-container-col1">
                <div className="mark">
                  <div>
                    <p className="mark-number">3.</p>
                  </div>
                </div>
                <div className="mark-content">
                  <h3 className="mark-title">
                    스마트 양식의 핵심, 해양 데이터
                  </h3>
                  <p>
                    양식의 성패를 결정짓는 요소 중 하나는 바다 환경입니다. 이를
                    얼마나 잘 기록하고 예측하느냐에 따라 그 해 수확물의 질이
                    달라집니다. 지금까지는 이런 부분을 경력 있는 양식업자들의
                    경험과 노하우에 의존해 왔습니다. 씨뱅크는 이를 수치화하여
                    기록하고, 축적된 데이터를 향후 예측에 활용하기 위해 해양
                    데이터 수집 장비, 씨스테이션(Sea-Station)을 개발했습니다.
                    씨스테이션은 현재 5대를 자체 운용하고 있으며, 약 250만
                    세트의 데이터를 축적했습니다.
                  </p>
                </div>
              </div>
              <div className="mark-container-col2">
                <img src="./about2.png" alt="" />
              </div>
            </div>
            <div className="mark-container">
              <div className="mark-container-col1">
                <div className="mark">
                  <div>
                    <p className="mark-number">4.</p>
                  </div>
                </div>
                <div className="mark-content">
                  <h3 className="mark-title">
                    국내 최초 친환경 양식 작업선 개발
                  </h3>
                  <p>
                    현재 한국에서 사용하는 약 2000대의 양식 작업선은 디젤 엔진을
                    사용하여 온실가스를 배출, 환경에 나쁜 영향을 끼치고
                    있습니다. 이에 씨뱅크는 오직 친환경 재생 에너지만 사용하는
                    ESS(Energy Storage System) 기반 해상 양식 작업선을 25년에
                    개발 완료하여 기존 양식 작업선을 대체할 예정입니다. 씨뱅크는
                    해양 데이터 수집과 함께 친환경적인 양식 장비를 수입 및 자체
                    개발하여 대한민국 양식 산업의 첨단화를 주도하는 기업으로
                    발돋움하고 있습니다.
                  </p>
                </div>
              </div>
              <div className="mark-container-col2">
                <img src="./about4.png" alt="" />
              </div>
            </div>
          </div>

        </div>
          <div className="container mtop">
            <Heading title="회 사 연 혁" subtitle="History of Company" />
            <div className="history-container">
              <History className='history-title' history={history1} />
              <History className='history-content' history={history2} />
            </div>
          </div>
      </section>
    </>
  );
};

export default About;
