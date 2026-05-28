type ProgressDisplayProps = {
  progress: number;
  scrollerClassName?: string;
  scrollerStyle?: React.CSSProperties;
  onMouseDown?: (e: React.MouseEvent<HTMLDivElement>) => void;
  trackRef?: React.RefObject<HTMLDivElement | null>;
  roundDisplay?: boolean;
};

export const ProgressDisplay = ({
  progress,
  scrollerClassName = '',
  scrollerStyle,
  onMouseDown,
  trackRef,
  roundDisplay = false,
}: ProgressDisplayProps) => {
  return (
    <div className="goal-data">
      <div className="bar" ref={trackRef}>
        <div className="progress" style={{ width: `${progress}%` }} />
        <div
          className={`scroller ${scrollerClassName}`.trim()}
          onMouseDown={onMouseDown}
          style={{ left: `calc(${progress}% - 10px)`, ...scrollerStyle }}
        />
      </div>
      <div>{roundDisplay ? Math.round(progress) : progress}%</div>
    </div>
  );
};
