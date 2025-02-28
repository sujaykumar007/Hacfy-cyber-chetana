import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
        <div className="bg-muted relative hidden md:flex justify-center items-center">
           <span className="font-bold text-2xl">Take the Cyber Safety Pledge</span>
          </div>
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
      
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  
                  required
                />
              </div> <div className="grid gap-3">
                <Label htmlFor="email">Phone Number</Label>
                <Input
                  id="phone-number"
                  type="number"
              
                  required
                />
              </div>
             
              <Button type="submit" className="w-full">
                Submit
              </Button>
              {/* <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                  Sign up
                </a>
              </div> */}
            </div>
          </form>
          
        </CardContent>
      </Card>
      
    </div>
  )
}
