(()=>{"use strict";var t,n,e,s,a,o={536:(t,n,e)=>{e.d(n,{L:()=>s});const s=()=>{document.querySelector(".lost-detail__btn-container").innerHTML='\n    <a href="/lostPets">\n      <button class="btn back-to-list-btn">목록으로</button>\n    </a>\n  '}},181:(t,n,e)=>{e.d(n,{d:()=>a,I:()=>s});const s={pageNo:1,numOfRows:10,upkind:"",upr_cd:"",org_cd:"",state:"",bgnde:"",endde:""},a=async t=>{const n=await(async({pageNo:t,numOfRows:n,upkind:e,upr_cd:s,org_cd:a,state:o,bgnde:d,endde:i})=>{try{return(await fetch(`/api/lost-pets?upr_cd${s}=&org_cd${a}=&upkind=${e}&state${o}=&pageNo=${t}&numOfRows=${n}&bgnde=${d}&endde=${i}`)).json()}catch(t){console.log(t)}})(t),[e,s]=(t=>{const{items:{item:n},totalCount:e}=t;return[n,e]})(n);return[e,s]}},579:(t,n,e)=>{e.a(t,(async t=>{var n=e(823),s=e(842),a=e(536),o=t([n]);n=(o.then?await o:o)[0],(0,s.M)(n.b),(0,a.L)()}))},823:(t,n,e)=>{e.a(t,(async t=>{e.d(n,{b:()=>d});var s=e(181),a=e(505),o=e(342);const[d,i]=await(0,s.d)(s.I);"/lostPets"===location.pathname&&((0,o._)(),(0,a.E)(d)),t()}),1)},505:(t,n,e)=>{e.d(n,{E:()=>o});const s=t=>{const{age:n,desertionNo:e,happenDt:s,kindCd:a,orgNm:o,popfile:d,processState:i,sexCd:r,specialMark:c,weight:l}=t;return`\n    <article class="lost-content__item">\n      <a href="./lostPets/${e}">\n        <div class="lost-content__img-container">\n          <img\n            class="lost-content__img"\n            src="${d}"\n          />\n        </div>\n        <div class="lost-content__info">\n          <div class="lost-content__kind-sex">\n            <span>${a} / ${r}</span>\n          </div>\n          <div class="lost-content__age-weight">\n            <span>${n} / ${l}</span>\n          </div>\n          <div class="lost-content__date">\n            <span>${s} 접수</span>\n          </div>\n          <div class="lost-content__place">\n            <span>${o}</span>\n          </div>\n          <div class="lost-content__special">\n            <span>${c}</span>\n          </div>\n          <div class="lost-content__state"><span>${i}</span></div>\n        </div>\n      </a>\n    </article>\n`},a=document.querySelector(".lost-content"),o=t=>{const n=t.map(s);a.innerHTML=n.join("")}},842:(t,n,e)=>{e.d(n,{M:()=>s});const s=t=>{const n=location.pathname.split("/")[2],e=t.find((t=>String(t.desertionNo)===n)),s=`\n  <div class="lost-detail__img-container">\n    <img\n      class="lost-detail__img"\n      src="${(a=e).popfile}"\n    />\n  </div>\n\n  <div class="lost-detail__info">\n    <div class="lost-detail__animal-info">\n      <div class="lost-detail__title">보호 동물 정보</div>\n      <table>\n        <tbody>\n          <tr>\n            <th>공고번호</th>\n            <td>${a.noticeNo}</td>\n          </tr>\n          <tr>\n            <th>공고기간</th>\n            <td>${a.noticeSdt} ~ ${a.noticeEdt}</td>\n            <th>상태</th>\n            <td>${a.processState}</td>\n          </tr>\n          <tr>\n            <th>품종</th>\n            <td>${a.kindCd}</td>\n            <th>색상</th>\n            <td>${a.colorCd}</td>\n          </tr>\n          <tr>\n            <th>나이</th>\n            <td>${a.age}</td>\n            <th>체중</th>\n            <td>${a.weight}</td>\n          </tr>\n          <tr>\n            <th>성별</th>\n            <td>${a.sexCd}</td>\n            <th>중성화여부</th>\n            <td>${a.neuterYn}</td>\n          </tr>\n          <tr>\n            <th>접수일</th>\n            <td>${a.happenDt}</td>\n          </tr>\n          <tr>\n            <th>발견장소</th>\n            <td colspan="3">${a.happenPlace}</td>\n          </tr>\n          <tr>\n            <th>특징</th>\n            <td colspan="3">${a.specialMark}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class="lost-detail__shelter-info">\n      <div class="lost-detail__title">보호소 정보</div>\n      <table>\n        <tbody>\n          <tr>\n            <th>보호소명</th>\n            <td>${a.careNm}</td>\n            <th>전화번호</th>\n            <td>${a.careTel}</td>\n          </tr>\n          <tr>\n            <th>보호장소</th>\n            <td colspan="3">${a.careAddr}</td>\n          </tr>\n          <tr>\n            <th>관할기관</th>\n            <td colspan="3">${a.orgNm}</td>\n          </tr>\n          <tr>\n            <th>담당자</th>\n            <td>${a.chargeNm}</td>\n            <th>연락처</th>\n            <td>${a.officetel}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n`;var a;document.querySelector(".lost-detail-container").innerHTML=s}},342:(t,n,e)=>{e.d(n,{_:()=>o});const s={sido:"시/도",sigungu:"시/군/구",upkind:"축종",state:"상태"},a={sido:{서울특별시:"6110000",부산광역시:"6260000",대구광역시:"6270000",인천광역시:"6280000",광주광역시:"6290000",대전광역시:"6300000",울산광역시:"6310000",세종특별자치시:"5690000",경기도:"6410000",강원도:"6420000",충청북도:"6430000",충청남도:"6440000",전라북도:"6450000",전라남도:"6460000",경상북도:"6470000",경상남도:"6480000",제주특별자치도:"6500000"},upkind:{개:"417000",고양이:"422400",기타:"429900"},state:{공고중:"notice",보호중:"protect"}},o=()=>{document.querySelector(".lost-search").innerHTML='\n  <div class="lost-search__box">\n    <form\n      id="lostSearchForm"\n      method="get"\n      action="./"\n      accept-charset="utf-8"\n      autocomplete="off"\n    >\n      <div class="lost-search__date">\n        <span>날짜</span>\n        <input type="date" id="beginDate" name="bgnde" />\n        <span>~</span>\n        <input type="date" id="endDate" name="endde" />\n      </div>\n      <div class="lost-search__place">\n        <span>지역</span>\n        <select id="sido" name="upr_cd"></select>\n        <select id="sigungu" name="org_cd"></select>\n      </div>\n      <div class="lost-search__kind-state">\n        <div class="lost-search__kind">\n          <span>품종</span>\n          <select id="upkind" name="up_kind_cd"></select>\n        </div>\n        <div class="lost-search__state">\n          <span>상태</span>\n          <select id="state" name="state"></select>\n        </div>\n      </div>\n      <div class="search-btn-container">\n        <button class="btn search-btn"><a href="#">검색</a></button>\n      </div>\n    </form>\n  </div>\n',document.querySelectorAll(".lost-search select").forEach((t=>{const{id:n}=t,e=s[n];t.innerHTML=`\n        <option value="" disabled selected hidden>${e} 선택</option>\n        <option value="">전체</option>\n        `,n in a&&((t,n)=>{for(const[e,s]of Object.entries(n))t.innerHTML+=`<option value="${s}">${e}</option>`})(t,a[n])}))}}},d={};function i(t){var n=d[t];if(void 0!==n)return n.exports;var e=d[t]={exports:{}};return o[t](e,e.exports,i),e.exports}t="function"==typeof Symbol?Symbol("webpack then"):"__webpack_then__",n="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",e=t=>{t&&(t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},s=t=>!--t.r&&t(),a=(t,n)=>t?t.push(n):s(n),i.a=(o,d,i)=>{var r,c,l,p=i&&[],h=o.exports,_=!0,u=!1,v=(n,e,s)=>{u||(u=!0,e.r+=n.length,n.map(((n,a)=>n[t](e,s))),u=!1)},m=new Promise(((t,n)=>{l=n,c=()=>(t(h),e(p),p=0)}));m[n]=h,m[t]=(t,n)=>{if(_)return s(t);r&&v(r,t,n),a(p,t),m.catch(n)},o.exports=m,d((o=>{if(!o)return c();var d,i;r=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[t])return o;if(o.then){var d=[];o.then((t=>{i[n]=t,e(d),d=0}));var i={};return i[t]=(t,n)=>(a(d,t),o.catch(n)),i}}var r={};return r[t]=t=>s(t),r[n]=o,r})))(o);var l=new Promise(((t,e)=>{(d=()=>t(i=r.map((t=>t[n])))).r=0,v(r,d,e)}));return d.r?l:i})).then(c,l),_=!1},i.d=(t,n)=>{for(var e in n)i.o(n,e)&&!i.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},i.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),i(579)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBaUI2RixHQUM3QzBCLEVBQUl6SCxHQUFrQitHLEVBQ2ZVLEtBK0JHQyxDQUFTZixHQUV2QixJQUFJTSxFQUFVLElBQUlDLFNBQVEsQ0FBQ0MsRUFBU1osTUFDbkNSLEVBQUssSUFBT29CLEVBQVFHLEVBQVNqQixFQUFZcEQsS0FBSzBFLEdBQU9BLEVBQUUzSCxPQUNwRGdHLEVBQUksRUFDUFUsRUFBUUwsRUFBYU4sRUFBSVEsTUFFMUIsT0FBT1IsRUFBR0MsRUFBSWlCLEVBQVVLLEtBQ3RCQyxLQUFLakIsRUFBY0MsR0FDdEJDLEdBQWUsR1NuRWhCbEIsRUFBb0JxQyxFQUFJLENBQUNqQyxFQUFTa0MsS0FDakMsSUFBSSxJQUFJNUMsS0FBTzRDLEVBQ1h0QyxFQUFvQnVDLEVBQUVELEVBQVk1QyxLQUFTTSxFQUFvQnVDLEVBQUVuQyxFQUFTVixJQUM1RUUsT0FBTzRDLGVBQWVwQyxFQUFTVixFQUFLLENBQUUrQyxZQUFZLEVBQU1DLElBQUtKLEVBQVc1QyxNQ0ozRU0sRUFBb0J1QyxFQUFJLENBQUNMLEVBQUtTLElBQVUvQyxPQUFPZ0QsVUFBVUMsZUFBZUMsS0FBS1osRUFBS1MsR0NHeEQzQyxFQUFvQixNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVhbTMtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvYXN5bmMgbW9kdWxlIiwid2VicGFjazovL3RlYW0zLXByb2plY3QvLi9zcmMvanMvbG9zdFBldHMvYmFja0J0bi5qcyIsIndlYnBhY2s6Ly90ZWFtMy1wcm9qZWN0Ly4vc3JjL2pzL2xvc3RQZXRzL2dldExvc3RQZXRzLmpzIiwid2VicGFjazovL3RlYW0zLXByb2plY3QvLi9zcmMvanMvbG9zdFBldHMvbG9zdERldGFpbFBhZ2UuanMiLCJ3ZWJwYWNrOi8vdGVhbTMtcHJvamVjdC8uL3NyYy9qcy9sb3N0UGV0cy9sb3N0TWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vdGVhbTMtcHJvamVjdC8uL3NyYy9qcy9sb3N0UGV0cy9sb3N0UGV0cy5qcyIsIndlYnBhY2s6Ly90ZWFtMy1wcm9qZWN0Ly4vc3JjL2pzL2xvc3RQZXRzL2xvc3RQZXRzRGV0YWlsLmpzIiwid2VicGFjazovL3RlYW0zLXByb2plY3QvLi9zcmMvanMvbG9zdFBldHMvc2VhcmNoRm9ybS5qcyIsIndlYnBhY2s6Ly90ZWFtMy1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlYW0zLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlYW0zLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZWFtMy1wcm9qZWN0L3dlYnBhY2svc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgd2VicGFja1RoZW4gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIHRoZW5cIikgOiBcIl9fd2VicGFja190aGVuX19cIjtcbnZhciB3ZWJwYWNrRXhwb3J0cyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXhwb3J0c1wiKSA6IFwiX193ZWJwYWNrX2V4cG9ydHNfX1wiO1xudmFyIGNvbXBsZXRlUXVldWUgPSAocXVldWUpID0+IHtcblx0aWYocXVldWUpIHtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSkpO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tID8gZm4ucisrIDogZm4oKSkpO1xuXHR9XG59XG52YXIgY29tcGxldGVGdW5jdGlvbiA9IChmbikgPT4gKCEtLWZuLnIgJiYgZm4oKSk7XG52YXIgcXVldWVGdW5jdGlvbiA9IChxdWV1ZSwgZm4pID0+IChxdWV1ZSA/IHF1ZXVlLnB1c2goZm4pIDogY29tcGxldGVGdW5jdGlvbihmbikpO1xudmFyIHdyYXBEZXBzID0gKGRlcHMpID0+IChkZXBzLm1hcCgoZGVwKSA9PiB7XG5cdGlmKGRlcCAhPT0gbnVsbCAmJiB0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKSB7XG5cdFx0aWYoZGVwW3dlYnBhY2tUaGVuXSkgcmV0dXJuIGRlcDtcblx0XHRpZihkZXAudGhlbikge1xuXHRcdFx0dmFyIHF1ZXVlID0gW107XG5cdFx0XHRkZXAudGhlbigocikgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0V4cG9ydHNdID0gcjtcblx0XHRcdFx0Y29tcGxldGVRdWV1ZShxdWV1ZSk7XG5cdFx0XHRcdHF1ZXVlID0gMDtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRvYmpbd2VicGFja1RoZW5dID0gKGZuLCByZWplY3QpID0+IChxdWV1ZUZ1bmN0aW9uKHF1ZXVlLCBmbiksIGRlcFsnY2F0Y2gnXShyZWplY3QpKTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHR9XG5cdHZhciByZXQgPSB7fTtcblx0XHRcdFx0XHRcdHJldFt3ZWJwYWNrVGhlbl0gPSAoZm4pID0+IChjb21wbGV0ZUZ1bmN0aW9uKGZuKSk7XG5cdFx0XHRcdFx0XHRyZXRbd2VicGFja0V4cG9ydHNdID0gZGVwO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJldDtcbn0pKTtcbl9fd2VicGFja19yZXF1aXJlX18uYSA9IChtb2R1bGUsIGJvZHksIGhhc0F3YWl0KSA9PiB7XG5cdHZhciBxdWV1ZSA9IGhhc0F3YWl0ICYmIFtdO1xuXHR2YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuXHR2YXIgY3VycmVudERlcHM7XG5cdHZhciBvdXRlclJlc29sdmU7XG5cdHZhciByZWplY3Q7XG5cdHZhciBpc0V2YWx1YXRpbmcgPSB0cnVlO1xuXHR2YXIgbmVzdGVkID0gZmFsc2U7XG5cdHZhciB3aGVuQWxsID0gKGRlcHMsIG9uUmVzb2x2ZSwgb25SZWplY3QpID0+IHtcblx0XHRpZiAobmVzdGVkKSByZXR1cm47XG5cdFx0bmVzdGVkID0gdHJ1ZTtcblx0XHRvblJlc29sdmUuciArPSBkZXBzLmxlbmd0aDtcblx0XHRkZXBzLm1hcCgoZGVwLCBpKSA9PiAoZGVwW3dlYnBhY2tUaGVuXShvblJlc29sdmUsIG9uUmVqZWN0KSkpO1xuXHRcdG5lc3RlZCA9IGZhbHNlO1xuXHR9O1xuXHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWopID0+IHtcblx0XHRyZWplY3QgPSByZWo7XG5cdFx0b3V0ZXJSZXNvbHZlID0gKCkgPT4gKHJlc29sdmUoZXhwb3J0cyksIGNvbXBsZXRlUXVldWUocXVldWUpLCBxdWV1ZSA9IDApO1xuXHR9KTtcblx0cHJvbWlzZVt3ZWJwYWNrRXhwb3J0c10gPSBleHBvcnRzO1xuXHRwcm9taXNlW3dlYnBhY2tUaGVuXSA9IChmbiwgcmVqZWN0Rm4pID0+IHtcblx0XHRpZiAoaXNFdmFsdWF0aW5nKSB7IHJldHVybiBjb21wbGV0ZUZ1bmN0aW9uKGZuKTsgfVxuXHRcdGlmIChjdXJyZW50RGVwcykgd2hlbkFsbChjdXJyZW50RGVwcywgZm4sIHJlamVjdEZuKTtcblx0XHRxdWV1ZUZ1bmN0aW9uKHF1ZXVlLCBmbik7XG5cdFx0cHJvbWlzZVsnY2F0Y2gnXShyZWplY3RGbik7XG5cdH07XG5cdG1vZHVsZS5leHBvcnRzID0gcHJvbWlzZTtcblx0Ym9keSgoZGVwcykgPT4ge1xuXHRcdGlmKCFkZXBzKSByZXR1cm4gb3V0ZXJSZXNvbHZlKCk7XG5cdFx0Y3VycmVudERlcHMgPSB3cmFwRGVwcyhkZXBzKTtcblx0XHR2YXIgZm4sIHJlc3VsdDtcblx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGZuID0gKCkgPT4gKHJlc29sdmUocmVzdWx0ID0gY3VycmVudERlcHMubWFwKChkKSA9PiAoZFt3ZWJwYWNrRXhwb3J0c10pKSkpO1xuXHRcdFx0Zm4uciA9IDA7XG5cdFx0XHR3aGVuQWxsKGN1cnJlbnREZXBzLCBmbiwgcmVqZWN0KTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZm4uciA/IHByb21pc2UgOiByZXN1bHQ7XG5cdH0pLnRoZW4ob3V0ZXJSZXNvbHZlLCByZWplY3QpO1xuXHRpc0V2YWx1YXRpbmcgPSBmYWxzZTtcbn07IiwiY29uc3QgY3JlYXRlQmFja0J0biA9ICgpID0+IHtcclxuICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvc3QtZGV0YWlsX19idG4tY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IGJ0blRlbXBsYXRlID0gYFxyXG4gICAgPGEgaHJlZj1cIi9sb3N0UGV0c1wiPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJhY2stdG8tbGlzdC1idG5cIj7rqqnroZ3snLzroZw8L2J1dHRvbj5cclxuICAgIDwvYT5cclxuICBgO1xyXG4gIGJ0bkNvbnRhaW5lci5pbm5lckhUTUwgPSBidG5UZW1wbGF0ZTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUJhY2tCdG4gfTtcclxuIiwiY29uc3QgZ2V0TG9zdFBldERhdGEgPSBhc3luYyAoe1xyXG4gIHBhZ2VObyxcclxuICBudW1PZlJvd3MsXHJcbiAgdXBraW5kLFxyXG4gIHVwcl9jZCxcclxuICBvcmdfY2QsXHJcbiAgc3RhdGUsXHJcbiAgYmduZGUsXHJcbiAgZW5kZGUsXHJcbn0pID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYC9hcGkvbG9zdC1wZXRzP3Vwcl9jZCR7dXByX2NkfT0mb3JnX2NkJHtvcmdfY2R9PSZ1cGtpbmQ9JHt1cGtpbmR9JnN0YXRlJHtzdGF0ZX09JnBhZ2VObz0ke3BhZ2VOb30mbnVtT2ZSb3dzPSR7bnVtT2ZSb3dzfSZiZ25kZT0ke2JnbmRlfSZlbmRkZT0ke2VuZGRlfWBcclxuICAgICk7XHJcbiAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRMb3N0UGV0TGlzdCA9IChkYXRhKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaXRlbXM6IHsgaXRlbTogbG9zdFBldExpc3QgfSxcclxuICAgIHRvdGFsQ291bnQsXHJcbiAgfSA9IGRhdGE7XHJcbiAgcmV0dXJuIFtsb3N0UGV0TGlzdCwgdG90YWxDb3VudF07XHJcbn07XHJcblxyXG5jb25zdCBzZWFyY2hQYXJhbXMgPSB7XHJcbiAgcGFnZU5vOiAxLFxyXG4gIG51bU9mUm93czogMTAsXHJcbiAgdXBraW5kOiBcIlwiLFxyXG4gIHVwcl9jZDogXCJcIixcclxuICBvcmdfY2Q6IFwiXCIsXHJcbiAgc3RhdGU6IFwiXCIsXHJcbiAgYmduZGU6IFwiXCIsXHJcbiAgZW5kZGU6IFwiXCIsXHJcbn07XHJcblxyXG5jb25zdCBnZXRMb3N0UGV0cyA9IGFzeW5jIChwYXJhbXMpID0+IHtcclxuICBjb25zdCBsb3N0UGV0RGF0YSA9IGF3YWl0IGdldExvc3RQZXREYXRhKHBhcmFtcyk7XHJcbiAgY29uc3QgW2xvc3RQZXRMaXN0LCB0b3RhbENvdW50XSA9IGdldExvc3RQZXRMaXN0KGxvc3RQZXREYXRhKTtcclxuICByZXR1cm4gW2xvc3RQZXRMaXN0LCB0b3RhbENvdW50XTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGdldExvc3RQZXRzLCBzZWFyY2hQYXJhbXMgfTtcclxuIiwiaW1wb3J0IHsgbG9zdFBldExpc3QgfSBmcm9tIFwiLi9sb3N0TWFpblBhZ2UuanNcIjtcclxuaW1wb3J0IHsgcGFpbnRMb3N0UGV0RGV0YWlsIH0gZnJvbSBcIi4vbG9zdFBldHNEZXRhaWwuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQmFja0J0biB9IGZyb20gXCIuL2JhY2tCdG4uanNcIjtcclxuLy8g67KI65OkIOunjOuTpCDsi5wgbG9zdHBldHNkZXRhaWztjpjsnbTsp4DsnZgg7IKs7Iuk7IOBIGluZGV4Lmpz7J2YIOyXre2VoFxyXG5wYWludExvc3RQZXREZXRhaWwobG9zdFBldExpc3QpO1xyXG5jcmVhdGVCYWNrQnRuKCk7XHJcbiIsImltcG9ydCB7IGdldExvc3RQZXRzLCBzZWFyY2hQYXJhbXMgfSBmcm9tIFwiLi9nZXRMb3N0UGV0cy5qc1wiO1xyXG5pbXBvcnQgeyBwYWludExvc3RQZXRzIH0gZnJvbSBcIi4vbG9zdFBldHMuanNcIjtcclxuaW1wb3J0IHsgcGFpbnRTZWFyY2hGb3JtIH0gZnJvbSBcIi4vc2VhcmNoRm9ybS5qc1wiO1xyXG4vLyBpbXBvcnQgeyBsb3N0UGFnaW5hdGlvbiB9IGZyb20gXCIuL2xvc3RQYWdpbmF0aW9uLmpzXCI7XHJcblxyXG4vLyDrsojrk6Qg66eM65OkIOyLnCBsb3N0cGV0c01haW7tjpjsnbTsp4DsnZgg7IKs7Iuk7IOBIGluZGV4Lmpz7J2YIOyXre2VoFxyXG5jb25zdCBbbG9zdFBldExpc3QsIHRvdGFsQ291bnRdID0gYXdhaXQgZ2V0TG9zdFBldHMoc2VhcmNoUGFyYW1zKTtcclxuXHJcbmlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvbG9zdFBldHNcIikge1xyXG4gIHBhaW50U2VhcmNoRm9ybSgpO1xyXG4gIHBhaW50TG9zdFBldHMobG9zdFBldExpc3QpO1xyXG4gIC8vIGxvc3RQYWdpbmF0aW9uKDUwMCwgbG9zdFBldExpc3QpO1xyXG59XHJcblxyXG5leHBvcnQgeyBsb3N0UGV0TGlzdCB9O1xyXG4iLCJjb25zdCBjcmVhdGVMb3N0UGV0SXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgYWdlLFxyXG4gICAgZGVzZXJ0aW9uTm8sXHJcbiAgICBoYXBwZW5EdCxcclxuICAgIGtpbmRDZCxcclxuICAgIG9yZ05tLFxyXG4gICAgcG9wZmlsZSxcclxuICAgIHByb2Nlc3NTdGF0ZSxcclxuICAgIHNleENkLFxyXG4gICAgc3BlY2lhbE1hcmssXHJcbiAgICB3ZWlnaHQsXHJcbiAgfSA9IGl0ZW07XHJcblxyXG4gIGNvbnN0IGxvc3RQZXRUZW1wbGF0ZSA9IGBcclxuICAgIDxhcnRpY2xlIGNsYXNzPVwibG9zdC1jb250ZW50X19pdGVtXCI+XHJcbiAgICAgIDxhIGhyZWY9XCIuL2xvc3RQZXRzLyR7ZGVzZXJ0aW9uTm99XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvc3QtY29udGVudF9faW1nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzcz1cImxvc3QtY29udGVudF9faW1nXCJcclxuICAgICAgICAgICAgc3JjPVwiJHtwb3BmaWxlfVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb3N0LWNvbnRlbnRfX2luZm9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb3N0LWNvbnRlbnRfX2tpbmQtc2V4XCI+XHJcbiAgICAgICAgICAgIDxzcGFuPiR7a2luZENkfSAvICR7c2V4Q2R9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9zdC1jb250ZW50X19hZ2Utd2VpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuPiR7YWdlfSAvICR7d2VpZ2h0fTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxvc3QtY29udGVudF9fZGF0ZVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj4ke2hhcHBlbkR0fSDsoJHsiJg8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb3N0LWNvbnRlbnRfX3BsYWNlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPiR7b3JnTm19PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9zdC1jb250ZW50X19zcGVjaWFsXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPiR7c3BlY2lhbE1hcmt9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9zdC1jb250ZW50X19zdGF0ZVwiPjxzcGFuPiR7cHJvY2Vzc1N0YXRlfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9hcnRpY2xlPlxyXG5gO1xyXG5cclxuICByZXR1cm4gbG9zdFBldFRlbXBsYXRlO1xyXG59O1xyXG5cclxuY29uc3QgbG9zdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvc3QtY29udGVudFwiKTtcclxuXHJcbmNvbnN0IHBhaW50TG9zdFBldHMgPSAobG9zdFBldExpc3QpID0+IHtcclxuICBjb25zdCBsb3N0UGV0SXRlbXMgPSBsb3N0UGV0TGlzdC5tYXAoY3JlYXRlTG9zdFBldEl0ZW0pO1xyXG4gIGxvc3RDb250ZW50LmlubmVySFRNTCA9IGxvc3RQZXRJdGVtcy5qb2luKFwiXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgcGFpbnRMb3N0UGV0cyB9O1xyXG4iLCJjb25zdCBjcmVhdGVMb3N0UGV0RGV0YWlsID0gKGl0ZW0pID0+IHtcclxuICBjb25zdCBsb3N0UGV0RGV0YWlsVGVtcGxhdGUgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImxvc3QtZGV0YWlsX19pbWctY29udGFpbmVyXCI+XHJcbiAgICA8aW1nXHJcbiAgICAgIGNsYXNzPVwibG9zdC1kZXRhaWxfX2ltZ1wiXHJcbiAgICAgIHNyYz1cIiR7aXRlbS5wb3BmaWxlfVwiXHJcbiAgICAvPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwibG9zdC1kZXRhaWxfX2luZm9cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJsb3N0LWRldGFpbF9fYW5pbWFsLWluZm9cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImxvc3QtZGV0YWlsX190aXRsZVwiPuuztO2YuCDrj5nrrLwg7KCV67O0PC9kaXY+XHJcbiAgICAgIDx0YWJsZT5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD7qs7Xqs6DrsojtmLg8L3RoPlxyXG4gICAgICAgICAgICA8dGQ+JHtpdGVtLm5vdGljZU5vfTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+6rO16rOg6riw6rCEPC90aD5cclxuICAgICAgICAgICAgPHRkPiR7aXRlbS5ub3RpY2VTZHR9IH4gJHtpdGVtLm5vdGljZUVkdH08L3RkPlxyXG4gICAgICAgICAgICA8dGg+7IOB7YOcPC90aD5cclxuICAgICAgICAgICAgPHRkPiR7aXRlbS5wcm9jZXNzU3RhdGV9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD7tkojsooU8L3RoPlxyXG4gICAgICAgICAgICA8dGQ+JHtpdGVtLmtpbmRDZH08L3RkPlxyXG4gICAgICAgICAgICA8dGg+7IOJ7IOBPC90aD5cclxuICAgICAgICAgICAgPHRkPiR7aXRlbS5jb2xvckNkfTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+64KY7J20PC90aD5cclxuICAgICAgICAgICAgPHRkPiR7aXRlbS5hZ2V9PC90ZD5cclxuICAgICAgICAgICAgPHRoPuyytOykkTwvdGg+XHJcbiAgICAgICAgICAgIDx0ZD4ke2l0ZW0ud2VpZ2h0fTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+7ISx67OEPC90aD5cclxuICAgICAgICAgICAgPHRkPiR7aXRlbS5zZXhDZH08L3RkPlxyXG4gICAgICAgICAgICA8dGg+7KSR7ISx7ZmU7Jes67aAPC90aD5cclxuICAgICAgICAgICAgPHRkPiR7aXRlbS5uZXV0ZXJZbn08L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPuygkeyImOydvDwvdGg+XHJcbiAgICAgICAgICAgIDx0ZD4ke2l0ZW0uaGFwcGVuRHR9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD7rsJzqsqzsnqXshow8L3RoPlxyXG4gICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjNcIj4ke2l0ZW0uaGFwcGVuUGxhY2V9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD7tirnsp5U8L3RoPlxyXG4gICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjNcIj4ke2l0ZW0uc3BlY2lhbE1hcmt9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJsb3N0LWRldGFpbF9fc2hlbHRlci1pbmZvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsb3N0LWRldGFpbF9fdGl0bGVcIj7rs7TtmLjshowg7KCV67O0PC9kaXY+XHJcbiAgICAgIDx0YWJsZT5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD7rs7TtmLjshozrqoU8L3RoPlxyXG4gICAgICAgICAgICA8dGQ+JHtpdGVtLmNhcmVObX08L3RkPlxyXG4gICAgICAgICAgICA8dGg+7KCE7ZmU67KI7Zi4PC90aD5cclxuICAgICAgICAgICAgPHRkPiR7aXRlbS5jYXJlVGVsfTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+67O07Zi47J6l7IaMPC90aD5cclxuICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIzXCI+JHtpdGVtLmNhcmVBZGRyfTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+6rSA7ZWg6riw6rSAPC90aD5cclxuICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIzXCI+JHtpdGVtLm9yZ05tfTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+64u064u57J6QPC90aD5cclxuICAgICAgICAgICAgPHRkPiR7aXRlbS5jaGFyZ2VObX08L3RkPlxyXG4gICAgICAgICAgICA8dGg+7Jew65297LKYPC90aD5cclxuICAgICAgICAgICAgPHRkPiR7aXRlbS5vZmZpY2V0ZWx9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5gO1xyXG5cclxuICByZXR1cm4gbG9zdFBldERldGFpbFRlbXBsYXRlO1xyXG59O1xyXG5cclxuY29uc3QgcGFpbnRMb3N0UGV0RGV0YWlsID0gKGxvc3RQZXRMaXN0KSA9PiB7XHJcbiAgY29uc3QgcGF0aE5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilbMl07XHJcbiAgY29uc3QgY3VycmVudFBldCA9IGxvc3RQZXRMaXN0LmZpbmQoXHJcbiAgICAoaXRlbSkgPT4gU3RyaW5nKGl0ZW0uZGVzZXJ0aW9uTm8pID09PSBwYXRoTmFtZVxyXG4gICk7XHJcbiAgY29uc3QgbG9zdFBldERldGFpbCA9IGNyZWF0ZUxvc3RQZXREZXRhaWwoY3VycmVudFBldCk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb3N0LWRldGFpbC1jb250YWluZXJcIikuaW5uZXJIVE1MID0gbG9zdFBldERldGFpbDtcclxufTtcclxuXHJcbmV4cG9ydCB7IHBhaW50TG9zdFBldERldGFpbCB9O1xyXG4iLCJjb25zdCBzZWFyY2hGb3JtVGVtcGxhdGUgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImxvc3Qtc2VhcmNoX19ib3hcIj5cclxuICAgIDxmb3JtXHJcbiAgICAgIGlkPVwibG9zdFNlYXJjaEZvcm1cIlxyXG4gICAgICBtZXRob2Q9XCJnZXRcIlxyXG4gICAgICBhY3Rpb249XCIuL1wiXHJcbiAgICAgIGFjY2VwdC1jaGFyc2V0PVwidXRmLThcIlxyXG4gICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibG9zdC1zZWFyY2hfX2RhdGVcIj5cclxuICAgICAgICA8c3Bhbj7rgqDsp5w8L3NwYW4+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJiZWdpbkRhdGVcIiBuYW1lPVwiYmduZGVcIiAvPlxyXG4gICAgICAgIDxzcGFuPn48L3NwYW4+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJlbmREYXRlXCIgbmFtZT1cImVuZGRlXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsb3N0LXNlYXJjaF9fcGxhY2VcIj5cclxuICAgICAgICA8c3Bhbj7sp4Dsl608L3NwYW4+XHJcbiAgICAgICAgPHNlbGVjdCBpZD1cInNpZG9cIiBuYW1lPVwidXByX2NkXCI+PC9zZWxlY3Q+XHJcbiAgICAgICAgPHNlbGVjdCBpZD1cInNpZ3VuZ3VcIiBuYW1lPVwib3JnX2NkXCI+PC9zZWxlY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibG9zdC1zZWFyY2hfX2tpbmQtc3RhdGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9zdC1zZWFyY2hfX2tpbmRcIj5cclxuICAgICAgICAgIDxzcGFuPu2SiOyihTwvc3Bhbj5cclxuICAgICAgICAgIDxzZWxlY3QgaWQ9XCJ1cGtpbmRcIiBuYW1lPVwidXBfa2luZF9jZFwiPjwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb3N0LXNlYXJjaF9fc3RhdGVcIj5cclxuICAgICAgICAgIDxzcGFuPuyDge2DnDwvc3Bhbj5cclxuICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzdGF0ZVwiIG5hbWU9XCJzdGF0ZVwiPjwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1idG4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBzZWFyY2gtYnRuXCI+PGEgaHJlZj1cIiNcIj7qsoDsg4k8L2E+PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gIDwvZGl2PlxyXG5gO1xyXG5cclxuY29uc3Qgc2VhcmNoT3B0aW9ucyA9IHtcclxuICBzaWRvOiBcIuyLnC/rj4RcIixcclxuICBzaWd1bmd1OiBcIuyLnC/qtbAv6rWsXCIsXHJcbiAgdXBraW5kOiBcIuy2leyihVwiLFxyXG4gIHN0YXRlOiBcIuyDge2DnFwiLFxyXG59O1xyXG5cclxuY29uc3QgcGFyZW50T3B0aW9ucyA9IHtcclxuICBzaWRvOiB7XHJcbiAgICDshJzsmrjtirnrs4Tsi5w6IFwiNjExMDAwMFwiLFxyXG4gICAg67aA7IKw6rSR7Jet7IucOiBcIjYyNjAwMDBcIixcclxuICAgIOuMgOq1rOq0keyXreyLnDogXCI2MjcwMDAwXCIsXHJcbiAgICDsnbjsspzqtJHsl63si5w6IFwiNjI4MDAwMFwiLFxyXG4gICAg6rSR7KO86rSR7Jet7IucOiBcIjYyOTAwMDBcIixcclxuICAgIOuMgOyghOq0keyXreyLnDogXCI2MzAwMDAwXCIsXHJcbiAgICDsmrjsgrDqtJHsl63si5w6IFwiNjMxMDAwMFwiLFxyXG4gICAg7IS47KKF7Yq567OE7J6Q7LmY7IucOiBcIjU2OTAwMDBcIixcclxuICAgIOqyveq4sOuPhDogXCI2NDEwMDAwXCIsXHJcbiAgICDqsJXsm5Drj4Q6IFwiNjQyMDAwMFwiLFxyXG4gICAg7Lap7LKt67aB64+EOiBcIjY0MzAwMDBcIixcclxuICAgIOy2qeyyreuCqOuPhDogXCI2NDQwMDAwXCIsXHJcbiAgICDsoITrnbzrtoHrj4Q6IFwiNjQ1MDAwMFwiLFxyXG4gICAg7KCE652864Ko64+EOiBcIjY0NjAwMDBcIixcclxuICAgIOqyveyDgeu2geuPhDogXCI2NDcwMDAwXCIsXHJcbiAgICDqsr3sg4Hrgqjrj4Q6IFwiNjQ4MDAwMFwiLFxyXG4gICAg7KCc7KO87Yq567OE7J6Q7LmY64+EOiBcIjY1MDAwMDBcIixcclxuICB9LFxyXG4gIHVwa2luZDoge1xyXG4gICAg6rCcOiBcIjQxNzAwMFwiLFxyXG4gICAg6rOg7JaR7J20OiBcIjQyMjQwMFwiLFxyXG4gICAg6riw7YOAOiBcIjQyOTkwMFwiLFxyXG4gIH0sXHJcbiAgc3RhdGU6IHtcclxuICAgIOqzteqzoOykkTogXCJub3RpY2VcIixcclxuICAgIOuztO2YuOykkTogXCJwcm90ZWN0XCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IHNldEluaXRpYWxPcHRpb25zID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxvc3Qtc2VhcmNoIHNlbGVjdFwiKTtcclxuICBzZWxlY3RzLmZvckVhY2goKHNlbGVjdCkgPT4ge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gc2VsZWN0O1xyXG4gICAgY29uc3Qgb3B0aW9uTmFtZSA9IHNlYXJjaE9wdGlvbnNbaWRdO1xyXG4gICAgc2VsZWN0LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQgaGlkZGVuPiR7b3B0aW9uTmFtZX0g7ISg7YOdPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPuyghOyytDwvb3B0aW9uPlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgaWYgKGlkIGluIHBhcmVudE9wdGlvbnMpIHtcclxuICAgICAgY3JlYXRlT3B0aW9ucyhzZWxlY3QsIHBhcmVudE9wdGlvbnNbaWRdKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZU9wdGlvbnMgPSAoc2VsZWN0LCBvcHRpb25zKSA9PiB7XHJcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucykpIHtcclxuICAgIHNlbGVjdC5pbm5lckhUTUwgKz0gYDxvcHRpb24gdmFsdWU9XCIke3ZhbHVlfVwiPiR7a2V5fTwvb3B0aW9uPmA7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gY29uc3QgZ2V0Q2hpbGRPcHRpb25zID0gKHBhcmVudFNlbGVjdCwgY2hpbGRTZWxlY3QpID0+IHtcclxuLy8gICBwYXJlbnRTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4vLyAgICAgLy8gZmV0Y2hcclxuLy8gICAgIGNoaWxkU2VsZWN0LmlubmVySFRNTCArPSBgYDtcclxuLy8gICB9KTtcclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IHNldENoaWxkT3B0aW9ucyA9ICgpID0+IHtcclxuLy8gICBjb25zdCBzaWRvU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRvXCIpO1xyXG4vLyAgIGNvbnN0IHNpZ3VuZ3VTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZ3VuZ3VcIik7XHJcbi8vICAgY29uc3Qgc2hlbHRlclNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hlbHRlclwiKTtcclxuLy8gICBjb25zdCB1cGtpbmRTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Vwa2luZFwiKTtcclxuLy8gICBjb25zdCBraW5kU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNraW5kXCIpO1xyXG5cclxuLy8gICBnZXRDaGlsZE9wdGlvbnMoc2lkb1NlbGVjdCwgc2lndW5ndVNlbGVjdCk7XHJcbi8vICAgZ2V0Q2hpbGRPcHRpb25zKHNpZ3VuZ3VTZWxlY3QsIHNoZWx0ZXJTZWxlY3QpO1xyXG4vLyAgIGdldENoaWxkT3B0aW9ucyh1cGtpbmRTZWxlY3QsIGtpbmRTZWxlY3QpO1xyXG4vLyB9O1xyXG5cclxuY29uc3QgcGFpbnRTZWFyY2hGb3JtID0gKCkgPT4ge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9zdC1zZWFyY2hcIikuaW5uZXJIVE1MID0gc2VhcmNoRm9ybVRlbXBsYXRlO1xyXG4gIHNldEluaXRpYWxPcHRpb25zKCk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBwYWludFNlYXJjaEZvcm0gfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ21vZHVsZScgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU3OSk7XG4iXSwibmFtZXMiOlsid2VicGFja1RoZW4iLCJ3ZWJwYWNrRXhwb3J0cyIsImNvbXBsZXRlUXVldWUiLCJjb21wbGV0ZUZ1bmN0aW9uIiwicXVldWVGdW5jdGlvbiIsImNyZWF0ZUJhY2tCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJzZWFyY2hQYXJhbXMiLCJwYWdlTm8iLCJudW1PZlJvd3MiLCJ1cGtpbmQiLCJ1cHJfY2QiLCJvcmdfY2QiLCJzdGF0ZSIsImJnbmRlIiwiZW5kZGUiLCJnZXRMb3N0UGV0cyIsImFzeW5jIiwicGFyYW1zIiwibG9zdFBldERhdGEiLCJmZXRjaCIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJnZXRMb3N0UGV0RGF0YSIsImxvc3RQZXRMaXN0IiwidG90YWxDb3VudCIsImRhdGEiLCJpdGVtcyIsIml0ZW0iLCJnZXRMb3N0UGV0TGlzdCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJjcmVhdGVMb3N0UGV0SXRlbSIsImFnZSIsImRlc2VydGlvbk5vIiwiaGFwcGVuRHQiLCJraW5kQ2QiLCJvcmdObSIsInBvcGZpbGUiLCJwcm9jZXNzU3RhdGUiLCJzZXhDZCIsInNwZWNpYWxNYXJrIiwid2VpZ2h0IiwibG9zdENvbnRlbnQiLCJwYWludExvc3RQZXRzIiwibG9zdFBldEl0ZW1zIiwibWFwIiwiam9pbiIsInBhaW50TG9zdFBldERldGFpbCIsInBhdGhOYW1lIiwic3BsaXQiLCJjdXJyZW50UGV0IiwiZmluZCIsIlN0cmluZyIsImxvc3RQZXREZXRhaWwiLCJub3RpY2VObyIsIm5vdGljZVNkdCIsIm5vdGljZUVkdCIsImNvbG9yQ2QiLCJuZXV0ZXJZbiIsImhhcHBlblBsYWNlIiwiY2FyZU5tIiwiY2FyZVRlbCIsImNhcmVBZGRyIiwiY2hhcmdlTm0iLCJvZmZpY2V0ZWwiLCJzZWFyY2hPcHRpb25zIiwic2lkbyIsInNpZ3VuZ3UiLCJwYXJlbnRPcHRpb25zIiwicGFpbnRTZWFyY2hGb3JtIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJzZWxlY3QiLCJpZCIsIm9wdGlvbk5hbWUiLCJvcHRpb25zIiwia2V5IiwidmFsdWUiLCJPYmplY3QiLCJlbnRyaWVzIiwiY3JlYXRlT3B0aW9ucyIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiU3ltYm9sIiwicXVldWUiLCJmbiIsInIiLCJwdXNoIiwiYSIsImJvZHkiLCJoYXNBd2FpdCIsImN1cnJlbnREZXBzIiwib3V0ZXJSZXNvbHZlIiwicmVqZWN0IiwiaXNFdmFsdWF0aW5nIiwibmVzdGVkIiwid2hlbkFsbCIsImRlcHMiLCJvblJlc29sdmUiLCJvblJlamVjdCIsImxlbmd0aCIsImRlcCIsImkiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWoiLCJyZWplY3RGbiIsInJlc3VsdCIsInRoZW4iLCJvYmoiLCJyZXQiLCJ3cmFwRGVwcyIsImQiLCJkZWZpbml0aW9uIiwibyIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiXSwic291cmNlUm9vdCI6IiJ9