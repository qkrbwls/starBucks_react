// 1. 연동하기 리액트로

function StarBucks(){
        return(
            <>
                <SkipComponent/>
                <WrapComponent/>
                <MobileNavComponent/>
                <QuickMenuComponent/>
                <GoTopComponent/>
                <validaterComponent/>
            </>
        )
    }

    //Skip
    class SkipComponent extends React.Component {
        render() {
            return (
                <>
                    <ul id="skip">
                        <li><a href="#header">메뉴바로가기</a></li>
                        <li><a href="#main">콘텐츠바로가기</a></li>
                        <li><a href="#footer">푸터바로가기</a></li>
                    </ul>  
                </>
            );
        }
    }

    //Wrap
    class WrapComponent extends React.Component {
        render() {
            return (
                <>
                    <div id="wrap">
                        <HeaderComponent/>
                        <MainComponent/>
                        <FooterComponent/>
                    </div>
                </>
            );
        }
    }

    //MobileNav
    class MobileNavComponent extends React.Component {
        render() {
            return (
                <>
                    <nav id="mobileNav" className="">
                        <div className="mobile-container">

                            <span className="mobile-close"><a href="#" className="mobile-close-btn"><img src="./images/btn_gnb_close.png" alt=""/></a></span>
                            
                            <ul>
                                <li>
                                    <form name="searchform" method="post" action="abc.php">
                                        <div className="mobile-searchform">
                                            <input type="text" name="mobile-search" id="mobile-search" value=""/>
                                            <button>Search</button>
                                        </div>
                                    </form>
                                </li>
                                <li>
                                    <a href="#" className="mobile-main-btn">My Starbucks</a>
                                    <div className="mobile-sub">
                                        <ul>
                                            <li><a href="#" className="none-sub">한눈에 보기</a></li>
                                            <li>
                                                <a href="#">My 리워드</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">리워드 및 혜택</a></li>
                                                        <li><a href="#">별 히스토리</a></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">My 스타벅스 카드</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">보유 카드</a></li>
                                                        <li><a href="#">카드 등록</a></li>
                                                        <li><a href="#">카드 충전</a></li>
                                                        <li><a href="#">분실신고/잔액이전</a></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">My 스타벅스 e-Gift Card</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">선물하기</a></li>
                                                        <li><a href="#">선물 내역</a></li>
                                                        <li><a href="#">장바구니 내역</a></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">My 쿠폰</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">등록하기</a></li>
                                                        <li><a href="#">선물하기</a></li>
                                                        <li><a href="#">사용하기</a></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                            <li><a href="#" className="none-sub">My 캘린더</a></li>
                                            <li><a href="#" className="none-sub">My 메뉴</a></li>
                                            <li><a href="#" className="none-sub">My 고객의 소리</a></li>
                                            <li><a href="#" className="none-sub">전자영수증</a></li>
                                            <li><a href="#" className="none-sub">개인컵 리워드 설정</a></li>
                                            <li><a href="#" className="none-sub">My DT Pass</a></li>
                                            <li>
                                                <a href="#">개인정보관리</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">개인정보확인 및 수정</a></li>
                                                        <li><a href="#">회원 탈퇴</a></li>
                                                        <li><a href="#">비밀번호 변경</a></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="mobile-main-btn">COFFEE</a>
                                    <div className="mobile-sub">
                                        <ul>
                                            <li><a href="#" className="none-sub">한눈에 보기</a></li>
                                            <li>
                                                <a href="#">커피</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">스타벅스 원두</a></li>
                                                        <li><a href="#">스타벅스 비아</a></li>
                                                        <li><a href="#">스타벅스앳홈 by 캡슐</a></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                            <li><a href="#" className="none-sub">나와 어울리는 커피</a></li>
                                            <li>
                                                <a href="#">스타벅스 리저브™</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">ABOUT</a></li>
                                                        <li><a href="#">RESERVE MAGAZINE</a></li>
                                                    
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">에스프레소 음료</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">도피오</a></li>
                                                        <li><a href="#">에스프레소 마키아또</a></li>
                                                        <li><a href="#">아메리카노</a></li>
                                                        <li><a href="#">마키아또</a></li>
                                                        <li><a href="#">카푸치노</a></li>
                                                        <li><a href="#">라떼</a></li>
                                                        <li><a href="#">모카</a></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">최상의 커피를 즐기는 법</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">커피 프레스</a></li>
                                                        <li><a href="#">푸어 오버</a></li>
                                                        <li><a href="#">아이스 푸어 오버</a></li>
                                                        <li><a href="#"> 커피 메이커</a></li>
                                                        <li><a href="#">리저브를 매장에서 다양하게 즐기는 법</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">커피 이야기</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">농장에서 우리의 손으로</a></li>
                                                        <li><a href="#">최상의 아라비카 원두</a></li>
                                                        <li><a href="#">스타벅스 로스트 스펙트럼</a></li>
                                                        <li><a href="#">스타벅스 디카페인</a></li>
                                                        <li><a href="#">클로버® 커피 추출 시스템</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="mobile-main-btn">MENU</a>
                                    <div className="mobile-sub">
                                        <ul>
                                            <li><a href="#" className="none-sub">한눈에 보기</a></li>
                                            <li>
                                                <a href="#">음료</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">전체보기</a></li>
                                                        <li><a href="#">콜드 브루</a></li>
                                                        <li><a href="#">브루드 커피</a></li>
                                                        <li><a href="#">에스프레소</a></li>
                                                        <li><a href="#">프라푸치노</a></li>
                                                        <li><a href="#">블렌디드</a></li>
                                                        <li><a href="#">스타벅스 피지오</a></li>
                                                        <li><a href="#">티(티바나)</a></li>
                                                        <li><a href="#">기타 제조 음료</a></li>
                                                        <li><a href="#">스타벅스 주스(병음료)</a></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">푸드</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">전체보기</a></li>
                                                        <li><a href="#">브레드</a></li>
                                                        <li><a href="#">케이크</a></li>
                                                        <li><a href="#">샌드위치 & 샐러드</a></li>
                                                        <li><a href="#">따뜻한 푸드</a></li>
                                                        <li><a href="#">과일 & 요거트</a></li>
                                                        <li><a href="#">스낵 & 미니 디저트</a></li>
                                                        <li><a href="#">아이스크림</a></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">상품</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">전체보기</a></li>
                                                        <li><a href="#">머그</a></li>
                                                        <li><a href="#">글라스</a></li>
                                                        <li><a href="#">플라스틱 텀블러</a></li>
                                                        <li><a href="#">스테인리스 텀블러</a></li>
                                                        <li><a href="#">보온병</a></li>
                                                        <li><a href="#">액세서리</a></li>
                                                        <li><a href="#">커피 용품</a></li>
                                                        <li><a href="#">패키지 티(티바나)</a></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">카드</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">전체보기</a></li>
                                                        <li><a href="#">실물카드</a></li>
                                                        <li><a href="#">e-Gift 카드</a></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">메뉴 이야기</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">나이트로 콜드브루</a></li>
                                                        <li><a href="#">콜드 브루</a></li>
                                                        <li><a href="#">스타벅스 티바나</a></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="mobile-main-btn">STORE</a>
                                    <div className="mobile-sub">
                                        <ul>
                                            <li><a href="#" className="none-sub">한눈에 보기</a></li>
                                            <li>
                                                <a href="#">매장 찾기</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">빠른 검색</a></li>
                                                        <li><a href="#">지역 검색</a></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                            <li><a href="#" className="none-sub">드라이브 스루 매장</a></li>
                                            <li><a href="#" className="none-sub">스타벅스 리저브™ 매장</a></li>
                                            <li><a href="#" className="none-sub">커뮤니티 스토어 매장</a></li>
                                            <li>
                                                <a href="#">매장 이야기</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">티바나 바 매장</a></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="mobile-main-btn">RESPONSIBILITY</a>
                                    <div className="mobile-sub">
                                        <ul>
                                            <li><a href="#" className="none-sub">한눈에 보기</a></li>
                                            <li><a href="#" className="none-sub">사회공헌 캠페인 소개</a></li>
                                            <li>
                                                <a href="#">지역 사회 참여 활동</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">희망배달 캠페인</a></li>
                                                        <li><a href="#">재능기부 카페 소식</a></li>
                                                        <li><a href="#">커뮤니티 스토어</a></li>
                                                        <li><a href="#">청년 지원 프로그램</a></li>
                                                        <li><a href="#">우리 농산물 사랑 캠페인</a></li>
                                                        <li><a href="#">우리 문화 지키기</a></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">환경보호 활동</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">친환경 활동</a></li>
                                                        <li><a href="#">일회용 컵 없는 매장</a></li>
                                                        <li><a href="#">커피 원두 재활용</a></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">윤리 구매</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">윤리적 원두 구매</a></li>
                                                        <li><a href="#">공정무역 인증</a></li>
                                                        <li><a href="#">커피 농가 지원 활동</a></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">글로벌 사회 공헌</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">윤리경영 보고서</a></li>
                                                        <li><a href="#">스타벅스 재단</a></li>
                                                        <li><a href="#">지구촌 봉사의 달</a></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="mobile-main-btn">Starbucks Rewards</a>
                                    <div className="mobile-sub">
                                        <ul>
                                            <li><a href="#" className="none-sub">한눈에 보기</a></li>
                                            <li>
                                                <a href="#">스타벅스 리워드</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">스타벅스 리워드 소개</a></li>
                                                        <li><a href="#">등급 및 혜택</a></li>
                                                        <li><a href="#">스타벅스 별</a></li>
                                                        <li><a href="#">자주 하는 질문</a></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">스타벅스 카드</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">스타벅스 카드 소개</a></li>
                                                        <li><a href="#">스타벅스 카드 갤러리</a></li>
                                                        <li><a href="#">등록 및 조회</a></li>
                                                        <li><a href="#">충전 및 이용안내</a></li>
                                                        <li><a href="#">분실신고/환불신청</a></li>
                                                        <li><a href="#">자주 하는 질문</a></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">스타벅스 e-Gift Card</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">스타벅스 e-Gift Card 소개</a></li>
                                                        <li><a href="#">이용안내</a></li>
                                                        <li><a href="#">선물하기</a></li>
                                                        <li><a href="#">자주 하는 질문</a></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="mobile-main-btn">WHAT'S NEW</a>
                                    <div className="mobile-sub">
                                        <ul>
                                            <li><a href="#" className="none-sub">한눈에 보기</a></li>
                                            <li>
                                                <a href="#">이벤트</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">전체</a></li>
                                                        <li><a href="#">스타벅스 카드</a></li>
                                                        <li><a href="#">스타벅스 리워드</a></li>
                                                        <li><a href="#">온라인</a></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">뉴스</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">전체</a></li>
                                                        <li><a href="#">상품 출시</a></li>
                                                        <li><a href="#">스타벅스 문화</a></li>
                                                        <li><a href="#">스타벅스 사회공헌</a></li>
                                                        <li><a href="#">스타벅스 카드출시</a></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">매장별 이벤트</a>
                                                <div className="mobile-sub-sub">
                                                    <ul>
                                                        <li><a href="#">일반 매장</a></li>
                                                        <li><a href="#">신규 매장</a></li>
                                                    
                                                    </ul>
                                                </div>
                                            </li>
                                            <li><a href="#" className="none-sub">공지사항</a></li>
                                            <li><a href="#" className="none-sub">월페이퍼</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </>
            );
        }
    }

    //QuickMenu
    class QuickMenuComponent extends React.Component {
        render() {
            return (
                <>
                    <div className="quick-menu">
                        <a href="#" className="quick-menu-btn" title="스타벅스현대카드">
                            <img src="./images/lIpY1G_20211130084912188.png" alt="퀵메뉴 스타벅스 현대카드"/>
                        </a>
                    </div>  
                </>
            );
        }
    }

    //GoTop
    class GoTopComponent extends React.Component {
        render(){
            return(
                <>
                    <div className="go-top">
                        <a href="#" className="go-top-btn">
                            <img src="./images/btn_prom_up.png" alt="go Top 버튼"/>
                        </a>
                    </div>
                </>
            )
        }
    }

    //validater
    class validaterComponent extends React.Component {
        render() {
            return (
                <>
                    <div className="validater">
                        <p className="validator-html">
                            <a href="http://validator.kldp.org/check?uri=referer"title="validator-html">
                            <img
                            src="http://validator.kldp.org/w3cimgs/validate/html5-blue.png" alt="Valid HTML 5" height="15" width="80"/></a>
                        </p>

                        <p className="validator-css3">
                            <a href="http://css-validator.kldp.org/check/referer" title="validator-css"><img style={{border:'0',width:'80px',height:'15px'}} src="http://css-validator.kldp.org/images/validate/css-blue" alt="올바른 CSS입니다!" /></a>
                        </p>
                    </div>
                </>
            );
        }
    }
    
    







    
    //  WrapComponent > HeaderComponent
    class HeaderComponent extends React.Component {
        render() {
            return (
                <>
                    <header id="header">
                        <div className="container clearfix">
                        <div className="logo-box">
                            <h1><a href="#" title="logo"><img src="./images/logo.png" alt="logo"/></a></h1>
                        </div>
                        <div className="nav-box">
                            <aside id="aside">
                            <ul>
                                <li><a href="#" title="Sign In">Sign In</a></li>
                                <li><a href="#" title="My Starbucks">My Starbucks</a></li>
                                <li><a href="#" title="Customer Service & Ideas">Customer Service & Ideas</a></li>
                                <li><a href="#" title="Find a Store">Find a Store</a></li>
                                <li>
                                <div className="find-box">
                                    <input type="text" placeholder="통합검색"/>
                                    <a href="#" title="통합검색"  className="find-btn">
                                    <img src="./images/icon_magnifier_black.png" alt="zoom icon"/>
                                    </a>
                                </div>
                                </li>
                            </ul>
                            </aside>
                            <nav id="nav">
                                <ul>
                                <li>
                                    <a href="#" className="main-btn">COFFEE</a>
                                    <div className="sub sub1">
                                        <div className="sub-top">
                                            <div className="sub-container">
                                                <ul className="clearfix">
                                                    <li>{/* <!-- 1칸 --> */}
                                                        <dl>
                                                            <dt><a href="#">커피</a></dt>
                                                            <dd><a href="#">스타벅스 원두</a></dd>
                                                            <dd><a href="#">스타벅스 비아</a></dd>
                                                            <dd><a href="#">스타벅스앳홈 by 캡슐</a></dd>
                                                        </dl>
                                                    </li>
                                                    <li>{/* <!-- 2칸 --> */}
                                                        <dl>
                                                            <dt><a href="#">나와 어울리는 커피</a></dt>
                                                            <dd><a href="#"></a></dd>
                    
                                                        </dl>
                                                    </li>
                                                    <li>{/* <!-- 3칸 --> */}
                                                        <dl>
                                                            <dt><a href="#">스타벅스 리저브™</a></dt>
                                                            <dd><a href="#">RESERVE MAGAZINE</a></dd>
                                                        </dl>
                                                    </li>
                                                    <li>{/* <!-- 4칸 --> */}
                                                        <dl>
                                                            <dt><a href="#">에스프레소 음료</a></dt>
                                                            <dd><a href="#">도피오</a></dd>
                                                            <dd><a href="#">에스프레소</a></dd>
                                                            <dd><a href="#">마키아또</a></dd>
                                                            <dd><a href="#">아메리카노마키아또</a></dd>
                                                            <dd><a href="#">카푸치노</a></dd>
                                                            <dd><a href="#">라떼</a></dd>
                                                            <dd><a href="#">모카</a></dd>
                                                        </dl>
                                                    </li>
                                                    <li>{/* <!-- 5칸 --> */}
                                                        <dl>
                                                            <dt><a href="#">최상의 커피를 즐기는 법</a></dt>
                                                            <dd><a href="#">커피 프레스</a></dd>
                                                            <dd><a href="#">푸어 오버</a></dd>
                                                            <dd><a href="#">아이스 푸어 오버</a></dd>
                                                            <dd><a href="#">리저브를 매장에서 다양하게 즐기는 법</a></dd>
                                                        </dl>
                                                    </li>
                                                </ul>
                    
                                                <ul className="clearfix">
                                                    <li>{/* <!-- 1칸 --> */}
                                                        <dl>
                                                            <dt><a href="#">커피 이야기</a></dt>
                                                            <dd><a href="#">농장에서 우리의 손으로</a></dd>
                                                            <dd><a href="#">최상의 아라비카 원두</a></dd>
                                                            <dd><a href="#">스타벅스 디카페인</a></dd>
                                                            <dd><a href="#">클로버® 커피 추출 시스템</a></dd>
                                                        </dl>
                                                    </li>
                                                </ul>                    
                                            </div>
                                        </div>
                                        <div className="sub-bottom">
                                            <div className="sub-container">
                                                <dl>
                                                    <dt><a href="#">나와 어울리는 커피 찾기</a></dt>
                                                    <dd>스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.</dd>
                                                    <dt><a href="#">최상의 커피를 즐기는 법</a></dt>
                                                    <dd>여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="main-btn">MENU</a>
                                    <div className="sub sub2">
                                        <div className="sub-top">
                                            <div className="sub-container">
                                                <ul className="clearfix">
                                                <li>{/* <!-- 1칸 --> */}
                                                    <dl>
                                                        <dt><a href="#">음료</a></dt>
                                                        <dd><a href="#">콜드 브루</a></dd>
                                                        <dd><a href="#">브루드 커피</a></dd>
                                                        <dd><a href="#">에스프레소</a></dd>
                                                        <dd><a href="#">프라푸치노</a></dd>
                                                        <dd><a href="#">블렌디드</a></dd>
                                                        <dd><a href="#">스타벅스 피지오</a></dd>
                                                        <dd><a href="#">티(티바나)</a></dd>
                                                        <dd><a href="#">기타 제조 음료</a></dd>
                                                        <dd><a href="#">스타벅스 주스(병음료)</a></dd>
                                                    </dl>
                                                </li>
                                                <li>{/* <!-- 2칸 --> */}
                                                    <dl>
                                                        <dt><a href="#">푸드</a></dt>
                                                        <dd><a href="#">브레드</a></dd>
                                                        <dd><a href="#">케이크</a></dd>
                                                        <dd><a href="#">샌드위치 & 샐러드</a></dd>
                                                        <dd><a href="#">따뜻한 푸드</a></dd>
                                                        <dd><a href="#">과일 & 요거트</a></dd>
                                                        <dd><a href="#">스낵 & 미니 디저트</a></dd>
                                                        <dd><a href="#">아이스크림</a></dd>
                                                    </dl>
                                                </li>
                                                <li>{/* <!-- 3칸 --> */}
                                                    <dl>
                                                        <dt><a href="#">상품</a></dt>
                                                        <dd><a href="#">머그</a></dd>
                                                        <dd><a href="#">글라스</a></dd>
                                                        <dd><a href="#">플라스틱 텀블러</a></dd>
                                                        <dd><a href="#">스테인리스 텀블러</a></dd>
                                                        <dd><a href="#">보온병</a></dd>
                                                        <dd><a href="#">액세서리</a></dd>
                                                        <dd><a href="#">커피 용품</a></dd>
                                                        <dd><a href="#">패키지 티(티바나)</a></dd>
                                                    </dl>
                                                </li>
                                                <li>{/* <!-- 4칸 --> */}
                                                    <dl>
                                                        <dt><a href="#">카드</a></dt>
                                                        <dd><a href="#">실물카드</a></dd>
                                                        <dd><a href="#">e-Gift 카드</a></dd>
                                                    </dl>
                                                </li>
                                                <li>{/* <!-- 5칸 --> */}
                                                    <dl>
                                                        <dt><a href="#">메뉴 이야기</a></dt>
                                                        <dd><a href="#">나이트로 콜드브루</a></dd>
                                                        <dd><a href="#">콜드 브루</a></dd>
                                                        <dd><a href="#">스타벅스 티바나</a></dd>
                                                        <dd><a href="#">리브를 매장에서 다양하게 즐기는 법</a></dd>
                                                    </dl>
                                                </li>
                                                </ul>                  
                                            </div>
                                        </div>
                                        <div className="sub-bottom">
                                            <div className="sub-container">
                                                <dl>
                                                    <dt><a href="#">나이트로 콜드 브루 <img src="./images/icon_gnb_new.png" alt="new icon"/></a></dt>
                                                    <dd>나이트로 커피 정통의 물결치듯 흘러내리는 캐스케이딩과 부드러운 크림을 경험하세요.</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="main-btn">STORE</a>
                                    <div className="sub sub3">
                                        <div className="sub-top">
                                            <div className="sub-container">
                                                <ul className="clearfix">
                                                <li>{/* <!-- 1칸 --> */}
                                                    <dl>
                                                        <dt><a href="#">매장 찾기</a></dt>
                                                        <dd><a href="#">퀵 검색</a></dd>
                                                        <dd><a href="#">지역 검색</a></dd>
                                                    </dl>
                                                </li>
                                                <li>{/*  <!-- 2칸 --> */}
                                                    <dl>
                                                        <dt><a href="#">드라이브 스루 매장</a></dt>
                                                        <dd><a href="#"></a></dd>
                    
                                                    </dl>
                                                </li>
                                                <li>{/* <!-- 3칸 --> */}
                                                    <dl>
                                                        <dt><a href="#">스타벅스 리저브™ 매장</a></dt>
                                                        <dd><a href="#"></a></dd>
                                                    </dl>
                                                </li>
                                                <li>{/* <!-- 4칸 --> */}
                                                    <dl>
                                                        <dt><a href="#">커뮤니티 스토어 매장</a></dt>
                                                        <dd><a href="#"></a></dd>
                                                    </dl>
                                                </li>
                                                <li>{/* <!-- 5칸 --> */}
                                                    <dl>
                                                        <dt><a href="#">매장 이야기</a></dt>
                                                        <dd><a href="#">티바나 바 매장</a></dd>                
                                                    </dl>
                                                </li>
                                                </ul>                  
                                            </div>
                                        </div>
                                        <div className="sub-bottom">
                                            <div className="sub-container">
                                                <dl>
                                                    <dt><a href="#">매장찾기</a></dt>
                                                    <dd>보다 빠르게 매장을 찾아보세요.</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="main-btn">RESPONSIBILITY</a>
                                    <div className="sub sub4">
                                        <div className="sub-top">
                                            <div className="sub-container">
                                                <ul className="clearfix">
                                                <li>{/* <!-- 1칸 --> */}
                                                    <dl>
                                                        <dt><a href="#">사회공헌 캠페인 소개</a></dt>
                                                        <dd></dd>
                                                    </dl>
                                                </li>
                                                <li>{/* <!-- 2칸 --> */}
                                                    <dl>
                                                        <dt><a href="#">지역 사회 참여 활동</a></dt>
                                                        <dd><a href="#">희망배달 캠페인</a></dd>
                                                        <dd><a href="#">재능기부 카페 소식</a></dd>
                                                        <dd><a href="#">커뮤니티 스토어</a></dd>
                                                        <dd><a href="#">청년 지원 프로그램</a></dd>
                                                        <dd><a href="#">우리 농산물 사랑 캠페인</a></dd>
                                                        <dd><a href="#">우리 문화 지키기</a></dd>
                                                    </dl>
                                                </li>
                                                <li>{/* <!-- 3칸 --> */}
                                                    <dl>
                                                        <dt><a href="#">환경보호 활동</a></dt>
                                                        <dd><a href="#">친환경 활동</a></dd>
                                                        <dd><a href="#">일회용 컵 없는 매장</a></dd>
                                                        <dd><a href="#">커피 원두 재활용</a></dd>
                                                    </dl>
                                                </li>
                                                <li>{/* <!-- 4칸 --> */}
                                                    <dl>
                                                        <dt><a href="#">윤리 구매</a></dt>
                                                        <dd><a href="#">윤리적 원두 구매</a></dd>
                                                        <dd><a href="#">공정무역 인증</a></dd>
                                                        <dd><a href="#">커피 농가 지원 활동</a></dd>
                                                    </dl>
                                                </li>
                                                <li>{/* <!-- 5칸 --> */}
                                                    <dl>
                                                        <dt><a href="#">글로벌 사회 공헌</a></dt>
                                                        <dd><a href="#">윤리경영 보고서</a></dd>
                                                        <dd><a href="#">스타벅스 재단</a></dd>
                                                        <dd><a href="#">지구촌 봉사의 달</a></dd>
                                                    </dl>
                                                </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="sub-bottom">
                                            <div className="sub-container">
                                                <dl>
                                                    <dt><a href="#"></a></dt>
                                                    <dd></dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="main-btn">STARBUCKS REWARDS</a>
                                    <div className="sub sub5">
                                        <div className="sub-top">
                                            <div className="sub-container">
                                                <ul className="clearfix">
                                                <li>{/* <!-- 1칸 --> */}
                                                    <dl>
                                                        <dt><a href="#">스타벅스 리워드</a></dt>
                                                        <dd><a href="#">스타벅스 리워드 소개</a></dd>
                                                        <dd><a href="#">등급 및 혜택</a></dd>
                                                        <dd><a href="#">스타벅스 별</a></dd>
                                                        <dd><a href="#">자주 하는 질문</a></dd>
                                                    </dl>
                                                </li>
                                                <li>{/* <!-- 2칸 --> */}
                                                    <dl>
                                                        <dt><a href="#">스타벅스 카드</a></dt>
                                                        <dd><a href="#">스타벅스 카드 소개</a></dd>
                                                        <dd><a href="#">스타벅스 카드 갤러리</a></dd>
                                                        <dd><a href="#">등록 및 조회</a></dd>
                                                        <dd><a href="#">충전 및 이용안내</a></dd>
                                                        <dd><a href="#">분실신고/환불신청</a></dd>
                                                        <dd><a href="#">자주 하는 질문</a></dd>
                                                    </dl>
                                                </li>
                                                <li>{/* <!-- 3칸 --> */}
                                                    <dl>
                                                        <dt><a href="#">스타벅스 e-Gift Card</a></dt>
                                                        <dd><a href="#">스타벅스 e-Gift Card 소개</a></dd>
                                                        <dd><a href="#">이용안내</a></dd>
                                                        <dd><a href="#">선물하기</a></dd>
                                                        <dd><a href="#">자주 하는 질문</a></dd>
                                                    </dl>
                                                </li>
                                                </ul>                  
                                            </div>
                                        </div>
                                        <div className="sub-bottom">
                                            <div className="sub-container">
                                                <dl>
                                                    <dt><a href="#">스타벅스 카드 등록하기</a></dt>
                                                    <dd>카드 등록 후 리워드 서비스를 누리고 사용내역도 조회해보세요.</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="main-btn">WHAT'S NEW</a>
                                    <div className="sub sub6">
                                        <div className="sub-top">
                                            <div className="sub-container">
                                                <ul className="clearfix">
                                                <li>{/* <!-- 1칸 --> */}
                                                    <dl>
                                                        <dt><a href="#">이벤트</a></dt>
                                                        <dd><a href="#">전체</a></dd>
                                                        <dd><a href="#">스타벅스 카드</a></dd>
                                                        <dd><a href="#">스타벅스 리워드</a></dd>
                                                        <dd><a href="#">온라인</a></dd>
                                                        <dd><a href="#">e-프리퀀시 증정품</a></dd>
                                                    </dl>
                                                </li>
                                                <li>{/* <!-- 2칸 --> */}
                                                    <dl>
                                                        <dt><a href="#">뉴스</a></dt>
                                                        <dd><a href="#">전체</a></dd>
                                                        <dd><a href="#">상품 출시</a></dd>
                                                        <dd><a href="#">스타벅스와 문화</a></dd>
                                                        <dd><a href="#">스타벅스 사회공헌</a></dd>
                                                        <dd><a href="#">스타벅스 카드출시</a></dd>
                                                    </dl>
                                                </li>
                                                <li>{/* <!-- 3칸 --> */}
                                                    <dl>
                                                        <dt><a href="#">매장별 이벤트</a></dt>
                                                        <dd><a href="#">일반 매장</a></dd>
                                                        <dd><a href="#">신규 매장</a></dd>
                                                    </dl>
                                                </li>
                                                <li>{/* <!-- 4칸 --> */}
                                                    <dl>
                                                        <dt><a href="#">e-프리퀀시</a></dt>
                                                        <dd><a href="#">이용안내</a></dd>
                                                        <dd><a href="#">이용현황</a></dd>
                        
                                                    </dl>
                                                </li>
                                                <li>{/* <!-- 5칸 --> */}
                                                    <dl>
                                                        <dt><a href="#">공지사항</a></dt>
                                                        <dd><a href="#">월페이퍼</a></dd>
                                                    </dl>
                                                </li>
                                                </ul>
                                                
                                                <ul className="clearfix">
                                                <li>{/* <!-- 1칸 --> */}
                                                    <dl>
                                                        <dt><a href="#">월페이퍼</a></dt>
                                                        <dd><a href="#"></a></dd>
                                                    </dl>
                                                </li>
                                                </ul>                          
                                            </div>
                                        </div>
                                        <div className="sub-bottom">
                                            <div className="sub-container">
                                                <dl>
                                                    <dt><a href="#">매장별 이벤트</a></dt>
                                                    <dd>스타벅스의 매장 이벤트 정보를 확인 하실 수 있습니다.</dd>
                                                    <dt><a href="#">월페이퍼</a></dt>
                                                    <dd>매월 업데이트되는 월페이퍼(PC/Mobile)로 스타벅스를 더욱 가깝게 즐겨보세요!</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                </ul>
                            </nav>

                            {/* <!-- 모바일 네비게이션 --> */}
                            <div id="mobile">
                                <ul>
                                    <li><a href="#" className="login-btn"><img src="./images/icon_user_m.png" alt=""/></a></li>
                                    <li><a href="#" className="maps-btn"><img src="./images/icon_spot_m.png" alt=""/></a></li>
                                    <li><a href="#" className="berger-btn"><img src="./images/btn_berger_m.png" alt=""/></a></li>
                                </ul>
                            </div>

                        </div>
                        </div>
                    </header>
                </>
            );
        }
    }

    
    class MainComponent extends React.Component {
        render() {
            return (
                <>
                    <main id="main">
                        <section id="section1">
                        <div className="container">

                            <h2 className="hide">메인 섹션 Carry Merry</h2>

                            <span className="img img1">
                                <img src="./images/m_2021_chiristmas2_slogan.png" alt=""/>
                            </span>

                            <span className="star star1">
                                <img src="./images/2021_chiristmas2_bg_left.png" alt=""/>
                            </span>

                            <span className="star star2">
                                <img src="./images/2021_chiristmas2_bg_right.png" alt=""/>
                            </span>

                            <span className="img img2">
                                <img src="./images/2021_christmas2_drink.png" alt=""/>
                            </span>

                            <span className="img img3">
                                <img src="./images/2021_christmas2_drink2.png" alt=""/>
                            </span>

                            <span className="img img4">
                                <img src="./images/2021_christmas2_drink3.png" alt=""/>
                            </span>

                            <span className="img img5">
                                <a href="#" className="view-btn">자세히 보기</a>
                            </span>

                        </div>
                        </section>
                        <section id="section2">
                        <div id="notice">
                            <div className="container">
                                <div className="notice-box">
                                   {/*  <!-- 공지사항 타이틀  --> */}
                                    <div className="notice-title">
                                        <h2>{/* <!-- 안에는 피태그 디브이 못들어감 안에 바로 이미지는 오류뜸 스펜으로 감싸기 인라인태그만가능 --> */}
                                            <span>
                                                <img src="./images/notice_ttl.png" alt="Notice Title"/>
                                                <img src="./images/icon_board_speaker.png" alt="Notice Title"/>
                                            </span>
                                            
                                        </h2>
                                    </div>
                                    {/* <!-- 공지사항 목록 박스 --> */}
                                    <div className="notice-list">
                                        <ul>
                                            <li className="notice"><a href="#">1. 스타벅스커피 코리아 원산지 오표시 관련 고객설명문</a></li>
                                            <li className="notice"><a href="#">2. 사이렌 오더 주문 건수 제한 안내(11/2~12/31)</a></li>
                                            <li className="notice"><a href="#">3. 2021 플래너 쿠폰 3종 유효 기간 연장 안내</a></li>
                                            <li className="notice"><a href="#">4. 시스템 개선 및 점검 안내</a></li>
                                            <li className="notice"><a href="#">5. 시스템 개선 및 점검 안내</a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- 공지사항 더보기 버튼 박스 --> */}
                                    <div className="notice-more">
                                        <a href="#" title="Notice More view"><img src="./images/btn_notice_plus.png" alt="more view"/></a>
                                    </div>

                                </div>
                                <div className="promotion-box">
                                    <div>
                                        <a href="#" className="promotion-btn blind close" title='스타벅스 프로모션'>스타벅스 프로모션</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="slide">
                            <div className="container2">

                                <div className="slide-container">
                                    <div className="slide-view">
                                        <ul className="slide-wrap clearfix">
                                            <li className="slide slide3"><img src="./images/slide_03.jpg" alt=""/><span><a href="#" className="view-btn" title="자세히 보기">자세히 보기</a></span></li>
                                            <li className="slide slide1 addCurrent"><img src="./images/slide_01.jpg" alt=""/><span><a href="#" className="view-btn" title="자세히 보기">자세히 보기</a></span></li>
                                            <li className="slide slide2"><img src="./images/slide_02.jpg" alt=""/><span><a href="#" className="view-btn" title="자세히 보기">자세히 보기</a></span></li>
                                            <li className="slide slide3"><img src="./images/slide_03.jpg" alt=""/><span><a href="#" className="view-btn" title="자세히 보기">자세히 보기</a></span></li>
                                            <li className="slide slide1 addCurrent"><img src="./images/slide_01.jpg" alt=""/><span><a href="#" className="view-btn" title="자세히 보기">자세히 보기</a></span></li>
                                        </ul>
                                    </div>

                                    {/* <!-- 좌우화살버튼 --> */}
                                    <span className="next-btn-box">
                                        <a href="#" className="next-btn blind" title="Next Button">next</a>
                                    </span>
                                    
                                    <span className="prev-btn-box">
                                        <a href="#" className="prev-btn blind" title="Prev Button">prev</a>
                                    </span>


                                    <div className="page-btn-box">
                                        <span><a href="#" className="play-btn on" title="Play & Stop"><img src="./images/main_prom_stop.png" alt=""/></a></span>
                                        <span><a href="#" className="page-btn" title="page1"><img src="./images/main_prom_on.png" alt=""/></a></span>
                                        <span><a href="#" className="page-btn" title="page2"><img src="./images/main_prom_off.png" alt=""/></a></span>
                                        <span><a href="#" className="page-btn" title="page3"><img src="./images/main_prom_off.png" alt=""/></a></span>
                                    </div>

                                </div>

                            </div>
                        </div>      
                        </section>
                        <section id="section3">
                        <div className="container clearfix">
                            <div className="left">
                                <div className="gap">
                                    <div className="content">
                                        <h2><img src="./images/rewards-logo.png" alt="logo"/></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <div className="gap">
                                    <div className="content">
                                    <div className="top clearfix">
                                        <div className="top-left">
                                            <h3>스타벅스만의 특별한 혜택,<br/> <strong>스타벅스 리워드</strong></h3>
                                            <p><strong>스타벅스 회원이세요?</strong> 로그인을 통해<br/> 나만의 리워드를 확인해보세요.</p>
                                            <p><strong>스타벅스 회원이 아니세요?</strong><br/>  가입을 통해 리워드 혜택을 즐기세요.</p>    
                                        </div>

                                        <div className="top-right"> {/* <!-- 플렉스(Flex) 콘테이너(container2) - 부모 영역 --> */}
                                            <div className="button-box clearfix">{/* <!--  플렉스(Flex) 아이템(item) - 자식영역 --> */}
                                                <a href="#" className="signup-btn">회원가입</a>{/* <!--  플렉스(Flex) 아이템(item) - 자식영역 --> */}
                                                <a href="#" className="login-btn">로그인</a> {/* <!--    플렉스(Flex) 아이템(item) - 자식영역 --> */}
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="bottom clearfix">
                                        <div className="bottom-left">
                                            <p>회원 가입 후, 스타벅스 e-Gift Card를<br/> <strong>"나에게 선물하기"로 구매하시고, 편리하게 등록하세요!</strong></p>
                                            <p>카드를 등록하여 스타벅스 리워드 회원이 되신 후,<br/> 첫 구매를 하시면 무료 음료쿠폰을 드립니다!</p>    
                                        </div>
                                        <div className="bottom-right">
                                            <div className="button-box">
                                                <a href="#" className="gift-btn"  title="e-Gift Card 선물하기">e-Gift Card 선물하기</a>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </section>
                        <section id="section4">
                        <div className="container">
                                <div className="left">
                                    <div className="wrap">
                                        <img src="./images/2021_chrsitmas_bean.png" alt="함께할 때 더욱 맛있는 크리스마스 블랜드 이미지"/>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="wrap">
                                        <h2>
                                            <img src="./images/2021_chrsitmas_bean_txt_pc.png" alt="함께할 때 더욱 맛있는 크리스마스 블랜드 타이틀"/>
                                        </h2>
                                        <p>
                                            <a href="#" className="more-view-btn" title="자세히 보기">자세히 보기</a>
                                        </p>
                                    </div>
                                </div>
                        </div>
                        </section>
                        <section id="section5">
                        <div className="container">
                            <div className="title">
                                <h2>
                                    <img src="./images/reserve_christmas_bean_title_211018.png" alt="Reserve Merry"/>
                                </h2>
                                <p>
                                    <a href="#" className="more-view-btn" title="자세히 보기">자세히 보기</a>
                                </p>
                            </div>   
                        </div>
                        </section>
                        <section id="section6">
                        <div className="container">
                            <div className="left">
                                <h2><img src="./images/fav_prod_txt01.png" alt="Pick Your ..."/></h2>
                                <h3><img src="./images/fav_prod_txt02.png" alt="다양한 메뉴를..."/></h3>
                                <p>
                                    <a href="#" className="more-view-btn" title="자세히 보기">자세히 보기</a>
                                </p>            
                            </div>
                            <div className="right">
                                <img src="./images/2021_christmas2_fav.png" alt="Christmas Card"/>
                            </div>
                        </div>
                        </section>
                        <section id="section7" className="addFade">
                        <div className="container">
                                <div className="left">
                                    <h2><img src="./images/reserve_text_pc.png" alt="reserve_text_pc"/></h2>
                                    <p><a href="#" className="more-view-btn" title="자세히 보기">자세히 보기</a></p>
                                </div>
                                <div className="right">
                                    <img src="./images/reserve_visual_pc.png" alt="reserve_visual_pc"/>
                                </div>
                        </div>
                        </section>
                        <section id="section8" className="addAni">
                        <div className="container">
                                <div className="left">
                                    <span><img src="./images/store_exp_img01.png" alt="store_exp_img01"/></span>
                                </div>
                                <div className="right">
                                    <h2><img src="./images/store_txt01.png" alt="스타벅스를 가까이에서 경험해 보세요!"/></h2>
                                    <h3><img src="./images/store_txt02.png" alt="차별화된 커피경험을..."/></h3>
                                    <p><a href="#" className="more-view-btn" title="자세히 보기">자세히 보기</a></p>
                                </div>
                        </div>
                        </section>

                    </main>  
                </>
            );
        }
    }


    class FooterComponent extends React.Component {
        render() {
            return (
                <>
                    <footer id="footer">
                        <div className="container">
                            <div className="top">
                                <div className="wrap">
                                    <ul>
                                        <li className="mobile">
                                            <dl>
                                                <dt><a href="#">CUSTOMER SERVICE & IDEAS</a></dt>
                                                <dd><a href="#">자주 하는 질문</a></dd>
                                                <dd><a href="#">고객의 소리</a></dd>
                                                <dd className="mbile-arrrow"><a href="#">스타벅스 이용 팁</a></dd>
                                                <dd><a href="#">고객 경험 설문조사</a></dd>
                                                <dd><a href="#">고객 경험 설문조사</a></dd>
                                            </dl>
                                        </li>
                                        <li>
                                            <dl>
                                                <dt><a href="#">COMPANY</a></dt>
                                                <dd><a href="#">한눈에 보기</a></dd>
                                                <dd><a href="#">스타벅스 사명</a></dd>
                                                <dd className="mbile-arrrow"><a href="#">스타벅스 소개</a></dd>
                                                <dd><a href="#">국내 뉴스룸</a></dd>
                                                <dd><a href="#">세계의 스타벅스</a></dd>
                                                <dd><a href="#">글로벌 뉴스룸</a></dd>
                                            </dl>
                                        </li>
                                        <li>
                                            <dl>
                                                <dt><a href="#">CORPORATE SALES</a></dt>
                                                <dd><a href="#">단체 및 기업 구매 안내</a></dd>
                                            </dl>
                                        </li>
                                        <li>
                                            <dl>
                                                <dt><a href="#">PARTNERSHIP</a></dt>
                                                <dd><a href="#">신규 입점 제의</a></dd>
                                                <dd><a href="#">협력 고객사 등록신청</a></dd>
                                            </dl>
                                        </li>
                                        <li>
                                            <dl>
                                                <dt><a href="#">ONLINE COMMUNITY</a></dt>
                                                <dd><a href="#">페이스북</a></dd>
                                                <dd><a href="#">트위터</a></dd>
                                                <dd><a href="#">유튜브</a></dd>
                                                <dd><a href="#">인스타그램</a></dd>
                                            </dl>
                                        </li>
                                        <li>
                                            <dl>
                                                <dt><a href="#">RECRUIT</a></dt>
                                                <dd><a href="#">채용 소개</a></dd>
                                                <dd><a href="#">채용 지원하기</a></dd>
                                            </dl>
                                        </li>
                                    </ul>
                                </div>
                            </div>    
                            <div className="middle">
                                <div className="wrap">
                                    <span><a href="#" title="footer_award23"><img src="./images/footer_award23.jpg" alt=""/></a></span>
                                    <span><a href="#" title="footer_award24"><img src="./images/footer_award24.jpg" alt=""/></a></span>
                                    <span><a href="#" title="footer_award25"><img src="./images/footer_award25.jpg" alt=""/></a></span>
                                    <span><a href="#" title="footer_award26"><img src="./images/footer_award26.jpg" alt=""/></a></span>
                                    <span><a href="#" title="footer_award27"><img src="./images/footer_award27.jpg" alt=""/></a></span>
                                    <span><a href="#" title="footer_award28"><img src="./images/footer_award28.jpg" alt=""/></a></span>
                                </div>
                            </div>    
                            <div className="bottom">
                                <div className="wrap">
                                    <ul>
                                        {/* <!-- 1행 --> */}
                                        <li>
                                            <div>
                                                <span><a href="#">개인정보처리방침</a></span>
                                                <span><i></i></span>
                                                <span><a href="#">영상정보처리기기운영관리방침</a></span>
                                                <span><i></i></span>
                                                <span><a href="#">홈페이지 이용약관</a></span>
                                                <span><i></i></span>
                                                <span><a href="#"> 위치정보 이용약관</a></span>
                                                <span><i></i></span>
                                                <span><a href="#"> 스타벅스 카드 이용약관</a></span>
                                                <span><i></i></span>
                                                <span><a href="#"> 비회원 이용약관</a></span>
                                                <span><i></i></span>
                                                <span><a href="#"> My DT Pass 서비스 이용약관</a></span>
                                                <span><i></i></span>
                                                <span><a href="#">윤리경영 핫라인</a></span>
                                            </div>
                                        </li>
                                        {/* <!-- 2행 --> */}
                                        <li>
                                            <div>
                                                <span><a href="#" className="more-view-btn" title="찾아오시는 길">찾아오시는 길</a></span>
                                                <span><a href="#" className="more-view-btn" title="신규입점제의">신규입점제의</a></span>
                                                <span><a href="#" className="more-view-btn" title="사이트 맵">사이트 맵</a></span>    
                                            </div>
                                        </li>
                                        {/* <!-- 3행 --> */}
                                        <li>
                                            <address>
                                                사업자등록번호 : 201-81-21515 (주)스타벅스커피 코리아 대표이사 : 송 데이비드 호섭 TEL : 1522-3232 개인정보 책임자 : 하익성
                                            </address>
                                        </li>
                                        {/* <!-- 4행 --> */}
                                        <li>
                                            <p>
                                                &copy; 2021 Starbucks Coffee Company. All Rights Reserved.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>    
                        </div>
                    </footer>    
                </>
            );
        }
    }

    
    
    

 


ReactDOM.render(
    <StarBucks/>,
    document.getElementById('root')
);