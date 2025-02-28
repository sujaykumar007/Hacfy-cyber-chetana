import { LoginForm } from "@/components/login-form"

export default function PeldgeForm() {
  return (
    <div className=" flex flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  )
}
