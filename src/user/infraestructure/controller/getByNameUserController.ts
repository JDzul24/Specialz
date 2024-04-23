import { Request, Response } from "express";
import { GetByNameUserUseCase } from "../../aplication/UseCase/getByNameUserUseCase";

export class GetByNameUserController {
  constructor(readonly getByNameUserUseCase: GetByNameUserUseCase) {}

  async run(req: Request, res: Response) {
    try {
      let {name}=req.body
      const user = await this.getByNameUserUseCase.run(name);

      if (user)
        return res.status(200).send({
          status: "success",
          data:{
            name:user.name,
            last_name: user.last_name,
            password: user.password,
            email:user.email
          },
          message: "Usuarios obtenidos",
        });
      else
        res.status(400).send({
          status: "error",
          messages: "Ocurrio un error aqui",
        });
    } catch (error) {
      console.error("Error en el controlador", error);
      res.status(500).send({
        status: "error",
        message: "Error en el servidor",
      });
    }
  }
}
