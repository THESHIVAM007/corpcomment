import { TriangleUpIcon } from "@radix-ui/react-icons";

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>569</span>
        </button>

        <div>
          <p>B</p>
        </div>
        <div>
          <p>ByteGrad</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim soluta
            cum numquam voluptatem molestiae commodi!
          </p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  );
}
