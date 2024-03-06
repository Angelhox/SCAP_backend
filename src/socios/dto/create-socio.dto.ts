import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateSocioDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @MaxLength(13)
  @Transform(({ value }) => value.trim())
  cedulaPasaporte: string;
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
  @IsOptional()
  @IsDateString()
  @Transform(({ value }) => value.trim())
  fechaNacimiento: Date;
  @IsOptional()
  @IsEmail()
  correo: string;
  @IsOptional()
  @IsString()
  @MaxLength(10)
  @Transform(({ value }) => value.trim())
  telefonoMovil: string;
  @IsOptional()
  @IsString()
  @MaxLength(9)
  @Transform(({ value }) => value.trim())
  telefonoFijo: string;
  @IsOptional()
  @IsString()
  @MaxLength(45)
  @Transform(({ value }) => value.trim())
  provincia: string;
  @IsOptional()
  @MaxLength(45)
  @Transform(({ value }) => value.trim())
  canton: string;
  @IsOptional()
  @MaxLength(45)
  @Transform(({ value }) => value.trim())
  parroquia: string;
  @IsOptional()
  @MaxLength(45)
  @Transform(({ value }) => value.trim())
  barrio: string;
  @IsOptional()
  @MaxLength(55)
  @Transform(({ value }) => value.trim())
  callePrincipal: string;
  @IsOptional()
  @MaxLength(55)
  @Transform(({ value }) => value.trim())
  calleSecundaria: string;
  @IsOptional()
  @MaxLength(8)
  @Transform(({ value }) => value.trim())
  numeroCasa: string;
  @IsOptional()
  @MaxLength(100)
  @Transform(({ value }) => value.trim())
  referencia: string;
}
