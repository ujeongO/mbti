import React from "react";
import "./index.css";
// import $ from "jquery";

function SurveyPage() {
  return (
    <article id="content">
      <div id="content-wrap">
        <div className="question">
          <h1>Q1.</h1>
          <h2>나는 여행을 떠날 때 계획은</h2>
          <div id="button">
            <div className="buttonA">
              <h2>A</h2>
              <button>계획 필수</button>
              <button>계획 ㄴㄴ</button>
            </div>
            <div className="buttonB">
              <h2>B</h2>
              <button>계획 필수</button>
              <button>계획 ㄴㄴ</button>
            </div>
          </div>
        </div>

        <div className="question">
          <h1>Q2.</h1>
          <h2>나는 여행지에 도착한 후</h2>
          <div id="button">
            <div className="buttonA">
              <h2>A</h2>
              <button>왜 밖을 나가</button>
              <button>왜 숙소에만 있어</button>
            </div>
            <div className="buttonB">
              <h2>B</h2>
              <button>왜 밖을 나가</button>
              <button>왜 숙소에만 있어</button>
            </div>
          </div>
        </div>

        <div className="question">
          <h1>Q3.</h1>
          <h2>나는 여행지에 도착한 후</h2>
          <div id="button">
            <div className="buttonA">
              <h2>A</h2>
              <button>왜 밖을 나가</button>
              <button>왜 숙소에만 있어</button>
            </div>
            <div className="buttonB">
              <h2>B</h2>
              <button>왜 밖을 나가</button>
              <button>왜 숙소에만 있어</button>
            </div>
          </div>
        </div>

        <div className="question">
          <h1>Q4.</h1>
          <h2>나는 여행지에 도착한 후</h2>
          <div id="button">
            <div className="buttonA">
              <h2>A</h2>
              <button>왜 밖을 나가</button>
              <button>왜 숙소에만 있어</button>
            </div>
            <div className="buttonB">
              <h2>B</h2>
              <button>왜 밖을 나가</button>
              <button>왜 숙소에만 있어</button>
            </div>
          </div>
        </div>

        <div className="question">
          <h1>Q5.</h1>
          <h2>나는 여행지에 도착한 후</h2>
          <div id="button">
            <div className="buttonA">
              <h2>A</h2>
              <button>왜 밖을 나가</button>
              <button>왜 숙소에만 있어</button>
            </div>
            <div className="buttonB">
              <h2>B</h2>
              <button>왜 밖을 나가</button>
              <button>왜 숙소에만 있어</button>
            </div>
          </div>
        </div>

        <div className="question">
          <h1>Q6.</h1>
          <h2>나는 여행지에 도착한 후</h2>
          <div id="button">
            <div className="buttonA">
              <h2>A</h2>
              <button>왜 밖을 나가</button>
              <button>왜 숙소에만 있어</button>
            </div>
            <div className="buttonB">
              <h2>B</h2>
              <button>왜 밖을 나가</button>
              <button>왜 숙소에만 있어</button>
            </div>
          </div>
        </div>

        <div className="question">
          <h1>Q7.</h1>
          <h2>나는 여행지에 도착한 후</h2>
          <div id="button">
            <div className="buttonA">
              <h2>A</h2>
              <button>왜 밖을 나가</button>
              <button>왜 숙소에만 있어</button>
            </div>
            <div className="buttonB">
              <h2>B</h2>
              <button>왜 밖을 나가</button>
              <button>왜 숙소에만 있어</button>
            </div>
          </div>
        </div>

        <div className="question">
          <h1>Q8.</h1>
          <h2>나는 여행지에 도착한 후</h2>
          <div id="button">
            <div className="buttonA">
              <h2>A</h2>
              <button>왜 밖을 나가</button>
              <button>왜 숙소에만 있어</button>
            </div>
            <div className="buttonB">
              <h2>B</h2>
              <button>왜 밖을 나가</button>
              <button>왜 숙소에만 있어</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

// class SurveyPage extends React.Component {
//   componentDidMount() {
//     $(function () {
//       window.addEventListener(
//         "wheel",
//         function (event) {
//           event.preventDefault();
//         },
//         { passive: false }
//       );

//       var $window = $(window);
//       var $html = $("#content, #wrap");
//       var pageIndex = 0;
//       var lastPageIndex = $(".page").length - 1;

//       $html.animate({ scrollTop: 0 }, 10);

//       $window.on("wheel", function (event) {
//         if ($html.is(":animated")) return;

//         if (event.originalEvent.deltaY > 0) {
//           if (pageIndex === lastPageIndex) return;

//           pageIndex++;
//         } else if (event.originalEvent.deltaY < 0) {
//           if (pageIndex === 0) return;

//           pageIndex--;
//         }

//         var posTop = pageIndex * $window.height();

//         console.log("pageIndex = " + pageIndex);
//         console.log("posTop = " + posTop);

//         $html.animate({ scrollTop: posTop });
//       });
//     });
//   }

//   render() {
//     return (
//       <article id="content">
//         <div id="wrap">
//           <div className="page">
//             <h2>1</h2>
//           </div>
//           <div className="page">
//             <h2>2</h2>
//           </div>
//           <div className="page">
//             <h2>3</h2>
//           </div>
//           <div className="page">
//             <h2>4</h2>
//           </div>
//           <div className="page">
//             <h2>5</h2>
//           </div>
//         </div>
//       </article>
//     );
//   }
// }

export default SurveyPage;
