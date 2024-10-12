import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
enum enumActivo {
  Activo = 'Activo',
  Inactivo = 'Inactivo',
}
export class CreateSectorContratoDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(15)
  @Transform(({ value }) => value.trim())
  codigo: string;
  @IsDateString()
  fechaCreacion: Date;
  @IsOptional()
  @IsDateString()
  fechaBaja: Date;
  @IsNotEmpty()
  @IsString()
  @IsEnum(enumActivo)
  estado: string;
}
