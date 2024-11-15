import { useEffect, useState } from "react";
import Container from "./Container";
import Footer from "./Footer";
import HashtagList from "./HashtagList";
import { TFeedbackItem } from "../lib/types";

function App() {
  const [feedbackItems, setfeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMesaage, setErrorMessage] = useState("");

  const handleAddToList = (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);
    const newItem: TFeedbackItem = {
      text: text,
      id: new Date().getTime(),
      upvoteCount: 0,
      daysAgo: 0,
      companyName: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };
    setfeedbackItems([...feedbackItems, newItem]);
  };

  useEffect(() => {
    const fetchFeedbackItems = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setfeedbackItems(data.feedbacks);
      } catch (error) {
        setErrorMessage("Something went wrong");
      }
      setIsLoading(false);
    };
    fetchFeedbackItems();
  }, []);
  return (
    <div className="app">
      <Footer />
      <Container
        handleAddToList={handleAddToList}
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessage={errorMesaage}
      />
      <HashtagList />
    </div>
  );
}

export default App;
