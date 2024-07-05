import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
});

type SignUpFormData = z.infer<typeof signUpForm>;

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpForm),
  });
  const navigate = useNavigate();

  async function handleSignUp(data: SignUpFormData) {
    console.log(data);
    toast.success("Restaurante cadastrado com sucesso!", {
      action: {
        label: "Login",
        onClick: () => navigate("/sign-in"),
      },
    });
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="ghost" asChild>
          <Link to="/sign-in" className="absolute right-8 top-8">
            Fazer login
          </Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta gratis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comeca suas vendas!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register("restaurantName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                id="managerName"
                type="text"
                {...register("managerName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input id="phone" type="tel" {...register("phone")} />
            </div>
            <Button className="w-full" disabled={isSubmitting}>
              Finalizar cadastro
            </Button>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, voce concorda com nosso{" "}
              <a href="" className="underline underline-offset-4">
                Termos de servico
              </a>{" "}
              e{" "}
              <a href="" className="underline underline-offset-4">
                politicas de privacidade.
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
