import { useMutation } from "@tanstack/react-query";

const createLogo = async (prompt: string) => {
  const res = await fetch("http://127.0.0.1:8000/create-logo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: "Benim test promptum" }),
  });
  return res.json();
};
export const useCreateLogo = () => {
  return useMutation<
    { logo_url: string; status: string; prompt: string; created_at: string },
    Error,
    string
  >({
    mutationFn: createLogo,
  });
};
