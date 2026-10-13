import { useRef, useState } from "react";
import "./DraggableCard.css";

function DraggableCard({
  children,
  className = "",
  initialPosition,
}) {
  const cardRef = useRef(null);
  const dragData = useRef(null);

  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);

  function handlePointerDown(event) {
    if (event.button !== 0) return;

    event.preventDefault();

    const card = cardRef.current;
    const parent = card.parentElement;
    const cardRect = card.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    dragData.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startLeft: cardRect.left - parentRect.left,
      startTop: cardRect.top - parentRect.top,
    };

    card.setPointerCapture(event.pointerId);

    setIsDragging(true);
  }

  function handlePointerMove(event) {
    const data = dragData.current;

    if (!data || data.pointerId !== event.pointerId) return;

    const card = cardRef.current;
    const parent = card.parentElement;

    const maxLeft = parent.clientWidth - card.offsetWidth;
    const maxTop = parent.clientHeight - card.offsetHeight;

    const newLeft =
      data.startLeft + event.clientX - data.startX;

    const newTop =
      data.startTop + event.clientY - data.startY;

    setPosition({
      left: Math.max(0, Math.min(newLeft, maxLeft)),
      top: Math.max(0, Math.min(newTop, maxTop)),
    });
  }

  function handlePointerUp(event) {
    if (
      dragData.current &&
      dragData.current.pointerId === event.pointerId
    ) {
      dragData.current = null;
      setIsDragging(false);
    }
  }

  return (
    <div
      ref={cardRef}
      className={`floating-card draggable-card ${className} ${
        isDragging ? "is-dragging" : ""
      }`}
      style={{
        left: `${position.left}px`,
        top: `${position.top}px`,
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      role="group"
    >
      {children}
    </div>
  );
}

export default DraggableCard;