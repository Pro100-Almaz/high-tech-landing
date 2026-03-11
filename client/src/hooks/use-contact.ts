import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import type { InsertContactMessage } from "@shared/schema";

export function useCreateContactMessage() {
  return useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      // Validate data against the shared API contract before sending
      const validated = api.contact.create.input.parse(data);
      
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
        credentials: "include",
      });
      
      if (!res.ok) {
        let errorMessage = "Failed to send message";
        try {
          // Attempt to parse the structured error from the API contract
          const errorData = api.contact.create.responses[400].parse(await res.json());
          errorMessage = errorData.message;
        } catch (e) {
          // Fallback if parsing fails or status is not 400
          console.error("Failed to parse error response", e);
        }
        throw new Error(errorMessage);
      }
      
      // Parse the successful response
      return api.contact.create.responses[201].parse(await res.json());
    },
  });
}
