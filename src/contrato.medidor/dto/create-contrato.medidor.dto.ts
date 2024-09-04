import { CreateContratoDto } from 'src/contratos/dto/create-contrato.dto';
import { CreateMedidorDto } from 'src/medidor/dto/create-medidor.dto';

export class CreateContratoMedidorDto {
  contrato: CreateContratoDto;
  medidor: CreateMedidorDto;
}
