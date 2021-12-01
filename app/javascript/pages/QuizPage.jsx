import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const QuizPage = () => {
  const [quizData, setQuizData] = useState({data: "nothing"});
  const params = useParams();
  const slug = params.quizId;
  const url = `/quiz/${slug}`;
  const csrf_token = document.querySelector('meta[name="csrf-token"]').content;

  useEffect(async () => {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrf_token,
      }
    });
    if(response.ok) {
      const data = await response.json();
      setQuizData(data);
    }
  }, []);

  return (
    <>
      <h1>The Quiz Page</h1>
      <p>{JSON.stringify(quizData)}</p>
    </>
  );
};

export default QuizPage;