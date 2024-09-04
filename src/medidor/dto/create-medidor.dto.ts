import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsDecimal,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
} from 'class-validator';
enum enumActivo {
  Activo = 'Activo',
  Inactivo = 'Inactivo',
}
export class CreateMedidorDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(15)
  @Transform(({ value }) => value.trim())
  codigo: string;
  @IsDateString()
  fechaInstalacion: Date;
  @IsOptional()
  @IsString()
  @MaxLength(35)
  @Transform(({ value }) => value.trim())
  marca: string;
  @IsOptional()
  @MaxLength(100)
  @IsString()
  observacion: string;
  @IsEnum(enumActivo)
  @IsNotEmpty()
  @IsString()
  @MaxLength(15)
  @Transform(({ value }) => value.trim())
  estado: string;
  @IsOptional()
  @IsDateString()
  fechaBaja: Date;
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  contratosId: number;
  @IsOptional()
  @IsNumber()
  @IsDecimal()
  @Max(99999999.99)
  ultimaLectura: number;
}
