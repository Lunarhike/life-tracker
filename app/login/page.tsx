import LoginForm from "@/components/auth/LoginForm";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return <LoginForm searchParams={searchParams} />;
}
