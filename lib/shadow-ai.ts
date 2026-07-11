export interface AIReport {
  title: string;
  summary: string;
  strengths: string[];
  recommendations: string[];
  confidence: number;
}

export function generateAIReport(
  score: number,
  risk: number
): AIReport {

  if (score >= 800) {
    return {
      title: "Excellent Reputation",

      summary:
        "This wallet demonstrates healthy blockchain behavior with consistent activity across trusted protocols.",

      strengths: [
        "Strong reputation",
        "Low risk profile",
        "Trusted wallet activity",
        "Healthy balance",
      ],

      recommendations: [
        "Continue consistent activity",
        "Participate in governance",
        "Expand DeFi participation",
      ],

      confidence: 96,
    };
  }

  if (score >= 600) {
    return {
      title: "Good Reputation",

      summary:
        "Wallet is generally healthy but still has room for improvement.",

      strengths: [
        "Good transaction history",
        "Healthy wallet",
      ],

      recommendations: [
        "Increase activity",
        "Hold assets longer",
      ],

      confidence: 91,
    };
  }

  return {
    title: "Needs Improvement",

    summary:
      "Wallet requires additional activity to build stronger reputation.",

    strengths: [
      "Recently active",
    ],

    recommendations: [
      "Use trusted protocols",
      "Increase wallet history",
      "Avoid risky contracts",
    ],

    confidence: 84,
  };
}