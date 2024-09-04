import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { CreateContratoDto } from 'src/contratos/dto/create-contrato.dto';
enum enumActivo {
  Activo = 'Activo',
  Inactivo = 'Inactivo',
}
export class socioContratoDto {
  @IsDateString()
  fechaContratacion: Date;
  @IsOptional()
  @IsDateString()
  fechaBaja: Date;
  @IsNotEmpty()
  @IsString()
  @IsEnum(enumActivo)
  estado: string;
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  sociosId: number;
}
export class CreateSocioContratoDto extends socioContratoDto {
  contrato: CreateContratoDto;
}
