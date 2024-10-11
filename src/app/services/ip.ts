export const getIP = async () => {
  const res = await fetch('http://localhost:3000/api/ip');
  const data = await res.json();

  return data.ip;
};
