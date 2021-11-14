import React from 'react';
import './index.css';
// import jquery from 'jquery';
import $ from 'jquery';

// function SurveyPage() {

//     return (
//         <div>
//             <div class="page"><h2>1</h2></div>
//             <div class="page"><h2>2</h2></div>
//             <div class="page"><h2>3</h2></div>
//             <div class="page"><h2>4</h2></div>
//             <div class="page"><h2>5</h2></div>
//         </div>
//     );
// }

class SurveyPage extends React.Component {
    componentDidMount() {
        $(function() {
            window.addEventListener(
                "wheel",
                function (event) {
                  event.preventDefault();
                },
                { passive: false }
              );

              var $window = $(window);
              var $html = $("html, body");
              var pageIndex = 0;
              var lastPageIndex = $(".page").length - 1;
      
              $html.animate({ scrollTop: 0 }, 10);
      
              $window.on("wheel", function (event) {
              if ($html.is(":animated")) return;
      
              if (event.originalEvent.deltaY > 0) {
                  if (pageIndex === lastPageIndex) return;
      
                  pageIndex++;
              }
              else if (event.originalEvent.deltaY < 0) {
                  if (pageIndex === 0) return;
      
                  pageIndex--;
              }
      
              var posTop = pageIndex * $window.height();
      
              console.log("pageIndex = " + pageIndex);
              console.log("posTop = " + posTop);
      
              $html.animate({ scrollTop: posTop });
            });
        });
    }
    
    render() {
        return (
            <div>
                <div class="page"><h2>1</h2></div>
                <div class="page"><h2>2</h2></div>
                <div class="page"><h2>3</h2></div>
                <div class="page"><h2>4</h2></div>
                <div class="page"><h2>5</h2></div>
            </div>
        )
    }
}

export default SurveyPage;