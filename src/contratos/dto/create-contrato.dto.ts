import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
enum enumSn {
  Si = 'Si',
  No = 'No',
}
enum enumActivo {
  Activo = 'Activo',
  Inactivo = 'Inactivo',
}
export class CreateContratoDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(15)
  @Transform(({ value }) => value.trim())
  codigo: string;
  @IsDateString()
  fecha: Date;
  @IsNotEmpty()
  @IsString()
  @IsEnum(enumActivo)
  estado: string;
  @IsNotEmpty()
  @IsString()
  @IsEnum(enumSn)
  medidorSn: string;
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  barrio: string;
  @IsOptional()
  @IsString()
  @MaxLength(50)
  callePrincipal: string;
  @IsOptional()
  @IsString()
  @MaxLength(50)
  calleSecundaria: string;
  @IsOptional()
  @IsString()
  @MaxLength(50)
  numeroCasa: string;
  @IsOptional()
  @IsString()
  @MaxLength(100)
  referencia: string;
  @IsNotEmpty()
  @IsString()
  @IsEnum(enumSn)
  principalSn: string;
  // Revisar si se esta haciendo uso de esta columna ??
  @IsOptional()
  @IsInt()
  @Max(99999999999)
  serviciosCompartidos: number;
  // Cambio 2
  // @IsNotEmpty()
  // @IsInt()
  // @Min(1)
  // sociosId: number;
}
