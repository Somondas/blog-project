import { redirect } from "next/navigation";

// TODO: This is just a quick fix, correct it later...
export default function AdminRedirect() {
  redirect("http://localhost:3001/admin");
}
