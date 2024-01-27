import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { NavLink } from "react-router-dom";

function login() {
  return (
    <div className="container flex h-[80vh] items-center">
      <Card className="max-w-sm mx-auto bg-customLilaBg">
        <img src="/logo2.png" className="rounded-lg-md p-4 w-[270px]" alt="" />
        <form className="flex flex-col gap-4 mx-auto">
          <div>
            <div className="mb-2 block ">
              <Label htmlFor="email1" value="Usuario" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="Introduzca su usuario"
              required
            />
          </div>
          <div>
            <div className="mb-2 w-full block">
              <Label htmlFor="password1" value="Contraseña" />
            </div>
            <TextInput id="password1" placeholder="Introduzca su contraseña" type="password" required />
          </div>
         
          <NavLink className='bg-customPurpure text-white rounded-md text-center mx-auto m-4 p-2' to="/index">Iniciar sesion</NavLink>
        </form>
      </Card>
    </div>
  );
}

export default login;
