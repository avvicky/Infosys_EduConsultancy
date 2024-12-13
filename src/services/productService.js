export const getProducts = async () => {
  const response = await fetch("http://localhost:8080/courses", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) throw new Error("Failed to fetch products");

  const data = await response.json();
  console.log(data);
  return data;
};

