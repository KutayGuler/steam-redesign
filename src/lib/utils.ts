export function getScoreColor(score: number, type: string) {
  if (type == 'text') {
    if (score <= 33) {
      return `text-red-400`;
    } else if (score > 33 && score <= 66) {
      return `text-yellow-500`;
    } else if (score > 66) {
      return `text-green-500`;
    }
  } else if (type == 'bg') {
    if (score <= 33) {
      return 'bg-red-400';
    } else if (score > 33 && score <= 66) {
      return 'bg-yellow-500';
    } else if (score > 66) {
      return 'bg-green-500';
    }
  } else if (type == 'border') {
    if (score <= 33) {
      return 'border-red-400';
    } else if (score > 33 && score <= 66) {
      return 'border-yellow-500';
    } else if (score > 66) {
      return 'border-green-500';
    }
  }
}
