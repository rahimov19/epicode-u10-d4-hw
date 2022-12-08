/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Articles } from "../types";

export default function Details() {
  const params = useParams();
  console.log(params);
  const [article, setArticle] = useState<Articles | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getArticle();
  }, []);

  async function getArticle() {
    try {
      let response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setArticle(data);
      } else {
        console.log("Error while getting data");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {article ? (
        <Container>
          <h1>{article.title}</h1>
          <p>{article.newsSite}</p>
          <img src={article.imageUrl} alt="aaa" />
          <p>{article.summary}</p>
          <Button variant="info" onClick={() => navigate("/")}>
            To Main{" "}
          </Button>
        </Container>
      ) : (
        <div></div>
      )}
    </>
  );
}
