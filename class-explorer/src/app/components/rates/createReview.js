import React, { useState } from 'react';

const CreateReview = ({ onSave, review = {} }) => {
  const [isOnline, setIsOnline] = useState(review.isOnline || false);
  const [grade, setGrade] = useState(review.grade || '');
  const [usefulness, setUsefulness] = useState(review.usefulness || 0);
  const [quality, setQuality] = useState(review.quality || 0);
  const [professor, setProfessor] = useState(review.professor || '');
  const [tags, setTags] = useState(review.tags || []);
  const [reviewText, setReviewText] = useState(review.reviewText || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      isOnline,
      grade,
      usefulness,
      quality,
      professor,
      tags,
      reviewText,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="create-review border p-4 rounded-lg shadow-sm">
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isOnline}
            onChange={() => setIsOnline(!isOnline)}
            className="mr-2"
          />
          Online Course
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Grade</label>
        <input
          type="text"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className="border p-2 rounded-lg w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Usefulness (out of 5)</label>
        <input
          type="number"
          value={usefulness}
          onChange={(e) => setUsefulness(Number(e.target.value))}
          max={5}
          min={0}
          className="border p-2 rounded-lg w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Quality (out of 5)</label>
        <input
          type="number"
          value={quality}
          onChange={(e) => setQuality(Number(e.target.value))}
          max={5}
          min={0}
          className="border p-2 rounded-lg w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Professor</label>
        <input
          type="text"
          value={professor}
          onChange={(e) => setProfessor(e.target.value)}
          className="border p-2 rounded-lg w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Tags</label>
        <input
          type="text"
          value={tags.join(', ')}
          onChange={(e) => setTags(e.target.value.split(',').map(tag => tag.trim()))}
          className="border p-2 rounded-lg w-full"
          placeholder="e.g., Challenging, Practical, etc."
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Review</label>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          className="border p-2 rounded-lg w-full"
          rows="5"
          placeholder="Discuss the course's difficulty, workload, relevance, usefulness, and overall experience."
        ></textarea>
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg w-full">
        Save Review
      </button>
    </form>
  );
};

export default CreateReview;
