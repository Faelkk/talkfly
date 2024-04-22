export function formatarHora(sentAtString: string) {
  const data = new Date(sentAtString);
  const hora = data.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return hora;
}

export const formatTimestamp = (timestamp: string) => {
  const date = new Date(timestamp);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
