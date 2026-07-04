import { useState } from "react";
import {
  FaBrain,
  FaPaperPlane,
  FaLightbulb,
  FaCode,
  FaQuestionCircle,
  FaRocket,
} from "react-icons/fa";

const quickActions = [
  {
    label: "Explain this lesson",
    icon: <FaLightbulb />,
    prompt: "Explain this lesson in simple words.",
  },
  {
    label: "Give me practice",
    icon: <FaQuestionCircle />,
    prompt: "Give me practice questions for this lesson.",
  },
  {
    label: "Review my code",
    icon: <FaCode />,
    prompt: "Review my code and help me improve it.",
  },
  {
    label: "Build a project",
    icon: <FaRocket />,
    prompt: "Give me a mini project for this lesson.",
  },
];

export default function LumineryTutor({ courseTitle, lessonTitle }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello! I am Luminery, your Mastery Coach. I will help you Learn, Practice, Build, Master, and Apply.",
    },
  ]);

  const [input, setInput] = useState("");

  function sendMessage(text = input) {
    if (!text.trim()) return;

    const studentMessage = {
      role: "student",
      text,
    };

   const lumineryResponse = {
  role: "assistant",
  text: `Great question. For "${lessonTitle}", here is how we move toward mastery:

1. Learn
Understand the concept in simple words.

2. Practice
Try a small guided exercise.

3. Build
Create a mini project using this idea.

4. Master
Answer a challenge question to prove understanding.

5. Apply
Use the skill in a real-world situation.

Soon, I will connect to real AI and give personalized coaching for your exact question.`,
};
    setMessages((prev) => [...prev, studentMessage, lumineryResponse]);
    setInput("");
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
          <FaBrain />
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-slate-900">
            Luminery
          </h2>
          <p className="text-sm text-slate-500">Your Mastery Coach</p>
        </div>
      </div>

      <div className="mt-5 rounded-2xl bg-blue-50 p-4 text-sm text-slate-700">
        <p>
          Course: <strong>{courseTitle}</strong>
        </p>
        <p>
          Lesson: <strong>{lessonTitle}</strong>
        </p>
      </div>

      <div className="mt-5 grid gap-2">
        {quickActions.map((action) => (
          <button
            key={action.label}
            onClick={() => sendMessage(action.prompt)}
            className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-700 hover:border-blue-600 hover:bg-blue-50"
          >
            <span className="text-blue-600">{action.icon}</span>
            {action.label}
          </button>
        ))}
      </div>

      <div className="mt-5 max-h-64 space-y-3 overflow-y-auto rounded-2xl bg-slate-50 p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`rounded-2xl p-3 text-sm leading-6 ${
              message.role === "assistant"
                ? "bg-white text-slate-700"
                : "bg-blue-600 text-white"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>

      <div className="mt-5 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Luminery..."
          className="flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
        />

        <button
          onClick={() => sendMessage()}
          className="rounded-xl bg-blue-600 px-4 text-white hover:bg-blue-700"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}