import { redirect } from "next/navigation";

// TODO: This is just a quick fix, correct it later...
export default function AdminRedirect() {
  redirect(`${process.env.NEXT_PUBLIC_API_URL}/admin`);
}
