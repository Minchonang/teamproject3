// 친환경 자동차 데이터 프레임 보기 버튼

// 반복할 데이터를 배열로 정의
const ecoCarData = [
	{
		title: "수소/전기차 등록대수",
		iframeSrc: "./html/그래프_수소전기차_등록대수.html",
		dfBtnId: "df_eco1_btn",
		dataFrameSrc: "./html/데이터프레임_수소전기차_등록대수.html",
	},
	{
		title: "전국 대기 오염 지수",
		iframeSrc: "./html/그래프_전국대기오염지수.html",
		dfBtnId: "df_eco2_btn",
		dataFrameSrc: "./html/데이터프레임_전국대기오염지수.html",
	},
	{
		title: "친환경 자동차와 대기오염 - 일산화탄소(CO)",
		iframeSrc: "./html/그래프_일산화탄소.html",
		dfBtnId: "df_eco3_btn",
		dataFrameSrc: "./html/데이터프레임_친환경_대기오염_관계.html",
	},
	{
		title: "친환경 자동차와 대기오염 - 이산화질소(NO<sub>2</sub>)",
		iframeSrc: "./html/그래프_일산화질소.html",
		dfBtnId: "df_eco4_btn",
		dataFrameSrc: "./html/데이터프레임_친환경_대기오염_관계.html",
	},
	{
		title: "전국 수소차 충전소",
		iframeSrc: "./html/그래프_수소차_충전소_지도.html",
		dfBtnId: "df_eco5_btn",
		dataFrameSrc: null,
	},
	{
		title: "전국 전기차 충전소",
		iframeSrc: "./html/그래프_전기차_충전소_지도.html",
		// iframeSrc: "./img/무제.png",
		dfBtnId: "df_eco6_btn",
		dataFrameSrc: null,
	},
	{
		title: "수소/전기차 100km당 충전 비용",
		iframeSrc: "./html/그래프_수소전기차_충전_평균가격.html",
		dfBtnId: "df_eco7_btn",
		dataFrameSrc:
			"./html/데이터프레임_수소전기차_충전_평균가격.html",
	},
	{
		title: "수소/전기차 차종별 100km 주행 충전 비용",
		iframeSrc: "./html/그래프_수소전기차_100km_충전비용.html",
		dfBtnId: "df_eco8_btn",
		dataFrameSrc:
			"./html/데이터프레임_수소전기차_100km_충전비용.html",
	},
	{
		title: "2023년 12월 수소/전기차 예상 등록대수",
		iframeSrc: "./html/그래프_2023년_12월_등록대수.html",
		dfBtnId: "df_eco9_btn",
		dataFrameSrc: "./html/데이터프레임_2023년_12월_등록대수.html",
	},
	{
		title: "수소차 연도별 보조금",
		iframeSrc: "./html/그래프_수소차_보조금.html",
		dfBtnId: "df_eco10_btn",
		dataFrameSrc: "./html/데이터프레임_수소차_보조금.html",
	},
	{
		title: "전기차 연도별 보조금",
		iframeSrc: "./html/그래프_전기차_보조금.html",
		dfBtnId: "df_eco11_btn",
		dataFrameSrc: "./html/데이터프레임_전기차_보조금.html",
	},
	{
		title: "4년간 수소/전기차 보조금",
		iframeSrc: "./html/그래프_수소전기차_연간_보조금_비교.html",
		dfBtnId: "df_eco12_btn",
		dataFrameSrc:
			"./html/데이터프레임_수소전기차_연간_보조금_비교.html",
	},
];

// 반복문을 통해 HTML 코드 동적 생성
// 배열을 받아 html 코드를 반환해야 하므로 map(item, index) 사용.
// item: 배열의 항목, index: 순서(0 ~ 배열 크기)
// index 0 ~ 11까지 id=ecoCar_graph 태그 안에 다 들어가야 하는 이어지는 코드이므로 하므로 join("")을 사용하여 </div>로 끝난 코드를 이어붙임.

const ecoCarGraphHTML = ecoCarData
	.map(
		(item, index) => `
   <div>
		<div>
			<h1>${item.title}</h1>
				<graph>
					<iframe
                       name="${item.title}"
                       src="${item.iframeSrc}"
                       width="100%"
                       height="600"
                       frameborder="0">
					</iframe>
				</graph>
				<div id="${item.dfBtnId}" 
						class="show_dataFrame_area" 
						onclick="click_ecoDataFrame('df_eco${index + 1}')">
					<show>데이터 프레임 보기</show>
				</div>
				<dataframe id="dataFrame${index + 1}_eco" class="hidden">
					 <iframe
                       name="전체 발전량"
                       src="${item.dataFrameSrc}"
                       width="100%"
                       height="300"
                       frameborder="0">
					 </iframe>
				</dataframe>
		 </div>
   </div>
`
	)
	.join("");

// ecoCar_graph 요소를 선택하고 HTML 코드 삽입
const ecoCarGraphElement = document.getElementById("ecoCar_graph");
ecoCarGraphElement.innerHTML = ecoCarGraphHTML;

// [데이터 프레임 보기] 버튼을 위한 변수 선언
const df_eco = {
	df_eco1: document.querySelector("#dataFrame1_eco"),
	df_eco2: document.querySelector("#dataFrame2_eco"),
	df_eco3: document.querySelector("#dataFrame3_eco"),
	df_eco4: document.querySelector("#dataFrame4_eco"),
	df_eco5: document.querySelector("#dataFrame5_eco"),
	df_eco6: document.querySelector("#dataFrame6_eco"),
	df_eco7: document.querySelector("#dataFrame7_eco"),
	df_eco8: document.querySelector("#dataFrame8_eco"),
	df_eco9: document.querySelector("#dataFrame9_eco"),
	df_eco10: document.querySelector("#dataFrame10_eco"),
	df_eco11: document.querySelector("#dataFrame11_eco"),
	df_eco12: document.querySelector("#dataFrame12_eco"),
};
const eco_btnMap = {
	df_eco1: "#df_eco1_btn",
	df_eco2: "#df_eco2_btn",
	df_eco3: "#df_eco3_btn",
	df_eco4: "#df_eco4_btn",
	df_eco5: "#df_eco5_btn",
	df_eco6: "#df_eco6_btn",
	df_eco7: "#df_eco7_btn",
	df_eco8: "#df_eco8_btn",
	df_eco9: "#df_eco9_btn",
	df_eco10: "#df_eco10_btn",
	df_eco11: "#df_eco11_btn",
	df_eco12: "#df_eco12_btn",
};
let bool_ecoDataFrame_State = {
	df_eco1: false,
	df_eco2: false,
	df_eco3: false,
	df_eco4: false,
	df_eco5: false,
	df_eco6: false,
	df_eco7: false,
	df_eco8: false,
	df_eco9: false,
	df_eco10: false,
	df_eco11: false,
	df_eco12: false,
};

// [데이터 프레임 보기] 버튼을 클릭하면 보여주는 토글 버튼 + fade 효과 애니메이션
const click_ecoDataFrame = (key) => {
	if (!bool_ecoDataFrame_State[key]) {
		document.querySelector(`${eco_btnMap[key]} > show`).innerText =
			"데이터 프레임 닫기";
		df_eco[key].classList.replace(HIDDEN, FADE_IN);
		setTimeout(function () {
			df_eco[key].classList.replace(FADE_IN, SHOW);
		}, 0);
		bool_ecoDataFrame_State[key] = true;
	} else if (bool_ecoDataFrame_State[key]) {
		document.querySelector(`${eco_btnMap[key]} > show`).innerText =
			"데이터 프레임 보기";
		df_eco[key].classList.replace(SHOW, FADE_OUT);
		setTimeout(function () {
			df_eco[key].classList.replace(FADE_OUT, HIDDEN);
		}, 300);
		bool_ecoDataFrame_State[key] = false;
	}
};

// 친환경 자동차 데이터 프레임 버튼의 hover 효과
const eco_btnIds = [
	"df_eco1_btn",
	"df_eco2_btn",
	"df_eco3_btn",
	"df_eco4_btn",
	"df_eco5_btn",
	"df_eco6_btn",
	"df_eco7_btn",
	"df_eco8_btn",
	"df_eco9_btn",
	"df_eco10_btn",
	"df_eco11_btn",
	"df_eco12_btn",
];
eco_btnIds.forEach((btnId) => {
	const btn = document.querySelector(`#${btnId}`); // [데이터 프레임 보기] 버튼
	btn.addEventListener("mouseover", function () {
		document.querySelector(`#${btnId} > show`).style.color = "black";
		document.querySelector(`#${btnId} > show`).style.fontWeight = "bolder";
	});
	btn.addEventListener("mouseout", function () {
		document.querySelector(`#${btnId} > show`).style.color = "#656668";
		document.querySelector(`#${btnId} > show`).style.fontWeight = "normal";
	});
});
