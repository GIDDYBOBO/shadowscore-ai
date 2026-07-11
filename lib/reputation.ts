export interface ReputationResult {
  score: number;
  risk: number;
  grade: string;
  status: string;
}

export function calculateReputation(
  connected: boolean,
  balance: number
): ReputationResult {

  let score = 0;

  if (connected) score += 200;

  if (balance > 0)
    score += 200;

  if (balance > 0.5)
    score += 150;

  if (balance > 2)
    score += 150;

  const risk = Math.max(5, 100 - score / 10);

  let grade = "D";

  if (score >= 850) grade = "S";
  else if (score >= 700) grade = "A";
  else if (score >= 550) grade = "B";
  else if (score >= 400) grade = "C";

  return {
    score,
    risk,
    grade,
    status:
      risk < 25
        ? "Healthy"
        : "Needs Improvement",
  };
}