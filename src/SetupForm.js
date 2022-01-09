import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form action="" className="setup-form">
          <h2>Set up Quiz</h2>
          {/* number question */}
          <div className="form-control">
            <label htmlFor="amount">number of question</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
              className="form-input"
              min={1}
              max={50}
            />
          </div>
          {/* category */}
          <div className="form-control">
            <label htmlFor="category">category</label>
            <select
              type="text"
              name="category"
              id="category"
              value={quiz.category}
              onChange={handleChange}
              className="form-input"
            >
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
            </select>
          </div>
          {/* difficulty */}
          <div className="form-control">
            <label htmlFor="difficulty">difficulty</label>
            <select
              type="text"
              name="difficulty"
              id="difficulty"
              value={quiz.difficulty}
              onChange={handleChange}
              className="form-input"
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          {error && (
            <p className="error">
              can't generate question, please try different options
            </p>
          )}
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
