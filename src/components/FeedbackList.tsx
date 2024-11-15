import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";

import ErrorMessage from "./ErrorMessage";

// const exampleFeedbackItems = [
//   {
//     upvoteCount: 593,
//     badgeLetter: "B",
//     companyName: "ByteGrad",
//     text: "test test test test",
//     daysAgo: 4,
//   },
//   {
//     upvoteCount: 563,
//     badgeLetter: "S",
//     companyName: "StarBucks",
//     text: "coffee coffee coffee",
//     daysAgo: 3,
//   },
// ];
export default function FeedbackList() {
  const [feedbackItems, setfeedbackItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMesaage, setErrorMessage] = useState("");

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
    <ol className="feedback-list">
      {isLoading ? <Spinner /> : null}
      {errorMesaage ? <ErrorMessage message={errorMesaage} /> : null}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
