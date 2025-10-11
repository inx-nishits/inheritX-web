'use client';
import { useState, useEffect, useRef } from 'react';

const TypingAnimation = ({ 
  text, 
  speed = 100, 
  delay = 500, 
  showCursor = true,
  cursorBlinkSpeed = 500,
  className = '',
  onComplete = null,
  pauseOnSpaces = false,
  pauseDuration = 200,
  variableSpeed = true,
  highlightWords = false
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursorState, setShowCursorState] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const timeoutRef = useRef(null);
  const cursorTimeoutRef = useRef(null);
  const currentIndexRef = useRef(0);

  // Get variable speed based on character type
  const getCharSpeed = (char) => {
    if (!variableSpeed) return speed;
    
    // Faster for common letters
    if (/[aeiouAEIOU]/.test(char)) return speed * 0.7;
    if (/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/.test(char)) return speed * 0.8;
    // Slower for special characters and spaces
    if (char === ' ') return pauseOnSpaces ? pauseDuration : speed * 1.5;
    if (/[.,!?;:]/.test(char)) return speed * 2;
    if (/[A-Z]/.test(char)) return speed * 1.2; // Slightly slower for capitals
    
    return speed;
  };

  // Start typing animation
  useEffect(() => {
    if (!text) return;

    // Clear any existing animation
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Reset state
    setDisplayedText('');
    currentIndexRef.current = 0;
    setIsTyping(true);

    const typeText = () => {
      if (currentIndexRef.current < text.length) {
        const newText = text.slice(0, currentIndexRef.current + 1);
        setDisplayedText(newText);
        currentIndexRef.current += 1;
        
        // Get variable speed for current character
        const currentChar = text[currentIndexRef.current - 1];
        const nextSpeed = getCharSpeed(currentChar);
        
        timeoutRef.current = setTimeout(typeText, nextSpeed);
      } else {
        setIsTyping(false);
        if (onComplete) {
          onComplete();
        }
      }
    };

    // Start typing after delay
    timeoutRef.current = setTimeout(typeText, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsTyping(false);
    };
  }, [text, speed, delay, onComplete, pauseOnSpaces, pauseDuration, variableSpeed]);

  // Enhanced cursor blinking effect
  useEffect(() => {
    if (!showCursor) return;

    const blinkCursor = () => {
      setShowCursorState(prev => !prev);
      cursorTimeoutRef.current = setTimeout(blinkCursor, cursorBlinkSpeed);
    };

    cursorTimeoutRef.current = setTimeout(blinkCursor, cursorBlinkSpeed);

    return () => {
      if (cursorTimeoutRef.current) {
        clearTimeout(cursorTimeoutRef.current);
      }
    };
  }, [showCursor, cursorBlinkSpeed]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (cursorTimeoutRef.current) {
        clearTimeout(cursorTimeoutRef.current);
      }
    };
  }, []);

  // Render text with word highlighting if enabled
  const renderText = () => {
    if (!highlightWords) {
      return displayedText;
    }

    const words = displayedText.split(' ');
    const lastWordIndex = words.length - 1;
    
    return words.map((word, index) => (
      <span 
        key={index} 
        className={index === lastWordIndex && isTyping ? 'typing-word-highlight' : ''}
      >
        {word}
        {index < words.length - 1 && ' '}
      </span>
    ));
  };

  return (
    <span className={className}>
      {renderText()}
      {showCursor && showCursorState && (
        <span className="typing-cursor">|</span>
      )}
    </span>
  );
};

export default TypingAnimation;