const formatValue = (value: number): string => {
  const s = new Intl.NumberFormat('de-DE', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(value);
  return `R$ ${s}`;
};

export default formatValue;
