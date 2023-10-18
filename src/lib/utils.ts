export function getScoreColor(score: number, type: 'text') {
  if (type == 'text') {
    if (score <= 33) {
      return `text-red-400`;
    } else if (score > 33 && score <= 66) {
      return `text-yellow-500`;
    } else if (score > 66) {
      return `text-green-500`;
    }
  } else {
    if (score <= 33) {
      return 'bg-red-400';
    } else if (score > 33 && score <= 66) {
      return 'bg-yellow-500';
    } else if (score > 66) {
      return 'bg-green-500';
    }
  }
}
