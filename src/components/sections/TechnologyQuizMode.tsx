import React, { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy, Sparkles, HelpCircle } from 'lucide-react';
import type { QuizQuestion } from '../../types/portfolio';
import { quizQuestionsBank } from '../../data/portfolioData';

interface TechnologyQuizModeProps {
  onScoreUpdate: (points: number) => void;
  isPlaying: boolean;
  onStartQuiz: () => void;
  onRestartQuiz: () => void;
}

export function TechnologyQuizMode({
  onScoreUpdate,
  isPlaying,
  onStartQuiz,
  onRestartQuiz,
}: TechnologyQuizModeProps) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  // Initialize and shuffle questions on mount or restart
  useEffect(() => {
    initQuiz();
  }, []);

  const initQuiz = () => {
    const shuffled = [...quizQuestionsBank].sort(() => 0.5 - Math.random()).slice(0, 8);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setQuizFinished(false);
    setCorrectAnswersCount(0);
  };

  const handleSelectOption = (index: number) => {
    if (isAnswered || !isPlaying) return;

    setSelectedOption(index);
    setIsAnswered(true);

    const currentQ = questions[currentIndex];
    const correct = index === currentQ.correctIndex;
    setIsCorrect(correct);

    if (correct) {
      onScoreUpdate(150);
      setCorrectAnswersCount((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setIsCorrect(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    initQuiz();
    onRestartQuiz();
  };

  if (questions.length === 0) return null;

  const currentQ = questions[currentIndex];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '520px',
        borderRadius: '24px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(10, 15, 29, 0.98) 100%)',
        border: '1px solid rgba(168, 85, 247, 0.3)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(168, 85, 247, 0.15)',
        padding: '36px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Top Progress Bar & Category Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                fontSize: '0.74rem',
                fontFamily: 'var(--font-mono)',
                padding: '4px 10px',
                borderRadius: '999px',
                background: 'rgba(168, 85, 247, 0.15)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                color: '#c084fc',
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
            >
              {currentQ.category}
            </span>
            <span style={{ fontSize: '0.84rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
              Question {currentIndex + 1} of {questions.length}
            </span>
          </div>

          <span style={{ fontSize: '0.84rem', color: '#10b981', fontWeight: 600 }}>
            {correctAnswersCount} Correct
          </span>
        </div>

        {/* Progress bar line */}
        <div
          style={{
            width: '100%',
            height: '4px',
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '999px',
            overflow: 'hidden',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #a855f7, #00f0ff)',
              transition: 'width 0.3s ease',
            }}
          />
        </div>

        {/* Question Text */}
        <h3
          style={{
            fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
            fontWeight: 700,
            color: '#f8fafc',
            lineHeight: 1.45,
            marginBottom: '28px',
          }}
        >
          {currentQ.question}
        </h3>

        {/* Options Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '14px',
            marginBottom: '24px',
          }}
        >
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isTargetCorrect = idx === currentQ.correctIndex;

            let btnBackground = 'rgba(15, 23, 42, 0.8)';
            let btnBorder = '1px solid rgba(255, 255, 255, 0.1)';
            let textColor = '#e2e8f0';

            if (isAnswered) {
              if (isTargetCorrect) {
                btnBackground = 'rgba(16, 185, 129, 0.2)';
                btnBorder = '1.5px solid #10b981';
                textColor = '#34d399';
              } else if (isSelected && !isTargetCorrect) {
                btnBackground = 'rgba(239, 68, 68, 0.2)';
                btnBorder = '1.5px solid #ef4444';
                textColor = '#f87171';
              }
            } else if (isSelected) {
              btnBorder = '1px solid #00f0ff';
              btnBackground = 'rgba(0, 240, 255, 0.1)';
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                disabled={isAnswered || !isPlaying}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  borderRadius: '14px',
                  background: btnBackground,
                  border: btnBorder,
                  color: textColor,
                  fontSize: '0.96rem',
                  fontWeight: 600,
                  cursor: isAnswered || !isPlaying ? 'default' : 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                }}
                className={!isAnswered && isPlaying ? 'hover:border-purple-400' : ''}
              >
                <span>{option}</span>
                {isAnswered && isTargetCorrect && <CheckCircle2 size={18} color="#34d399" />}
                {isAnswered && isSelected && !isTargetCorrect && <XCircle size={18} color="#f87171" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Answer Feedback & Explanation */}
      {isAnswered && (
        <div
          style={{
            padding: '16px 20px',
            borderRadius: '14px',
            background: isCorrect ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
            border: `1px solid ${isCorrect ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            animation: 'fadeInUp 0.25s ease',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {isCorrect ? (
              <CheckCircle2 size={18} color="#34d399" />
            ) : (
              <XCircle size={18} color="#f87171" />
            )}
            <span
              style={{
                fontSize: '0.92rem',
                fontWeight: 700,
                color: isCorrect ? '#34d399' : '#f87171',
              }}
            >
              {isCorrect ? 'Correct! +150 Points' : 'Incorrect'}
            </span>
          </div>
          <p style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.5 }}>
            {currentQ.explanation}
          </p>
        </div>
      )}

      {/* Footer Controls: Next / Restart */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
        {isAnswered && (
          <button
            onClick={handleNextQuestion}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #a855f7, #ec4899)',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.92rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
            }}
          >
            <span>{currentIndex + 1 < questions.length ? 'Next Question' : 'View Quiz Summary'}</span>
            <ArrowRight size={16} />
          </button>
        )}
      </div>

      {/* Quiz Finished Screen */}
      {quizFinished && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(3, 7, 18, 0.92)',
            backdropFilter: 'blur(12px)',
            zIndex: 40,
            textAlign: 'center',
            padding: '28px',
          }}
        >
          <div
            style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'rgba(168, 85, 247, 0.2)',
              border: '2px solid #a855f7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px',
              boxShadow: '0 0 35px rgba(168, 85, 247, 0.35)',
            }}
          >
            <Trophy size={36} color="#c084fc" />
          </div>
          <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#ffffff', marginBottom: '8px' }}>
            Technology Quiz Completed!
          </h3>
          <p style={{ fontSize: '1rem', color: '#94a3b8', maxWidth: '440px', marginBottom: '20px' }}>
            You scored {correctAnswersCount} out of {questions.length} correct on Vasu Bandaru's technology stack!
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={handleRestart}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.92rem',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <RotateCcw size={16} />
              <span>Play Another Round</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
