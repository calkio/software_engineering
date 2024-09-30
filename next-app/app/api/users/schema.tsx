import { z } from "zod";

const schema = z.object({
  name: z.string().min(3),
  age: z.number().max(100),
  nickname: z.string().min(3),
  email: z.string().email(),
  password: z.number().min(6),
});

export default schema;
