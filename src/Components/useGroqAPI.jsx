import { useState } from "react";

const useGroqAPI = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_GROQ_API_KEY;
  const url = "https://api.groq.com/openai/v1/chat/completions";

  const fetchData = async (prompt) => {
    prompt =
      prompt +
      "Generate a well-formatted, responsive HTML output using Tailwind CSS that lists multiple dishes that can be prepared from a given list of ingredients. The response should be informative, concise, and visually appealing, suitable for direct display on a website. If necessary, you may add one or two complementary ingredients to enhance the dishes, and list them separately under 'Additional Ingredients Used.'Each dish should include:A clear nameA brief yet useful preparation descriptionEnsure the Tailwind CSS styling is clean, modern, and fully responsive for all screen sizes. The text should be well-spaced, not too large, and should not stick to the edges of the screen. The design should provide a pleasant reading experience.";
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [{ role: "user", content: prompt }],
          temperature: 0.7,
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch response");

      const result = await response.json();
      setData(result.choices[0].message.content);
      console.log(result.choices[0].message.content);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};

export default useGroqAPI;
