const SkillChart = ({ skill, level }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = (level / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg className="w-24 h-24">
        <circle
          className="text-gray-300"
          strokeWidth="5"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="48"
          cy="48"
        />
        <circle
          className="text-accent"
          strokeWidth="5"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="48"
          cy="48"
        />
      </svg>
      <span className="mt-2 text-sm font-semibold text-secondary">{skill}</span>
      <span className="text-xs text-accent">{level}%</span>
    </div>
  );
};

export default SkillChart;
