import React from "react";
import requests from "../../api/requests";
import Banner from "../../components/Banner";
import Row from "../../components/Row";

export default function MainPage() {
  return (
    <div>
      <Banner />

      <Row
        title="넷플릭스 오리지널"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="트렌트" id="TN" fetchUrl={requests.fetchTranding} />
      <Row title="인기있는거" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row title="액션좋아하니" id="AM" fetchUrl={requests.fetchActionMovies} />
      <Row title="이건코메디야" id="CM" fetchUrl={requests.fetchComedyMovies} />
    </div>
  );
}
