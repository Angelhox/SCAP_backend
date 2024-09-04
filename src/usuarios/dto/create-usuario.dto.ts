import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
//Cambiar validacion de usuario a email !!
export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @MaxLength(255)
  usuario: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(12)
  // 255 Por que la clave va encriptada 45 max para el usuario!
  @MaxLength(255)
  clave: string;
  @IsOptional()
  @IsDateString()
  fechaModificacion: Date;
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  rolesId: number;
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  empleadosId: number;
  @IsOptional()
  @IsInt()
  @Min(1)
  sociosId: number;
}
