import FeedbackItem from "./FeedbackItem";

export default function FeedbackList() {
  const feedbackItems = [
    {
      upvoteCount: 593,
      badgeLetter: "B",
      companyName: "ByteGrad",
      text: "test test test test",
      daysAgo: 4,
    },
    {
      upvoteCount: 563,
      badgeLetter: "S",
      companyName: "StarBucks",
      text: "coffee coffee coffee",
      daysAgo: 3,
    },
  ];
  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem) => {
        return <FeedbackItem feedbackItem={feedbackItem} />;
      })}
    </ol>
  );
}
