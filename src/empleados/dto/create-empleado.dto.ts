import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateEmpleadoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(13)
  cedula: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(45)
  @Transform(({ value }) => value.trim())
  primerNombre: string;
  @IsOptional()
  @IsString()
  @MaxLength(45)
  @Transform(({ value }) => value.trim())
  segundoNombre: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(45)
  @Transform(({ value }) => value.trim())
  primerApellido: string;
  @IsOptional()
  @IsString()
  @MaxLength(45)
  @Transform(({ value }) => value.trim())
  segundoApellido: string;
  @IsString()
  @MinLength(10)
  @MaxLength(10)
  @Transform(({ value }) => value.trim())
  telefono: string;
  @IsEmail()
  correo: string;
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  usuarioSn: string;
}
