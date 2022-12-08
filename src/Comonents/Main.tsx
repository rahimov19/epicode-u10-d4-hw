import React from "react";
import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Article from "./Article";
import { Articles } from "../types";

export default function Main() {
  const [articles, setArticles] = useState<Articles[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      console.log("response", response);
      if (response.ok) {
        let data = await response.json();
        console.log("data", data);
        setArticles(data);
      } else {
        console.log("error while fetching data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid>
      <h2 id="newsh2">Fresh News</h2>
      <Row>
        {articles.map((art) => (
          <Article art={art} key={art.id} />
        ))}
      </Row>
    </Container>
  );
}
